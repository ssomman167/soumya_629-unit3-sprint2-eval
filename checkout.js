function setdo(){
    let promise=new Promise(function(resolve,reject){
            setInterval(function(){
                 resolve("Your Order is accepted")
            },3000)
            
    })
    promise.then(function(res){
        alert(res)
    })

    let promis=new Promise(function(resolve,reject){
            setInterval(function(){
                 resolve("Your Order is being cooked")
            },8000)
            
    })
    promis.then(function(res){
        alert(res)
    })

    let promi=new Promise(function(resolve,reject){
            setInterval(function(){
                 resolve("Your Order is ready")
            },10000)
            
    })
    promi.then(function(res){
        alert(res)
    })

    let prom=new Promise(function(resolve,reject){
            setInterval(function(){
                 resolve("Your Order is out for delivery")
            },12000)
            
    })
    prom.then(function(res){
        alert(res)
    })
}