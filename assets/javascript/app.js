import search from "./character-search";
import search2 from "./event-search";

const form = document.querySelectorAll("[data-form]");

form[0].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search(formData.get("heroName"));
});

form[1].addEventListener("submit", event => {
  event.preventDefault();

  const formComponent = event.target;

  const formData = new FormData(formComponent);

  search2(formData.get("eventName"));
});
