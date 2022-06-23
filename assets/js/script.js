searchForm = document.querySelector('.search-form');

var searchTerm = document.querySelector('.search-form').value;

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 2000);
}

fadeOut();

var swiper = new Swiper(".books-slider", {
    loop:true,
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
    loop:true,
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

var searchTermHandler = function(event) {
  event.preventDefault();
  console.log(event);
};

var searchInput = document.querySelector("#search-box")

searchInput.addEventListener("submit", searchTermHandler)

var getGoogleBooks = function(searchInput) {

  var googleBooksApi = "https://www.googleapis.com/books/v1/volumes?q=" + searchInput + "&key=AIzaSyAecO1RHP641dZIsxWcYpuiCn5gGt5hRQk"

  fetch (googleBooksApi).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });

}
getGoogleBooks(searchInput);