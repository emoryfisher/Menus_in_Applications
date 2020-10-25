var contentEle = document.body.querySelector(".content");

function makeHome(){
  contentEle.innerHTML="Home Page"
}

function makeAbout(){
  
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  
  var head2Ele = document.createElement("h3");
  head2Ele.innerHTML="Emory"
  contentEle.appendChild(headEle);
 contentEle.appendChild(head2Ele);
}

function makeinteract(){
 
  var buttonint = document.createElement("button");
  buttonint.innerHTML= "button";
  document.body.appendChild(buttonint);

  var counter = 0
buttonint.addEventListener("click", function(){
  buttonint=counter+1 
  
  var displaycounter = document.createElement("hl");
  displaycounter.innerHTML="counter"
});

}


document.body.querySelector(".homeButt").addEventListener("click", function(){
  makeHome();
});

document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout();
});

document.body.querySelector(".interactButt").addEventListener("click", function(){
  makeinteract();
});