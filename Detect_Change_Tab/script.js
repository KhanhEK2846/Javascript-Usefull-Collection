const result = document.getElementById('result')

document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
        console.log("You aren't seeing this tab")
        result.textContent = "You aren't seeing this tab"
    }else{
        console.log("You are seeing this tab")
        result.textContent = "You are seeing this tab"
    }
})