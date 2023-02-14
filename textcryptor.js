function getText() {
  const text = document.getElementById("textarea1").value;
  const key = document.getElementById("fname").value;
  alert(text + key);
}

function setText() {
  document.getElementById("textarea1").value = "Text decrypted";
}

function getKey() {
  const message = document.getElementById("textarea1").value;
  alert(message);
}

function hashKey() {}
