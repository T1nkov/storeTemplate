const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const showSlide = (n) => {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
};

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);

const scrollToInput = () => {
  const phone = document.querySelector(".form_phone");
  phone.scrollIntoView({ behavior: "smooth" });
};

const windowAssign = () => {
  window.location.href = "../good.html";
};

window.addEventListener("load", function () {
  let button = document.querySelector(".myButton");
  let isScaled = false;

  setInterval(function () {
    if (isScaled) {
      button.style = "scale:1; transition: 1.2s;";

      isScaled = false;
    } else {
      button.style = "scale:1.07;transition: 1s;";

      isScaled = true;
    }
  }, 600);
});

window.addEventListener("load", function () {
  let button = document.querySelector(".myButton2");
  let isScaled = false;

  setInterval(function () {
    if (isScaled) {
      button.style = "scale:1; transition: 1.2s;";

      isScaled = false;
    } else {
      button.style = "scale:1.07;transition: 1.2s;";

      isScaled = true;
    }
  }, 600);
});

const btn = document.getElementById("submitButton");

const order = () => {
  const form = document.querySelector(".form");
  const formData = new FormData(form);
  console.log(formData);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../sendEmail.php");
  const phone = document.querySelector(".form_phone");

  try {
    if (!/^\+375\d{9}$/gm.test(phone.value))
      throw new Error("Неверный формат номера телефона");
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log("Произошла ошибка при отправке данных");
      }
    };
    phone.scrollIntoView({ behavior: "smooth" });
    windowAssign();
    xhr.send(formData);
    return true;
  } catch (error) {
    phone.value = "";
    phone.placeholder = error.message;
  }
};
