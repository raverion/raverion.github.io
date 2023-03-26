function encryptText() {
  const text = document.getElementById("textarea1").value;
  const passphrase = document.getElementById("fname").value;
  const encryptedText = CryptoJS.AES.encrypt(text, passphrase);
  document.getElementById("textarea1").value = encryptedText;
  document.getElementById("fname").value = ""; // clear input field
}

function decryptText() {
  const text = document.getElementById("textarea1").value;
  const passphrase = document.getElementById("fname").value;

  const decryptedText = CryptoJS.AES.decrypt(text, passphrase);
  const decrypted = decryptedText.toString(CryptoJS.enc.Utf8);
  document.getElementById("textarea1").value = decrypted;
  document.getElementById("fname").value = ""; // clear input field
}

function openFile() {
  let fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".txt";

  let fileContents;
  fileInput.addEventListener("change", function () {
    var file = fileInput.files[0];
    reader = new FileReader();

    reader.onload = function () {
      document.getElementById("textarea1").value = reader.result;
    };

    reader.readAsText(file);
  });

  fileInput.click();
  delete fileInput;
}

function saveFile() {
  if ((promptFilename = prompt("Save file as", ""))) {
    var textBlob = new Blob([document.getElementById("textarea1").value], {
      type: "text/plain",
    });
    var downloadLink = document.createElement("a");
    downloadLink.download = promptFilename + ".txt";
    downloadLink.innerHTML = "Download File";
    downloadLink.href = window.URL.createObjectURL(textBlob);
    downloadLink.click();
    delete downloadLink;
    delete textBlob;
  }
}
