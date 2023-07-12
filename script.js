//ON-SCROLL ANIMATION 
AOS.init();

//MENU SECTION ANIMATION
var sideMenu = document.getElementById("sideMenu");

    function openMenu(){
        sideMenu.style.right = "0";
    }
    function closeMenu(){
        sideMenu.style.right = "-200px";
    }
    
//ABOUT TABS
var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

    function opentab(tabname)
    {
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

//PROJECT ANIMATION 
var swiper = new Swiper('.social-content', {
    
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 4,
  centeredSlide: true,
  centeredSlidesBounds: true,
  loopFillGroupWithBlank: true,
  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev' 
  },
  
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  320: {
    slidesPerView: 2,
    spaceBetween: 1
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  });

  var swiper = new Swiper('.work-content', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 10
        },}
  });

//FORM SCRIPT
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_7NafZ7rVlmwgKxWGe3x1SdzcGTgHst0tyoel8y2RncmDLVl-TseLjwkEovRpdwt8TA/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("doneMsg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            message.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
