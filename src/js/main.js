const $form = document.getElementById("form");
const $buttonMail = document.getElementById("portfolio");

$form.addEventListener("submit", handleSubmit)

function handleSubmit (e) {
  e.preventDefault();
  const form = new FormData(this);
  $buttonMail.setAttribute('href', `mailto:jonathandajome@gmail.com?subject=${form.get('name')} &body=${form.get('message')}`)
  $buttonMail.click()
}