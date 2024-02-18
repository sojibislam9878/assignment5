// const nextBtn = document.getElementById("nextBtn");
// const main = document.getElementById("main");
// const success = document.getElementById("success");
// const count = seatCount;

// nextBtn.addEventListener("click", function(){
//     if (count > 0 ) {
//         console.log("I am clicked");
//  main.classList.add("hidden");
//  success.classList.remove("hidden");
//     }else{
//         alert("count have to be more then 1")
//     }
    
// })

function setInnerText(elementId , value) {
    document.getElementById(elementId).innerText = value;
}