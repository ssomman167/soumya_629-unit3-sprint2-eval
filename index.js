function gotocart(){
    window.location.href="cart.html"
}
async function gotomenu(){
    try{
        for(var i=0;i<=10;i++){
        let res=await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let data=await res.json();
        console.log(data)
        showthemeal(data)
        }

    }
    catch(err){
       console.log(err)
    }
}
var mealcon=document.querySelector(".mealcontainer")
var count=0;
function showthemeal(data)
{
    var div=document.createElement("div")
    var name=document.createElement("p")
    name.textContent=data.meals[0].strMeal;

    var price=document.createElement("p")
    var p=100+Math.floor(Math.random()*400)
    price.textContent=p;

    var image=document.createElement("img")
    image.setAttribute("class","image")
    image.src=data.meals[0].strMealThumb;
    var butt=document.createElement("button")
    butt.textContent="ADD TO CART"
    butt.addEventListener("click",function(){
           count++;
           var l=data.meals[0]
        //    console.log(l)
           cartmedal(l,p)
           document.querySelector("#uni").textContent=count;

    })
    
    butt.setAttribute("class","butt")
    div.append(image,name,price,butt)
    mealcon.append(div)
    // console.log(data.meals[0].strMeal)
}
var arr=JSON.parse(localStorage.getItem("cartitems")) || [];
function cartmedal(dl,p)
{
    var cart={
        cname:dl.strMeal,
        cimg:dl.strMealThumb,
        cprice:p
    }
    arr.push(cart)
    localStorage.setItem("cartitems",JSON.stringify(arr))
    // console.log(dl)

}