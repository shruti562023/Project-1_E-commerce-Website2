let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})


// navbar

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";


})


reviews.addEventListener("click", ()=>{
    reviews.style.color="rgb(4, 219, 219)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})


blogs.addEventListener("click", ()=>{
    blogs.style.color="rgb(4, 219, 219)"
    reviews.style.color="white";
    shops.style.color="white";
    contacts.style.color="white";
})


contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(4, 219, 219)";
    reviews.style.color="white";
    blogs.style.color="white";
    shops.style.color="white";
})


// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);


    crd.forEach(function(curValue){
         curValue.addEventListener("click", function(){
            itemPage.style.display="flex";
            container.style.display="none";

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src=imgSrc;
             
            let buyText =  document.querySelector(".buyText");
            buyBtn.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="block";
                buyText.innerHTML=`
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
    
                </select> <br>
                
    
                `
               let button =  document.createElement("button");
               button.innerText="Submit";
               buyText.appendChild(button);

               button.addEventListener("click", function(){
               let name = document.getElementById("name");

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Detail")
               }else{
                alert("Your Response Recorded");
                document.querySelector(".buyPage").style.display="none";

               }
               })
                 
                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="none";

                }
                )
            })

             
         })

    })
 
 
    // connect

    function connect(){
        let names = document.getElementById("names");
        let num = document.getElementById("number");
        if(name.value == "" && num.value == ""){
            alert("Fill Details")
        }else{
            alert("Thanks For Connecting")
        }

    }

    // script.js

let cart = [];

// Add product to the cart
function addToCart(productId) {
  const productElement = document.querySelector(`[data-id='${productId}']`);
  const name = productElement.getAttribute('data-name');
  const price = parseFloat(productElement.getAttribute('data-price'));

  // Check if product already exists in the cart
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id: productId, name, price, quantity: 1 });
  }

  renderCart();
}

// Render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '';

  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  document.getElementById('cartTotal').textContent = total.toFixed(2);
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

// Checkout (simulated checkout)
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Send cart data to server (you can integrate with server-side here)
  fetch('checkout.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  })
    .then(response => response.json())
    .then(data => {
      alert('Order placed successfully!');
      cart = [];
      renderCart();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Checkout failed!');
    });
}
function animateBox() {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
}


document.addEventListener("DOMContentLoaded", function() {
  const productImg = document.getElementById("productImg");
  
  productImg.addEventListener("mouseenter", function() {
      productImg.classList.add("zoomed");
  });
  
  productImg.addEventListener("mousemove", function(event) {
      const rect = productImg.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImg.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImg.addEventListener("mouseleave", function() {
      productImg.classList.remove("zoomed");
      productImg.style.transformOrigin = "center center";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const productImgs = document.getElementById("productImgs");
  
  productImgs.addEventListener("mouseenter", function() {
      productImgs.classList.add("zoomed");
  });
  
  productImgs.addEventListener("mousemove", function(event) {
      const rect = productImgs.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgs.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgs.addEventListener("mouseleave", function() {
      productImgs.classList.remove("zoomed");
      productImgs.style.transformOrigin = "center center";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const productImgss= document.getElementById("productImgss");
  
  productImgss.addEventListener("mouseenter", function() {
      productImgss.classList.add("zoomed");
  });
  
  productImgss.addEventListener("mousemove", function(event) {
      const rect = productImgss.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgss.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgss.addEventListener("mouseleave", function() {
      productImgss.classList.remove("zoomed");
      productImgss.style.transformOrigin = "center center";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const productImgsy = document.getElementById("productImgsy");
  
  productImgsy.addEventListener("mouseenter", function() {
      productImgsy.classList.add("zoomed");
  });
  
  productImgsy.addEventListener("mousemove", function(event) {
      const rect = productImgsy.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsy.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsy.addEventListener("mouseleave", function() {
      productImgsy.classList.remove("zoomed");
      productImgsy.style.transformOrigin = "center center";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const productImgsys = document.getElementById("productImgsys");
  
  productImgsys.addEventListener("mouseenter", function() {
      productImgsys.classList.add("zoomed");
  });
  
  productImgsys.addEventListener("mousemove", function(event) {
      const rect = productImgsys.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsys.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsys.addEventListener("mouseleave", function() {
      productImgsys.classList.remove("zoomed");
      productImgsys.style.transformOrigin = "center center";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const productImgsyst = document.getElementById("productImgsyst");
  
  productImgsyst.addEventListener("mouseenter", function() {
      productImgsyst.classList.add("zoomed");
  });
  
  productImgsyst.addEventListener("mousemove", function(event) {
      const rect = productImgsyst.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsyst.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsyst.addEventListener("mouseleave", function() {
      productImgsyst.classList.remove("zoomed");
      productImgsyst.style.transformOrigin = "center center";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const productImgsyste = document.getElementById("productImgsyste");
  
  productImgsyste.addEventListener("mouseenter", function() {
      productImgsyste.classList.add("zoomed");
  });
  
  productImgsyste.addEventListener("mousemove", function(event) {
      const rect = productImgsyste.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsyste.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsyste.addEventListener("mouseleave", function() {
      productImgsyste.classList.remove("zoomed");
      productImgsyste.style.transformOrigin = "center center";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const productImgsystem = document.getElementById("productImgsystem");
  
  productImgsystem.addEventListener("mouseenter", function() {
      productImgsystem.classList.add("zoomed");
  });
  
  productImgsystem.addEventListener("mousemove", function(event) {
      const rect = productImgsystem.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsystem.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsystem.addEventListener("mouseleave", function() {
      productImgsystem.classList.remove("zoomed");
      productImgsystem.style.transformOrigin = "center center";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const productImgsystems = document.getElementById("productImgsystems");
  
  productImgsystems.addEventListener("mouseenter", function() {
      productImgsystems.classList.add("zoomed");
  });
  
  productImgsystems.addEventListener("mousemove", function(event) {
      const rect = productImgsystems.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust the background position for the zoom effect
      productImgsystems.style.transformOrigin = `${x}px ${y}px`;
  });
  
  productImgsystems.addEventListener("mouseleave", function() {
      productImgsystems.classList.remove("zoomed");
      productImgsystems.style.transformOrigin = "center center";
  });
});
