function checkName() {
  const input = document.getElementById("nameInput").value.toLowerCase();
  const error = document.getElementById("error");

  const myName = "Ayoub"; // 👈 put your name here

  if (input === myName) {
    window.location.href = "page.html";
  } else {
    error.textContent = "Wrong name ❌ Try again.";
  }
}
