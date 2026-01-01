///بسم الله الرحمن الرحيم
let $ = document
let theButtons =$.querySelectorAll("button")
let displayScreen = $.getElementById("display")
let array = []
theButtons.forEach((btn=>{
    btn.onclick = (_)=>{
        let thContent = btn.innerHTML
        if(thContent ==="√")thContent = "**0.5"
        if(thContent === "X" )thContent = "*"
        if(thContent === "÷")thContent = "/"
        if(thContent === "10<sub>x</sub>")thContent = "10**"
        thContent !== "="?array.push(thContent):array
        displayScreen.value = array.join("")
        if( thContent === "AC" || thContent === "DEl"){
        displayScreen.value = ""
        array = []
        }
        if(thContent ==="="){
            displayScreen.value = ""
            setTimeout((_)=>{
                try{
                    displayScreen.value = eval(array.join(""))||"Error"
                    array = [eval(array.join(""))]
                }
                catch(error){
                    displayScreen.value = error
                    array = []    
                }
            },1)   
        }
    }
}))