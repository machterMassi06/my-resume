(function () {
  "use strict";

  const translations = window.CV_TRANSLATIONS;
  const languageKey = "cv-language";
  const languageToggle = document.querySelector(".language-toggle");
  const languageAnnouncement = document.querySelector("#language-announcement");
  const supportedLanguages = ["fr", "en"];

  function getBrowserLanguage() {
    const preferredLanguage = (Array.isArray(navigator.languages) && navigator.languages[0]) || navigator.language || "";
    return preferredLanguage.toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  function getInitialLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem(languageKey);
      if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
    } catch (error) {
      console.warn("Language preference could not be read from local storage.", error);
    }
    return getBrowserLanguage();
  }

  function translate(language) {
    const dictionary = translations[language];
    const resolve = (path) => path.split(".").reduce((object, key) => object && object[key], dictionary);
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolve(element.dataset.i18n);
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = resolve(element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = resolve(element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-href]").forEach((element) => {
      const value = resolve(element.dataset.i18nHref);
      if (typeof value === "string") element.setAttribute("href", value);
    });

    document.title = dictionary.meta.title;
    document.querySelector('meta[name="description"]').content = dictionary.meta.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.meta.title;
    document.querySelector('meta[property="og:description"]').content = dictionary.meta.description;
    document.querySelector('meta[property="og:locale"]').content = dictionary.meta.ogLocale;
    document.querySelector('meta[property="og:image"]').content = new URL("assets/images/profile-placeholder.svg", document.baseURI).href;
    document.querySelector("#current-year").textContent = String(new Date().getFullYear());
    languageToggle.setAttribute("aria-label", dictionary.languageToggleLabel);
    languageToggle.querySelectorAll("[aria-hidden='true']:not(.toggle-divider)").forEach((item) => {
      item.classList.toggle("is-current", item.textContent.toLowerCase() === language);
    });
    languageAnnouncement.textContent = dictionary.announcements.language;

    try {
      window.localStorage.setItem(languageKey, language);
    } catch (error) {
      console.warn("Language preference could not be saved to local storage.", error);
    }
  }

  languageToggle.addEventListener("click", () => {
    translate(document.documentElement.lang === "fr" ? "en" : "fr");
  });
  translate(getInitialLanguage());
}());
