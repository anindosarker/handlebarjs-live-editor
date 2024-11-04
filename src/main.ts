import { context } from "./context/context";
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

  const html = template(context);
  document.open();
  document.write(html);
  document.close();
}

renderTemplate();
