function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const myName = "ayoub"; // 👈 CHANGE THIS IF YOU WANT

  if (input === myName) {
    window.location.href = "page.html";
  } else {
    error.textContent = "Wrong name ❌ Try again.";
  }
}
