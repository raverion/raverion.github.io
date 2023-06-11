import jsPDF from "jspdf";
import "jspdf-autotable";

export const generatePDF = (
  selectedOption,
  inputData,
  tableDataA,
  tableData,
  tableDataB
) => {
  const doc = new jsPDF();

  const logoScale = 0.8;
  const footerScale = 1.4;
  const xLeft = 15;
  const xRight = 155;

  // Calculate Total Amount
  let totalSumA = tableDataA.reduce(
    (acc, obj) => acc + Number(obj.quantity * obj.rate),
    0
  );
  let totalSum = tableData.reduce(
    (acc, obj) => acc + Number(obj.quantity * obj.rate),
    0
  );
  let totalFinalSum = totalSumA + totalSum;

  // Parsing Corporate Discount
  let corpDiscount;
  if (selectedOption === "QUOTE") {
    corpDiscount = inputData.input_6;
  } else if (selectedOption !== "PAYROLL") {
    corpDiscount = inputData.input_5;
  } else {
    corpDiscount = 0;
  }

  let corpDiscountAmt;
  if (selectedOption !== "PAYROLL") {
    if (typeof (corpDiscount === "string") && corpDiscount.includes("%")) {
      // if % sign
      let _corpDiscount = corpDiscount.substring(0, corpDiscount.length - 1);
      corpDiscountAmt = (totalFinalSum * _corpDiscount) / 100;
    } else {
      // if no % sign
      corpDiscountAmt = corpDiscount;
    }
  }
  let discountedTotalFinalSum = totalFinalSum - corpDiscountAmt;

  // y-coordinate tracker
  let currY = 0;

  // MFTS logo
  let imgData = require("./MFTS_logo.png");
  doc.addImage(
    imgData,
    "PNG",
    65, // X coordinate of the image
    5, // Y coordinate of the image
    Math.trunc(96 * logoScale), // Width of the image
    Math.trunc(30 * logoScale) // Height of the image
  );

  // Header
  doc.setFont("helvetica");
  doc.setFontSize(9);

  if (selectedOption !== "PAYROLL") {
    // Add content to the PDF document using the input data
    doc.text(`To: ${inputData.input_0}`, xLeft, 35); // To
    if (selectedOption === "INV" && inputData.input_6 !== "") {
      doc.text(`TRN: ${inputData.input_6}`, xLeft, 40);
      doc.text(`Address: ${inputData.input_1}`, xLeft, 45); // Address
      currY = 55;
    } else {
      doc.text(`Address: ${inputData.input_1}`, xLeft, 40); // Address
      currY = 50;
    }
    doc.text(`Date: ${inputData.input_2}`, xRight, 35); // Date
    doc.text(`Quote/Invoice#: ${inputData.input_3}`, xRight, 40); // DocNum
  } else {
    currY = 38;
  }

  // Document Type
  doc.setFontSize(14);
  if (selectedOption === "ACKRECEIPT") {
    doc.text(`ACKNOWLEDGEMENT RECEIPT`, 70, currY);
  } else if (selectedOption === "INV") {
    doc.text(`INVOICE`, 95, currY);
  } else if (selectedOption === "QUOTE") {
    doc.text(`QUOTATION`, 90, currY);
  } else if (selectedOption === "SOA") {
    doc.text(`STATEMENT OF ACCOUNT`, 70, currY);
  } else if (selectedOption === "PAYROLL") {
    doc.text(`PAYROLL ${inputData.input_1}`, 83, currY);
  }

  // Title of the Document. Set the text to center align
  currY = currY + 7;
  let textWidth = 0;
  doc.setFontSize(11);
  if (selectedOption !== "PAYROLL") {
    textWidth = doc.getTextWidth(inputData.input_4);
    const pageWidth = doc.internal.pageSize.width;
    const centerX = (pageWidth - textWidth) / 2;
    doc.text(`${inputData.input_4}`, centerX, currY); // Add the centered text to the PDF document
    currY = currY + 5;
  } else if (selectedOption === "PAYROLL") {
    textWidth =
      doc.getTextWidth(inputData.input_2) +
      doc.getTextWidth(inputData.input_0 + 3); // for PAYROLL, title is index #2
    const pageWidth = doc.internal.pageSize.width;
    const centerX = (pageWidth - textWidth) / 2;
    doc.text(`${inputData.input_2} - ${inputData.input_0}`, centerX, 45); // Add the centered text to the PDF document
    currY = 50;
  }

  // Particulars Table
  doc.setFontSize(10);
  if (tableDataA.length > 0) {
    // doc.text(`PARTICULARS:`, xLeft, currY);
    doc.autoTable({
      startY: currY,
      columnStyles: {
        0: { columnWidth: 85 },
        1: { columnWidth: 12 },
        2: { columnWidth: 12 },
        3: { columnWidth: 23 },
        4: { columnWidth: 30 },
        5: { columnWidth: 20 },
      },
      headStyles: {
        halign: "center",
        fillColor: [120, 120, 120],
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      bodyStyles: {
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      footStyles: {
        halign: "left",
        fillColor: [190, 190, 190],
        textColor: [0, 0, 0],
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      head: [["Particulars", "Qty", "Unit", "Rate", "Amount", "Remarks"]],
      body: tableDataA.map((row) => {
        const { description, quantity, unit, rate, remarks } = row;
        return [description, quantity, unit, rate, quantity * rate, remarks];
      }),
      // foot: [["Subtotal", "", "", "", `${totalSumA}   AED`, ""]],
      foot: [
        [
          "",
          "",
          "",
          "",
          `${totalSumA.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}   AED`,
          "",
        ],
      ],
      theme: "striped",
    });
    currY = currY + tableDataA.length * 6 + 10;
  }

  // Materials Table
  if (tableData[0].description !== "") {
    // doc.text(`MATERIALS:`, xLeft, currY);
    currY += 2;
    doc.autoTable({
      // startY: currY,
      columnStyles: {
        0: { columnWidth: 85 },
        1: { columnWidth: 12 },
        2: { columnWidth: 12 },
        3: { columnWidth: 23 },
        4: { columnWidth: 30 },
        5: { columnWidth: 20 },
      },
      headStyles: {
        halign: "center",
        fillColor: [120, 120, 120],
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      footStyles: {
        halign: "left",
        fillColor: [190, 190, 190],
        textColor: [0, 0, 0],
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      bodyStyles: {
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      head: [["Materials", "Qty", "Unit", "Rate", "Amount", "Remarks"]],
      body: tableData.map((row) => {
        const { description, quantity, unit, rate, remarks } = row;
        return [description, quantity, unit, rate, quantity * rate, remarks];
      }),
      foot: [
        [
          "",
          "",
          "",
          "",
          `${totalSum.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}   AED`,
          "",
        ],
      ],
      theme: "striped",
    });
    currY = currY + tableData.length * 6 + 20;
  }

  // Total row
  // Corporate Discount row
  if (corpDiscount !== "" && selectedOption !== "PAYROLL") {
    const totalrow = [
      [
        `Subtotal:`,
        `${totalFinalSum.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}   AED`,
      ],
    ];
    const discRow = [
      [
        `Corporate Discount: ${corpDiscount}`,
        `(${corpDiscountAmt.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })})   AED`,
      ],
    ];
    const discountedTotalRow =
      selectedOption !== "ACKRECEIPT"
        ? [
            [
              `TOTAL:`,
              `${discountedTotalFinalSum.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}   AED`,
            ],
          ]
        : [
            [
              `TOTAL PAID:`,
              `${discountedTotalFinalSum.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}   AED`,
            ],
          ];
    doc.autoTable({
      columnStyles: {
        0: { columnWidth: 132, halign: "left" },
      },
      headStyles: {
        fontStyle: "normal",
        fontSize: 8,
        fillColor: [210, 210, 210],
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      bodyStyles: {
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      footStyles: {
        fontStyle: "bold",
        fillColor: [250, 240, 0], // lime
        fontSize: 8,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      head: [totalrow[0]],
      body: [discRow[0]],
      foot: [discountedTotalRow[0]],
      theme: "striped",
    });

    totalFinalSum = discountedTotalFinalSum; // for when it is needed to export the final sum
  } else if (corpDiscount === "" || selectedOption === "PAYROLL") {
    const totalrow =
      selectedOption !== "ACKRECEIPT"
        ? [
            [
              `TOTAL:`,
              `${totalFinalSum.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}   AED`,
            ],
          ]
        : [
            [
              `TOTAL PAID:`,
              `${totalFinalSum.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}   AED`,
            ],
          ];

    doc.autoTable({
      columnStyles: {
        0: { columnWidth: 132, halign: "left" },
      },
      bodyStyles: {
        fontStyle: "bold",
        fillColor: [250, 240, 0], // lime
        fontSize: 8,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      body: [totalrow[0]],
      theme: "plain",
    });
  }

  if (tableDataB[0].description !== "") {
    const scopeOfWork = [[`Scope of Work`, "Remarks"]];
    doc.autoTable({
      headStyles: {
        halign: "center",
        fillColor: [120, 120, 120],
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      bodyStyles: {
        fontSize: 8,
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      head: [scopeOfWork[0]],
      body: tableDataB.map((row) => {
        const { description, remarks } = row;
        return [description, remarks];
      }),
      theme: "striped",
    });
  }

  if (selectedOption === "QUOTE") {
    doc.setFontSize(11);
    doc.text(`Project Duration: ${inputData.input_5}`, xLeft, 200);
    doc.setFontSize(8);
    doc.text(`Terms and Agreement:`, xLeft, 208);
    if (inputData.input_8) {
      doc.text(
        `1. ${
          inputData.input_8
        }% downpayment upon confirmation of this quotation, and ${
          100 - inputData.input_8
        }% upon completion of the project. Work will not commence otherwise.`,
        xLeft,
        213
      );
    } else {
      doc.text(`1. No advance payment is required.`, xLeft, 213);
    }
    if (inputData.input_7) {
      // if Warranty field is populated
      doc.text(
        `2. Warranty is valid for ${inputData.input_7} starting from date of project commencement.`,
        xLeft,
        218
      );
    }
  }

  if (selectedOption !== "PAYROLL") {
    imgData = require("./Footer2.png");
    doc.addImage(
      imgData,
      "PNG",
      xLeft - 3, // X coordinate of the image
      221, // Y coordinate of the image
      Math.trunc(132 * footerScale), // Width of the image
      Math.trunc(52 * footerScale) // Height of the image
    );
  }
  // Save the PDF document
  if (selectedOption === "QUOTE") {
    doc.save(
      `${inputData.input_3} - ${inputData.input_2} - ${inputData.input_0}.pdf`
    );
  } else if (selectedOption === "ACKRECEIPT") {
    doc.save(
      `ACKRECEIPT - ${inputData.input_3} - ${inputData.input_2} - ${inputData.input_0}.pdf`
    );
  } else if (selectedOption !== "PAYROLL") {
    doc.save(
      `${inputData.input_3} - ${inputData.input_2} - ${inputData.input_0}.pdf`
    );
  } else if (selectedOption === "PAYROLL") {
    doc.save(`${inputData.input_1} - ${inputData.input_0}.pdf`);
  }
};
