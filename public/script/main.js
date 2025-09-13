document.getElementById("teamForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting immediately
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let role = document.getElementById("role").value.trim();
  let textMsg = document.getElementById("textMsg");

  if (name === "" || email === "" || role === "") {
      textMsg.textContent = "All fields are required!";
  } else {
    textMsg.textContent = "Registration successful!";
    this.reset();
  }
});
