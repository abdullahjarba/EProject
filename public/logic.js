
addPreviouslySelecetdItems();

//array of products

let products=[

{
 name:"golden pothos",
 price :"15$" ,
 "product-image":"\\public\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
},
{
 name:"golden pothos",
 price :"15$" ,
 "product-image":"\\public\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
},{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },{
    name:"golden pothos",
    price :"15$" ,
    "product-image":".\\images\\severin-candrian-gTMnUAkPvlQ-unsplash.jpg" 
   },
{
    name:"snake plant",
    price :"20$" ,
    "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
   }
   ,
   {
       name:"snake plant",
       price :"20$" ,
       "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
      }
      ,
      {
          name:"snake plant",
          price :"20$" ,
          "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
         }
         ,
         {
             name:"snake plant",
             price :"20$" ,
             "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
            }
            ,
            {
                name:"snake plant",
                price :"20$" ,
                "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
               }
               ,
               {
                   name:"snake plant",
                   price :"20$" ,
                   "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
                  }
                  ,
                  {
                      name:"snake plant",
                      price :"20$" ,
                      "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
                     }
                     ,
                     {
                         name:"snake plant",
                         price :"20$" ,
                         "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
                        }
                        ,
                        {
                            name:"snake plant",
                            price :"20$" ,
                            "product-image":".\\images\\gabriella-clare-marino-m7Gos2-mS-A-unsplash.jpg" 
                           }
                                                                                                            

];

//pagination code
function pagination(page){
    
    let array=document.querySelectorAll(".pagination>ul");
   
    let result=array[0];
    
    result.innerHTML="";
    const prev=page-1;
    const next=page+1;

    if(page>1){
        result.innerHTML+=`<li onclick="pagination(${prev})" class="prev" ><ion-icon name="arrow-back-outline"></ion-icon>previous</li>`
    }
    for(let i=1;i<=5;i++){
        if(page==i){
            result.innerHTML+=`<li class="active">${i}</li>`
        }
        else{
            result.innerHTML+=`<li>${i}</li>`
        }
}

if(page<5){
    result.innerHTML+=` <li onclick="pagination(${next})" class="next">next<ion-icon name="arrow-forward-outline"></ion-icon></li>`
}

array[1].innerHTML=result.innerHTML;

getProducts(page);
}//end function
    

  function getProducts(page){
const limit=9;
const start=(page-1)*limit;
const end=page*limit;

const pageProducts=products.slice(start,end);

let cards=document.querySelectorAll(".cards-container>.card>.body");

  cards=Array.from(cards);
  let index=0;

   for (let i = 0; i <pageProducts.length; i++) {
      cards[index].children[0].src=pageProducts[index]["product-image"];
      cards[index].children[1].innerText=pageProducts[index].name;
      cards[index].children[2].innerText=pageProducts[index].price;
     index++;  
   }
}//end function




///////////////////////////////////
////////////////////////////////////
//shopping cart code 

function updateTotal(multiplicand,multiplier ){
let total =document.querySelector(".total")
let sum=parseFloat(total.innerText);
sum+=(multiplicand*multiplier);
total.innerText=sum;
}


//add the previously selecetd items to cart

function addPreviouslySelecetdItems(){
let cart=JSON.parse(localStorage.getItem("cart"));
for (let x in cart) {

 let PreviouslySelecetdItem=`

<div class="a container">

<img class="image" src=" ${cart[x].image}" alt="">

<div class="sub-container">
  <span class="name"> ${cart[x].name}</span>
    <span class="price">${cart[x].price}</span>
   
</div>
</div>
<input class="b quantity" type="number" value="${cart[x].quantity}">
<span class="c subtotal">${cart[x].price*cart[x].quantity}</span>
<button class="d remove"><ion-icon name="close-circle-outline"></ion-icon></button>
`


let div=document.createElement("div")
div.classList.add("item");
div.innerHTML=PreviouslySelecetdItem;

if(document.querySelector(".items")){
document.querySelector(".items").append(div);
updateTotal(cart[x].price,cart[x].quantity);
}
}

}



//section-1: 
//adding event listerns 
let addButtons=document.getElementsByClassName("shop-now");
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click",AddToCart);
    }


let removeButtons=document.getElementsByClassName("remove");
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click",removeFromCart);
    }


    let updateQuantityButtons=document.getElementsByClassName("quantity");
for (let i = 0; i < updateQuantityButtons.length; i++) {
   
   updateQuantityButtons[i].addEventListener("change",updateQuantity);
    }

//section-2
//the callback functions
function AddToCart(event){
    
   //localStorage.clear()
    let cart;
    if(localStorage.getItem("cart")===null){
         cart={};
    }
    else {
    
        console.log(localStorage.getItem("cart"))
    cart=(JSON.parse(localStorage.getItem("cart")));
    console.log(cart)
     
     
    }

    let target=event.target.parentElement.children[0];

    let existingItem=cart[target.querySelector("h2").innerText];
    if(existingItem){
existingItem.quantity+=1;
    }
   else { 
       let item={}
    item.image=target.querySelector("img").src;
    console.log(item.image);
   item.name= target.querySelector("h2").innerText;
    item.price=parseFloat( target.querySelector("p").innerText);
item.quantity=1;
   cart[item.name]=item;
}
 
   localStorage.setItem("cart",JSON.stringify(cart));

}



function removeFromCart(event){
      
let removedItemName= ((event.target).closest(".item")).querySelector(".name").innerText

let cart=JSON.parse(localStorage.getItem("cart"));

for (let x in cart) {
   
   if(x===removedItemName){
    updateTotal(-1*(cart[x].price),cart[x].quantity )
    delete cart[x]
       localStorage.setItem("cart",JSON.stringify(cart))
   }
}

((event.target).closest(".item")).remove();
}


function updateQuantity(event){
let quantity=parseInt((event.target).value);
console.log(quantity)

if(quantity<=0){
    (event.target).value=1;
    quantity=1;
}
let price=(event.target).closest(".item").querySelector(".price").innerText;
price =parseFloat(price);
console.log(price)

let cart=JSON.parse(localStorage.getItem("cart"))
let item=cart[(event.target).closest(".item").querySelector(".name").innerText]
console.log(item)

let spread=quantity-item.quantity;

//update subtotal 

let subtotal=(event.target).closest(".item").querySelector(".subtotal")
subtotal.innerText=quantity*price;

item.quantity=quantity;
localStorage.setItem("cart",JSON.stringify(cart))


/*
let multiplier;
let sign;
if(spread<0){
    multiplier=spread*-1;
sign=-1}
else {
    sign=1;
}
*/

updateTotal(spread*price,1);

}