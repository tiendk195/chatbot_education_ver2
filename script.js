const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWUbSWX4g7x1Ht0i0dw7IzLGot2-lE6yeMoixpBXBMIZGLX7fkNnbfZzKYsD9ltmYaEw/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert(
        "Cảm ơn bạn đã phản hồi,chúng tôi sẽ nhanh chóng khắc phục để có trải nghiệm tốt hơn!"
      )
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
