const $form = document.getElementById("form");
const $buttonMail = document.getElementById("portfolio");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(this);
  $buttonMail.setAttribute(
    "href",
    `mailto:jonathandajome@gmail.com?subject=${form.get(
      "name"
    )} &body=${form.get("message")}`
  );
  $buttonMail.click();
}

/**
 * * Mousemove Event
 */

const $profile = document.getElementById("profile");
const height = $profile.clientHeight;
const width = $profile.clientWidth;

$profile.addEventListener("mousemove", (evt) => {
  const { layerX, layerY } = evt;

  const yRotation = ((layerX - width / 2) / width) * 20;
  const xRotation = ((layerY - height / 2) / height) * 20;

  const string = `
  perspective(400px)
  scale(1.1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `;
  $profile.style.transform = string;
});

$profile.addEventListener("mouseout", () => {
  $profile.style.transform = `
  perspective(400px)
  scale(1)
  rotateX(0)
  rotateY(0)
  `;
});
