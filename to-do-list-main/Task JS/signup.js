function registerUser() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const password = document.getElementById("regPassword").value.trim();
  const message = document.getElementById("registerMessage");

  message.textContent = "";
  message.style.color = "red";


  if (!firstName || !lastName || !email || !password) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];


  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    message.textContent = "This email is already registered. Please login.";
    return;
  }


  const newUser = { firstName, lastName, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration successful! Please login.";


  setTimeout(() => {
    if (typeof showLogin === "function") {
      showLogin();
      return;
    } else {
      window.location.href = "index.html";
      return;
    }
  }, 1500);
}
