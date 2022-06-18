searchForm = document.querySelector('.search-form');

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

fadeOut()

$(document).ready(function() {
  var item, title, author, publisher, bookLink, bookImg
  var outputList = document.getElementById("modal-output")
  var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
  var placeholder = ""
  var searchData;

  $("#search-btn").click(function () {
    console.log("hello")
    outputList.innerHTML = ""
    searchData = $("#search-box").val()
    //handeling empty search input field
    if (searchData === "" || searchData === null) {
      displayError();
    }
    else {
      $.ajax({
        url: bookUrl + searchData,
        dataType: "json",
        success: function (res) {
        console.log(res)
        if (response.totalItem === 0) {
          alert("No results")
        }
        else {
          displayResults(res)
        }
      }
      ,error: function () {
        alert("Something went wrong!");
      }
      })
    }
  })
})