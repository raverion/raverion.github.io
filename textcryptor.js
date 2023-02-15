function encryptText() {
  const text = document.getElementById("textarea1").value;
  const passphrase = document.getElementById("fname").value;
  const encryptedText = CryptoJS.AES.encrypt(text, passphrase);
  document.getElementById("textarea1").value = encryptedText;
}

function decryptText() {
  const text = document.getElementById("textarea1").value;
  const passphrase = document.getElementById("fname").value;

  const decryptedText = CryptoJS.AES.decrypt(text, passphrase);
  const decrypted = decryptedText.toString(CryptoJS.enc.Utf8);
  document.getElementById("textarea1").value = decrypted;
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
}

function saveFile() {}
