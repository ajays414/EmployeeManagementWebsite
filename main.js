const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const section6 = document.getElementById('section6');
const section7 = document.getElementById('section7');
const section8 = document.getElementById('section8');
const section9 = document.getElementById('section9');

click = document.getElementById('click');
click1= document.getElementById('click1');
click2 = document.getElementById('click2');
click3=document.getElementById('click3');
click4= document.getElementById('click4');
click5=document.getElementById('click5');
click6= document.getElementById('click6');
click7=document.getElementById('click7');
click8= document.getElementById('click8');


//SCROLL EFFECT

image1.addEventListener('click', function() {
    section1.scrollIntoView({ behavior: 'smooth' });
});
image2.addEventListener('click', function() {
  section2.scrollIntoView({ behavior: 'smooth' });
});
image3.addEventListener('click', function() {
  section3.scrollIntoView({ behavior: 'smooth' });
});
image4.addEventListener('click', function() {
  section4.scrollIntoView({ behavior: 'smooth' });
});
image5.addEventListener('click', function() {
section5.scrollIntoView({ behavior: 'smooth' });
});
image6.addEventListener('click', function() {
section6.scrollIntoView({ behavior: 'smooth' });
});
image7.addEventListener('click', function() {
  section7.scrollIntoView({ behavior: 'smooth' });
});
image8.addEventListener('click', function() {
section8.scrollIntoView({ behavior: 'smooth' });
});
image9.addEventListener('click', function() {
section9.scrollIntoView({ behavior: 'smooth' });
});



//GO TO TOP BUTTON

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}


// Typing Effect

function typewriterEffect(text, element) {
  let i = 0;
  const speed = 100; // Adjust the speed as desired (in milliseconds)

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

//Disabling button after one click
function handleClick(c) {

  c.disabled = true;
  console.log("Button clicked!");
  c.removeEventListener("click", handleClick);
}

// Elliot Alderson

click.addEventListener("click", function() {
  typewriterEffect("ID:E023", document.getElementById("ID1"));

});
click.addEventListener("click", function(){
  handleClick(click);
});

// Angela Moss

click1.addEventListener("click", function() {
  typewriterEffect("ID:E019", document.getElementById("ID2"));

});
click1.addEventListener("click", function(){
  handleClick(click1);
});

//Gideon Goddard

click2.addEventListener("click", function() {
  typewriterEffect("ID:E001", document.getElementById("ID3"));

});
click2.addEventListener("click", function(){
  handleClick(click2);
});

//Pearson White

click3.addEventListener("click", function() {
  typewriterEffect("ID:E067", document.getElementById("ID4"));

});
click3.addEventListener("click", function(){
  handleClick(click3);
});

//Olivia Davis

click4.addEventListener("click", function() {
  typewriterEffect("ID:E054", document.getElementById("ID5"));

});
click4.addEventListener("click", function(){
  handleClick(click4);
});

//Amida Chenlei

click5.addEventListener("click", function() {
  typewriterEffect("ID:E034", document.getElementById("ID6"));

});
click5.addEventListener("click", function(){
  handleClick(click5);
});

//John Max

click6.addEventListener("click", function() {
  typewriterEffect("ID:E022", document.getElementById("ID7"));

});
click6.addEventListener("click", function(){
  handleClick(click6);
});

//Ben Gross

click7.addEventListener("click", function() {
  typewriterEffect("ID:E014", document.getElementById("ID8"));

});
click7.addEventListener("click", function(){
  handleClick(click7);
});

//John Max

click8.addEventListener("click", function() {
  typewriterEffect("ID:E042", document.getElementById("ID9"));

});
click8.addEventListener("click", function(){
  handleClick(click8);
});

