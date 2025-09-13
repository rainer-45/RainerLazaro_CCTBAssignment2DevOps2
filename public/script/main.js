document.getElementById("teamForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting immediately
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let role = document.getElementById("role").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "" || role === "") {
    errorMsg.textContent = "All fields are required!";
  } else {
    errorMsg.textContent = "";
    alert("Registration successful!");
    this.reset();
  }
});
