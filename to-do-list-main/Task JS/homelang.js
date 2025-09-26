const translations = {
  en: {
    welcome: "Welcome!",
    placeholderTask: "Enter new task...",
    addBtn: "Add",
    logoutBtn: "Logout",
    editBtn: "Edit",
    deleteBtn: "Delete",
    completeBtn: "Done",
  },
  ar: {
    welcome: "مرحباً!",
    placeholderTask: "أدخل مهمة جديدة...",
    addBtn: "إضافة",
    logoutBtn: "تسجيل خروج",
    editBtn: "تعديل",
    deleteBtn: "حذف",
    completeBtn: "تم",
  },
};


const welcomeUser = document.getElementById("welcomeUser");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const logoutBtn = document.getElementById("logoutBtn");


function updateTaskButtons(lang) {
  document.querySelectorAll(".edit").forEach(btn => {
    btn.textContent = translations[lang].editBtn;
  });
  document.querySelectorAll(".delete").forEach(btn => {
    btn.textContent = translations[lang].deleteBtn;
  });
  document.querySelectorAll(".complete").forEach(btn => {
    btn.textContent = translations[lang].completeBtn;
  });
}

const btnEn = document.getElementById("lang-en");
const btnAr = document.getElementById("lang-ar");


function switchLanguage(lang) {
  welcomeUser.textContent = translations[lang].welcome;
  taskInput.placeholder = translations[lang].placeholderTask;
  addBtn.textContent = translations[lang].addBtn;
  logoutBtn.textContent = translations[lang].logoutBtn;

  updateTaskButtons(lang);

  if (lang === "en") {
    btnEn.classList.add("active");
    btnAr.classList.remove("active");
  } else {
    btnAr.classList.add("active");
    btnEn.classList.remove("active");
  }

  localStorage.setItem("selectedLanguage", lang);
}


window.onload = function () {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  switchLanguage(savedLang);
};


btnEn.addEventListener("click", () => switchLanguage("en"));
btnAr.addEventListener("click", () => switchLanguage("ar"));


