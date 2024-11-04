import "./style.css";
import Handlebars from "handlebars";

const templatePath = "/src/templates/template.hbs";

// Fetch the template
async function fetchTemplate(url: string) {
  const response = await fetch(url);
  return response.text();
}

// Compile and render the template
async function renderTemplate() {
  const templateSource = await fetchTemplate(templatePath);
  const template = Handlebars.compile(templateSource);
  const context = {
    title: "Vite + Handlebars",
    description: "This is a Handlebars template rendered with Vite.",
  };
  const html = template(context);
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = html;
}

renderTemplate();
