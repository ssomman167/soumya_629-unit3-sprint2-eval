
function checkout()
{
       window.location.href="checkout.html";
}

   var pri=0;
    var cart=JSON.parse(localStorage.getItem("cartitems"))
    console.log(cart)
    display(cart)
    document.querySelector("#uni").textContent=`RS-${pri}`;
    
    function display(cart)
    {
        
        document.querySelector(".mealcontainer").innerHTML=""
        
        cart.map(function(elem,index){
            var div=document.createElement("div")
        var name=document.createElement("p")
        name.textContent=elem.cname;
        var price=document.createElement("p")
        price.textContent=elem.cprice
        var image=document.createElement("img")
        image.setAttribute("class","image")
        image.src=elem.cimg;
     
        var butt=document.createElement("button")
        butt.textContent="Remove"
        butt.setAttribute("class","butt")
        
        butt.addEventListener("click",function(){
             cart.splice(index,1);
            localStorage.setItem("cartitems",JSON.stringify(cart))
            // pri=pri-elem.cprice;
            
            display(cart)
        })

        pri=pri+elem.cprice
        div.append(image,name,price,butt)
        document.querySelector(".mealcontainer").append(div)
        })
        
    }
    