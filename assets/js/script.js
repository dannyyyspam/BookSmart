searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message--success", "form-message--error");
  messageElement.classList.add(`form-message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form-input--error");
  inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form-input--error");
  inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  // document.querySelectorAll(".form-input").forEach(inputElement => {
  //     inputElement.addEventListener("blur", e => {
  //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 7) {
  //             setInputError(inputElement, "Username must be at least 7 characters in length");
  //         }
  //     });

      // inputElement.addEventListener("input", e => {
      //     clearInputError(inputElement);
      // });
  // });
});

// Signup function
function signup(e) {
  event.preventDefault();
  // console.log('working');

  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var user = {
    email: email,
    username: username,
    password: password,
  };

  var json =  JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("USER ADDED");
}

// function loader(){
//   document.querySelector('.loader-container').classList.add('active');
// }

// function fadeOut(){
//   setTimeout(loader, 2000);
// }

// fadeOut()

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var searchTermHandler = function (event) {
  event.preventDefault();
  console.log(event);
};

var searchInput = document.querySelector("#search-box");

searchInput.addEventListener("submit", searchTermHandler);

var getGoogleBooks = function (searchTerm) {
  var googleBooksApi =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    searchTerm +
    "&key=AIzaSyAecO1RHP641dZIsxWcYpuiCn5gGt5hRQk";

  fetch(googleBooksApi).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};
getGoogleBooks("Python");
