export { i18Obj, getTranslate, language, langEn, langBy };

const i18Obj = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contacts: "Contacts",
    download: "Download CV",
    "intro-title-hi": "Hello",
    "intro-title-name": "My name is",
    "intro-title-fullname": "Alexsi Siniauski",
    "intro-subtitle":
      "I'm a self-taught front-end web developer.I like to create interactive and accessible websites and web apps.",
    " about-title": "More About me",
    "about-text":
      "I'm a trustworthy, self-motivated front-end web developer. My goal is create things that make life better for everyone, everywhere. I have experience working with HTML/CSS/JavaScript. Take a look at my pet projects. Every new project develops my skills into a well-rounded.   Get in touch with me. I'm always ready to find creative and innovative solutions for new challenges!!!",
    "about-me-importnat": "front-end web developer.",
    "skills-title": "My Skills",
    "projects-title": "Some of My projects",
    "tag-all": "All",
    "tag-current": "Current project",
    "tag-website": "Website",
    "tag-app": "Web Application",
    "tag-websit": "WebSite",
    "tag-source": "Project Source",
    "project-1": "Travel project",
    "project-1-details": "Travel planning adaptive and interactive website",
    "project-2": "Personal Website Project",
    "project-2-details": "Personal responsive and interactive website",
    "project-3": "Momentum Project",
    "project-3-details":
      "A simple copy of the Chrome Web Store app of the same name",
    "project-4": " Project of the photographer's portfolio",
    "project-4-details":
      "Photographer portfolio responsive and interactive website",
    "project-5": "Animal Shelter Project",
    "project-5-details": "Animal Shelter responsive and interactive website",
    "project-6": "Online-zoo Pet Project",
    "project-6-details": "Online-zoo responsive and interactive website",
    "project-7": "Plants Project",
    "project-7-details": "Plants responsive and interactive website",
    "project-8": "Color-flipper Project",
    "project-8-details":
      "A mini javascript project in which you will change the background to a random color",
    "contacts-title": "Get in touch with me",
    "send-message": "Send Message",
  },
  by: {
    home: "Да дому",
    about: "Пра мяне",
    skills: "Здольнасці",
    projects: "Праекты",
    contacts: "Кантакты",
    download: "Сампаваць CV",
    "intro-title-hi": "Вітаю",
    "intro-title-name": "Мяне завуць",
    "intro-title-fullname": "Аляксей Сіняўскі",
    "intro-subtitle-info":
      "Я вэб-распрацоўшчык самавук. Мне падабаецца ствараць інтэрактыўныя і даступныя вэб-сайты і вэб-прылады",
    "intro-welcome": "Рады вас бачыць на сваём сайце",
    "about-title": "Больш пра мяне",
    "about-text":
      "Я надзейны, мэтанакіраваны вэб-распрацоўшчык. Мая мэта – стаць прафесійным вэб-распрацоўшчыкам, які стварае рэчы, што робяць жыццё лепшым для ўсіх і ўсюды. У мяне ёсць досвед працы з HTML/CSS/JavaScript. Зірніце на мае праекты. Кожны новы праект паляпшае мае навыкі і прыбляжае мяне да маёй мэты. Звяжыцеся са мной. Я заўсёды гатовы да пошуку творчых і наватарскіх падыходаў для рашэння новых задач!!!",
    "about-me-importnat": "front-end web developer.",
    "skills-title": "Мае Навыкі",
    "projects-title": "Некаторыя з маіх праектаў",
    "tag-all": "Усе",
    "tag-current": "Актуальны праект",
    "tag-website": "Вэб-сайт",
    "tag-app": "Вэб-аплікацыя",
    "tag-source": "Код",
    "project-1": "Праект 'Падарожжа'",
    "project-1-details":
      "Адаптыўны і інтэрактыўны вэб-сайт планавання падарожжаў",
    "project-2": "Праект 'Асабісты сайт-партфоліа'",
    "project-2-details": "Персанальны адаптыўны і інтэрактыўны вэб-сайт",
    "project-3": "Праект 'Momentum'",
    "project-3-details":
      "Простая копія аднайменнай праграмы з Chrome Web Store",
    "project-4": "Праект 'Партфоліа фатографа'",
    "project-4-details":
      "Адаптыўны і інтэрактыўны вэб-сайт партфоліа фатографа",
    "project-5": "Праект 'Прытулак для жывёл'",
    "project-5-details":
      "Адаптыўны і інтэрактыўны  вэб-сайт прытулку для жывёл",
    "project-6": "Праект 'Анлайн-заапарк'",
    "project-6-details": "Адаптыўны і інтэрактыўны вэб-сайт анлайн-заапарка",
    "project-7": "Праект 'Расліны'",
    "project-7-details": "Адаптыўны і інтэрактыўны вэб-сайт пра расліны",
    "project-8": "Праект 'Color-flipper'",
    "project-8-details":
      "Міні-праект, у якім можна змяніць фон картак на выпадковы колер",
    "project-9": "Праект 'Кіно'",
    "project-9-details":
      "Просты дададак для пошука фільмаў зроблены з дапамогай Vanilla JavaScript",
    "contacts-title": "Звяжыцеся са мной",
    "send-message": "Адправіць паведамленне",
  },
};

const langEn = document.querySelector(".lang-en");
const langBy = document.querySelector(".lang-by");

let language;

const getTranslate = (language) => {
  const dataTranslate = document.querySelectorAll("[data-i18]");

  dataTranslate.forEach((el) => {
    let key = el.dataset.i18;
    el.textContent = i18Obj[language][key];
  });
};

langEn.addEventListener("click", () => getTranslate((language = "en")));
langBy.addEventListener("click", () => getTranslate((language = "by")));
