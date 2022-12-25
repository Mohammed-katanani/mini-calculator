// store the elements from the DOM
let firstNumber = document.getElementById("firstNumber"),
    secondNumber = document.getElementById("secondNumber"),
    result = document.querySelector(".result p"),
    form = document.querySelector(".control"),
    mybuttons = document.querySelector(".btns"),op,fn,sn
const myCalculator =()=>{
    let myrsult
    if(parseFloat(fn)&&parseFloat(sn)&&op){
        fn=+fn,sn=+sn
        if(op==="summation")
        myrsult=fn+sn
        else if(op==="subtraction")
        myrsult=fn-sn
        else if(op==="division")
        myrsult=(fn/sn).toFixed(2)
        else if(op==="multiplication")
        myrsult=fn*sn
        
        result.innerHTML=myrsult
}
};
form.addEventListener("submit",(e)=>{
    e.preventDefault()
} )
// when click on any button => take the input value and operation type and store it in the global scope and start the "myCalculator" func
mybuttons.childNodes.forEach(btn => {
    btn.addEventListener("click",()=>{
        fn=firstNumber.value
        sn=secondNumber.value
        op=btn.id
        myCalculator()
        // to improve ux to see any operation in used just change bg color
        mybuttons.childNodes.forEach(b => {
            b.classList&&b.classList.remove("active")
        })
        console.log(btn);
        btn.classList.add("active")
        }
)})


//punaus  to handel the change in the input value directly
// edit the input value and restart the "myCalculator" fumc
    firstNumber.addEventListener("keyup",(e)=>{
        fn=e.target.value
        myCalculator()
    })
    secondNumber.addEventListener("keyup",(e)=>{
        sn=e.target.value
        myCalculator()
    })