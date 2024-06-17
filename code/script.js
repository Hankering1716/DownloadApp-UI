

const currentDate = document.querySelectorAll(".date");

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Data = new Date();

document
  .querySelectorAll(".date")
  .forEach(
    (node) =>
      (node.innerHTML =
        Data.getDate() +
        " " +
        month[Data.getMonth()] +
        " " +
        Data.getFullYear())
  );

function updateContent() {
  let lang = window.navigator.languages ? window.navigator.languages[0] : null;
  lang =
    lang ||
    window.navigator.language ||
    window.navigator.browserLanguage ||
    window.navigator.userLanguage;

  const LanguageNames = document.querySelectorAll(".countryComputer");
  LanguageNames.forEach((element) => {
    element.textContent = lang.toUpperCase();
  });
}
window.onload = updateContent;

function changeLanguage(lang) {
  const LanguageNames = document.querySelectorAll(".countryComputer");

  LanguageNames.forEach((element) => {
    element.textContent = lang;
    document.documentElement.lang = lang.toLowerCase();


  });
}


