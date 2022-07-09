let app = {
  title : "",
  version: 1
};

let nextId = 1;

let demoTasks = [
    {
      id: generateId(),
      text: 'Aprender HTML 🦴 / CSS 🎨 / JS 🧠.'
    },
    {
      id: generateId(),
      text: 'Aprender React ⚛️.'
    },
    {
      id: generateId(),
      text: "Aprender Vue 👁️."
    },
    {
      id: generateId(),
      text: "Aprender Angular 🪨."
    }
];

export function setAppData() {
  app.title = "🙀 Tareas Pendientes";
  app.version = 1;
  app.lang = "es-AR";
}

export function getNewExpirationTime() {
  return Date.now() + (15 * 24 * 60 * 60 * 1000);
}

export function generateId() {
  return nextId++;
}

export function getAppTitle() {
  return app.title;
}

export function setAppTitle(title) {
  app.title = title;
}

export function getAppVersion() {
  return app.version;
}

export function setAppVersion(version) {
  let number = parseInt(version);
  app.version = isNaN(number)? app.version : number;
}

export function getAppLanguage() {
  return app.lang;
}

export function setAppLanguage(lang) {
  if(lang === "es-AR" || lang === "en-US") {
    app.lang = lang;
  }
}

export function getAppDescription() {
  return app.description;
}

export function setAppDescription(desc) {
  app.description = desc;
}

export function getDemoTasks(){
  return demoTasks;
}

export function addDemoTask(text){
  demoTasks.unshift({id: generateId(), text: text});
}