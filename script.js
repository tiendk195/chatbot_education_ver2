const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWUbSWX4g7x1Ht0i0dw7IzLGot2-lE6yeMoixpBXBMIZGLX7fkNnbfZzKYsD9ltmYaEw/exec";
const form = document.forms["contact-form"];

// Thêm sự kiện submit cho form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn chặn hành động mặc định của form

  // Lấy giá trị đánh giá từ phần rating
  const ratingValue = document.getElementById("rating-value").textContent;

  // Lấy dữ liệu từ form
  const formData = new FormData(form);

  // Thêm giá trị đánh giá vào dữ liệu gửi đi
  formData.append("rating", ratingValue);

  // Gửi dữ liệu qua fetch
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      alert(
        "Cảm ơn bạn đã phản hồi. Chúng tôi sẽ nhanh chóng khắc phục để cải thiện trải nghiệm của bạn!"
      );
      window.location.reload(); // Tải lại trang sau khi gửi thành công
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi gửi phản hồi của bạn. Vui lòng thử lại sau!");
    });
});

