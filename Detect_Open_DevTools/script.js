history.pushState({},null,'nothing.html');

function OnDevToolIsOpen(){
    document.getElementById("devtool").innerHTML = "DevTool Is Open";
    setTimeout(console.clear.bind(console))
    const script = document.getElementById("script");
    script.remove();
}

class DevToolChecker extends Error{
    toString(){

    }

    get message(){
        OnDevToolIsOpen();
    }
}

console.log(new DevToolChecker())