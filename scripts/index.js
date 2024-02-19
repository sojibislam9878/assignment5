const seats = document.getElementsByClassName("seats");
const seatLeftElement = document.getElementById("seatLeft");
const cla = "Economy"
const price = 550;
let seatLeft = parseInt(seatLeftElement.innerText);
let seatCount = 0;
let totalPrice = parseInt(document.getElementById("totalPrice").innerText);
let grandPrice =0;
console.log(grandPrice);


for( const seat of seats){
    
    seat.addEventListener("click",function(e){
        seatCount+= 1;
        const seatName = e.target.innerText;
        // setInnerText("nameContainer", seatName)
        // console.log(seatName);
        console.log(seatCount);
        if (seatCount > 4) {
            return alert("You Can buy only 4 ticket")
        }
        seatLeft -= 1;
        setInnerText("seatLeft", seatLeft )
        setInnerText("seatAdd", seatCount)
        console.log(seatLeft);
        const selectedDiv = document.getElementById("selectedDiv")
        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 =document.createElement("p");
        p2.innerText = cla;
        const p3 =document.createElement("p");
        p3.innerText = price;

        selectedDiv.appendChild(p);
        selectedDiv.appendChild(p2);
        selectedDiv.appendChild(p3);
        seat.classList.add("bg-green")
        totalPrice = totalPrice + 550;
        grandPrice += 550;
        setInnerText("totalPrice", totalPrice)
        setInnerText("grandPrice", totalPrice)
        console.log(grandPrice);
    });
}

//  next button validition

const nextBtn = document.getElementById("nextBtn");
const main = document.getElementById("main");
const success = document.getElementById("success");

nextBtn.addEventListener("click", function(){
    if (seatCount > 0 ) {
        console.log("I am clicked");
 main.classList.add("hidden");
 success.classList.remove("hidden");
    }else{
        alert("Select seats and give phone number")
    }
    
})

// copupon code validation




const applyBtn = document.getElementById("apply")
const copuponDiv = document.getElementById("copuponDiv")
applyBtn.addEventListener("click" , function(e){
  
    const copuponCode = document.getElementById("copuponCode").value;
    console.log(copuponCode);
    if (copuponCode === "sojib") {
    grandPrice -= grandPrice * 0.20;
    console.log(grandPrice);
    setInnerText("grandPrice", grandPrice)
    copuponDiv.classList.add("hidden")
    }
})
