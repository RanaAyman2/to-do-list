const translations = {
  en: {
    todoList: "TO DO LIST",
    home: "Home",
    about: "About",
    tasks: "Tasks",
    signin: "Sign In",
    signup: "Sign Up",
    login: "Login",
    register: "sing up",
    noAccount: "Don't have an account?",
    haveAccount: "Have an account?",
    Username: "Username or Email",
    Password: "Password",
    Firstname: "Firstname",
    Lastname: "Lastname",
    Email: "Email",
    remember: "Remember Me",
    forgot: "Forgot password?",
    terms: "Terms & conditions",
    noAccount: "You don't have an account. Please register first.",
    goToRegister: "Go to Register",
    close: "Close"
  },
  ar: {
   todoList: "قائمة المهام",
    home: "الرئيسية",
    about: "من نحن",
    tasks: "المهام",
    signin: "تسجيل الدخول",
    signup: "إنشاء حساب",
    login: "تسجيل الدخول",
    register: "تسجيل",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "هل لديك حساب؟",
    Username: "اسم المستخدم أو البريد الإلكتروني",
    Password: "كلمة المرور",
    Firstname: "الاسم الأول",
    Lastname: "الاسم الأخير",
    Email: "البريد الإلكتروني",
    remember: "تذكرني",
    forgot: "نسيت كلمة المرور؟",
    terms: "الشروط والأحكام",
    noAccount: "ليس لديك حساب. من فضلك سجّل أولاً.",
    goToRegister: "الذهاب إلى التسجيل",
    close: "إغلاق"
  },
  
};
function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });

  // Placeholder & Values
  document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
    const key = el.getAttribute("data-translate-placeholder");
    el.placeholder = translations[lang][key];
  });

  document.querySelectorAll("[data-translate-value]").forEach(el => {
    const key = el.getAttribute("data-translate-value");
    el.value = translations[lang][key];
  });

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  localStorage.setItem("lang", lang);
}

// Events
document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-ar").addEventListener("click", () => setLanguage("ar"));

// Load saved language
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
const buttons = document.querySelectorAll(".language-switch button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
