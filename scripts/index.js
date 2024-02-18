const seats = document.getElementsByClassName("seats");
const seatLeftElement = document.getElementById("seatLeft");
const cla = "Economy"
const price = 550;
let seatLeft = parseInt(seatLeftElement.innerText);
let seatCount = 0;


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
        console.log(selectedDiv);
        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 =document.createElement("p");
        p2.innerText = cla;
        const p3 =document.createElement("p");
        p3.innerText = price;

        selectedDiv.appendChild(p);
        selectedDiv.appendChild(p2);
        selectedDiv.appendChild(p3);
    });
}

