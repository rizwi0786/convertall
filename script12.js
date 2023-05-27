const lt12 = document.querySelector(".type12");
const overlay12 = document.querySelector(".overlay");
const mod12 = document.querySelector(".modal12");
const cls12 = document.querySelector(".cm12");
const hidd12 = document.querySelectorAll(".hidden");
const no121 = document.getElementById("no121");
const no122 = document.getElementById("no122");
const unit121 = document.getElementById("unit121");
const unit122 = document.getElementById("unit122");

const openm12 = function () {
  window.scrollTo({ top: "50%", behavior: "smooth" });
  mod12.classList.remove("hidden");
  overlay12.classList.remove("hidden");
};
const clom12 = function () {
  mod12.classList.add("hidden");
  overlay12.classList.add("hidden");
  // console.log(5);
};
lt12.addEventListener("click", openm12);
cls12.addEventListener("click", clom12);
overlay12.addEventListener("click", clom12);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mod12.classList.contains("hidden")) {
    clom12();
  }
});

var pt = "./currency.json";
var d;
fetch(pt)
  .then((response) => response.json())
  .then((data1) => {
    // Use the data here
    console.log(data1);
    d = data1;
    // console.log(data1);
    var str = "";
    for (var key in d.symbols) {
      var val = d.symbols[key];
      str += `<option value="${key}">${key}(${val})</option>`;
    }
    unit121.innerHTML = str;
    unit122.innerHTML = str;
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// console.log(12);

function func121() {
  let unv = unit121.value;
  let unv2 = unit122.value;
  let nov = no121.value;
  // no12.value=no12.value;
  // no12.value=unit12.value;
  var apiUrl = `https://v6.exchangerate-api.com/v6/e35b66ecfd223dc27f6f7eab/pair/${unv}/${unv2}/${nov}`;
//   console.log(apiUrl);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process the response data
    //   console.log(data);
      console.log(data.conversion_result);
      no122.value = data.conversion_result;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });

  
}
