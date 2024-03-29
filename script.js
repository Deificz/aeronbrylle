//STICKY NAVBAR
window.addEventListener('scroll', function() {
  const ul = document.getElementById(`sideMenu`);
  const offset = window.scrollY;
 
  // Change the class based on the scroll position
  if (offset > 50) {
    ul.classList.add('sticky');

  } else if (offset == 0){
    ul.classList.remove('sticky');
  }
});

//LOAD ANIMATION
const loadAnim = (() => {
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
  });
})();

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

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

//PROJECT AND SOCIAL ANIMATION 
const slideAnim = (() => {
  let stacks = document.querySelectorAll('.stack');
  
  stacks.forEach( stack => {
    stack.addEventListener('click', () => {
      if(stack.classList.contains('projectDesc')){
        stack.classList.remove('projectDesc');
        stack.classList.add('stack-shake')
      }
       
      else{
        stack.classList.add('projectDesc');
        stack.classList.remove('stack-shake');
      }
    })
    
  })
  
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
})();

//FORM SCRIPT
const formScript = (() => {
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
})();

