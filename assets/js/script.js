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
    var username = document.getElementById("user-login").value;
    var userFormLocalStorage = JSON.parse(localStorage.getItem(username));
    var password = document.getElementById("password-login").value;

    if (userFormLocalStorage) {
      if (userFormLocalStorage.username === username) {
        if (userFormLocalStorage.password === password) {
          console.log('Successfully logged in.');
        } else {
          console.log('Wrong password.');
        }
      } 
    } else {
      console.log('User doesn\'t exist.');
    }
  });
});

// Signup function
function signup(e) {
  event.preventDefault();
  // console.log('working');

  var email = document.getElementById("email-signup").value;
  var username = document.getElementById("user-signup").value;
  var password = document.getElementById("password-signup").value;

  var user = {
    email: email,
    username: username,
    password: password,
  };

  // storing input from register-form
  var json =  JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("USER ADDED");
}

var form = document.getElementById('form')
form.addEventListener('submit', function(event){
  Event.preventDefault()
  var width = document.getElementById('width').value
  var height = document.getElementById('height').value
  var url = 'https://picsum.photos/${width}/${height}'
  var image = document.getElementById('img')
  image.src = url
})

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
