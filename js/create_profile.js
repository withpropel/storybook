var continueButton = document.querySelector('.cont-btn');
var saveButton = document.querySelector('.save-btn');
var backButton = document.querySelector(".bk-button");
document.querySelector(".title-step-2").style.display = "block";
document.querySelector(".title-step-2").style.display = "none";
document.querySelector(".title-step-3").style.display = "none";
document.querySelector(".step-2").style.display = "none";
document.querySelector(".step-3").style.display = "none";
// document.querySelector(".mobile-btn-step-1").style.display = "none";
document.querySelector(".mobile-btn-step-2").style.display = "none";
document.querySelector(".mobile-btn-step-3").style.display = "none";
document.querySelector(".show-step-skip").style.display = "none";
document.querySelector(".mobile-step-skip").style.display = "none";




document.querySelector(".bk-button").style.display = "none";
saveButton.style.display = "none";

var count = 1

var el = document.querySelectorAll(".bk-button");
el.forEach(element => {
   element.addEventListener("click", function (e) {
      count--
      if (count == 1) {
         document.querySelector(".step-1").style.display = "block";
         document.querySelector(".title-step-1").style.display = "block";
         document.querySelector(".title-step-2").style.display = "none";
         document.querySelector(".step-2").style.display = "none";
         document.querySelector(".step-3").style.display = "none";
         saveButton.style.display = "none";
         continueButton.style.display = "flex";
      }
      if (count == 2) {
         document.querySelector(".step-1").style.display = "none";
         document.querySelector(".title-step-1").style.display = "none";
         document.querySelector(".title-step-2").style.display = "block";
         document.querySelector(".step-2").style.display = "block";
         document.querySelector(".title-step-3").style.display = "none";
         document.querySelector(".step-3").style.display = "none";
         saveButton.style.display = "none";
         continueButton.style.display = "flex";
      }
      if (count > 1) {
         document.querySelector(".bk-button").style.display = "flex";
      } else {
         document.querySelector(".bk-button").style.display = "none";
      }
   })
})

var element = document.querySelectorAll(".cont-btn");
element.forEach(element => {
   element.addEventListener("click", function (e) {
      count++
      if (count == 2) {
         document.querySelector(".step-1").style.display = "none";
         document.querySelector(".step-3").style.display = "none";
         document.querySelector(".title-step-1").style.display = "none";
         document.querySelector(".step-3").style.display = "none";
         document.querySelector(".title-step-2").style.display = "block";
         document.querySelector(".step-2").style.display = "block";
         document.querySelector(".mobile-btn-step-2").style.display = "flex";
         document.querySelector(".mobile-btn-step-1").style.display = "none";
      }
      if (count == 3) {
         document.querySelector(".step-2").style.display = "none";
         document.querySelector(".title-step-2").style.display = "none";
         document.querySelector(".title-step-3").style.display = "block";
         document.querySelector(".step-3").style.display = "block";
         saveButton.style.display = "flex";
         continueButton.style.display = "none";
         document.querySelector(".mobile-btn-step-2").style.display = "none";
         document.querySelector(".mobile-btn-step-3").style.display = "flex";
         document.querySelector(".show-step-skip").style.display = "flex";
         document.querySelector(".mobile-step-skip").style.display = "flex";


      }

      if (count > 1) {
         document.querySelector(".bk-button").style.display = "flex";
      }
   })
})


var elem = document.querySelectorAll(".save-btn");
elem.forEach(element => {
   element.addEventListener("click", function (e) {
      alert("Submitted Successfully!")

   })
})


function onClickHandler(ev) {
   var el = window._protected_reference = document.createElement("INPUT");
   el.type = "file";
   el.accept = "image/*";
   el.multiple = "multiple";
   el.addEventListener('change', function (ev2) {
      if (el.files.length) {
         document.getElementById('out').src = URL.createObjectURL(el.files[0]);
      } else {
         document.getElementById('out').src = URL.createObjectURL(el.files[0]);

      }
      new Promise(function (resolve) {
            setTimeout(function () {
               console.log(el.files);
               resolve();
            }, 1000);
         })
         .then(function () {

            el = window._protected_reference = undefined;
         });

   });

   el.click();
}