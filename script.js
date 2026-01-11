function checkName() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  const error = document.getElementById("error");

  const myName = "ayoub"; // MUST be lowercase

  if (input === myName) {
    window.location.href = "page.html";
  } else {
    error.textContent = "Wrong name ❌ Try again.";
  }
}
