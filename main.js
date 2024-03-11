//NAVBAR
const navItems = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

openNavBtn.addEventListener("click", () =>{
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
})

const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
} 

closeNavBtn.addEventListener("click", closeNav);

if(window.innerWidth < 1024){
    document.querySelectorAll("nav_items li a").forEach(navItem => {
        navItem.addEventListener("click", () => {
            closeNav();
        })
    })
}

//REVIEWS
let reviews =[
   
    {
        id:1,
        name:"Johnson Smith",
        info:" adipisicing elit. Aperiam quisquam libero amet ratione ex numquam quas facilis consectetur corrupti error?"
    },
    {
        id:2,
        name:"Arthur Curry",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam libero amet ratione ex numquam quas facilis consectetur corrupti error?"
    },
    {
        id:3,
        name:"Dumebi Emeka",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam libero amet "
    }
];

let img = document.getElementById("profile-pic");  
let author = document.getElementById("author");
let info = document.getElementById("text");
let bg = document.getElementById("bg");


let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem);
});

function showPerson(person){
    let item = reviews[person];
    author.textContent = item.name;
    info.textContent = item.info;
}

//nextBtn
nextBtn.addEventListener("click", function() {
   currentItem++;
   if(currentItem > reviews.length - 1){
    currentItem = 0;
   }
   showPerson(currentItem);
});

//prevBtn
prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
 });


 /*BACK TO TOP */

const backTopBtn = document.querySelector("[data-back-top-btn]");
const nav = document.querySelector(".nav");


let lastScrollPos = 0;

window.addEventListener("scroll", function (){
    if(this.window.scrollY > 50){
       
        backTopBtn.classList.add("active");
    }else{
        
        backTopBtn.classList.remove("active");
    }
});

/*SCROLL EFFECT */
window.addEventListener("scroll", reveal);

function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++){
      
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 70;

      if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add("active");
      }else{
          reveals[i].classList.remove("active");
      }
  }
};