
// ===============================
// GLOWKIND SKINCARE JAVASCRIPT
// ===============================

// Cart Count
let cartCount = 0;

// Shop Now Button
function scrollProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// ===============================
// ADD TO CART
// ===============================

const cartButtons = document.querySelectorAll(".cart-btn");
const cartCounter = document.getElementById("cart-count");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.innerText = cartCount;

        showToast("Product Added Successfully!");

    });

});

// ===============================
// TOAST NOTIFICATION
// ===============================

function showToast(message){

    let toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.background = "#6b8e23";
    toast.style.color = "#fff";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
    toast.style.zIndex = "999";
    toast.style.fontWeight = "bold";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    },2500);

}

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = form.querySelector("input[type='text']").value;

    let email = form.querySelector("input[type='email']").value;

    let message = form.querySelector("textarea").value;

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Thank You! Your message has been sent.");

    form.reset();

});

// ===============================
// NEWSLETTER
// ===============================

const newsletterBtn = document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click",()=>{

let email = document.querySelector(".newsletter input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("Subscribed Successfully!");

document.querySelector(".newsletter input").value="";

});

// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// SEARCH ICON
// ===============================

const search=document.querySelector(".fa-magnifying-glass");

search.addEventListener("click",()=>{

let keyword=prompt("Search Product");

if(keyword==null) return;

keyword=keyword.toLowerCase();

const products=document.querySelectorAll(".product");

let found=false;

products.forEach(product=>{

let title=product.querySelector("h3").innerText.toLowerCase();

if(title.includes(keyword)){

product.scrollIntoView({

behavior:"smooth"

});

product.style.border="3px solid #6b8e23";

setTimeout(()=>{

product.style.border="none";

},3000);

found=true;

}

});

if(!found){

alert("No Product Found");

}

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.left="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#6b8e23";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// HERO BUTTON ANIMATION
// ===============================

const heroButton=document.querySelector(".btn");

heroButton.addEventListener("mouseover",()=>{

heroButton.style.transform="scale(1.05)";

});

heroButton.addEventListener("mouseout",()=>{

heroButton.style.transform="scale(1)";

});

// ===============================
// PAGE LOADED
// ===============================

window.onload=()=>{

console.log("GlowKind Website Loaded Successfully.");

};

document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;

  const cartCounter = document.getElementById("cart-count");
  const cartButtons = document.querySelectorAll(".cart-btn");

  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartCount++;

      cartCounter.textContent = cartCount;

      alert("Product Added Successfully!");
    });
  });
});