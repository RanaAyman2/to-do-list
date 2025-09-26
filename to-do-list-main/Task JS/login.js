window.onload = function () {

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (currentUser) {
    window.location.href = "home.html";
    return;
  }


  const showLogin = localStorage.getItem("showLogin");
  if (showLogin === "true") {
    showLoginForm();
    localStorage.removeItem("showLogin");
  }
};

function loginUser() {
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMessage");

  message.textContent = "";
  message.style.color = "red";


  if (email === "" || password === "") {
    message.textContent = "Please fill in all fields.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    message.style.color = "green";
    message.textContent = "Login successful!";

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    if (users.length === 0) {
      document.getElementById("registerPopup").classList.add("show");
    } else {
      const emailExists = users.some((u) => u.email === email);
      if (!emailExists) {
        document.getElementById("registerPopup").classList.add("show");
      } else {
        message.textContent = "Incorrect password.";
      }
    }
  }
}


function showRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

function showLoginForm() {
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function closePopup() {
  document.getElementById("registerPopup").classList.remove("show");
}
