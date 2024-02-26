const seats = document.getElementsByClassName("seats");
const seatLeftElement = document.getElementById("seatLeft");
const cla = "Economy";
const price = 550;
let seatLeft = parseInt(seatLeftElement.innerText);
let seatCount = 0;
let totalPrice = parseInt(document.getElementById("totalPrice").innerText);
let grandPrice = 0;
let selectedSeats = [];

for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const seatName = e.target.innerText;
    for (const selectedSeat of selectedSeats) {
      if (seatName === selectedSeat) {
        return;
      }
    }
    seatCount += 1;
    if (seatCount > 4) {
      return alert("You can buy only 4 tickets");
    }
    seatLeft -= 1;
    setInnerText("seatLeft", seatLeft);
    setInnerText("seatAdd", seatCount);
    const selectedDiv = document.getElementById("selectedDiv");
    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = cla;
    const p3 = document.createElement("p");
    p3.innerText = price;

    selectedDiv.appendChild(p);
    selectedDiv.appendChild(p2);
    selectedDiv.appendChild(p3);
    seat.classList.add("bg-green");
    totalPrice = totalPrice + 550;
    grandPrice += 550;
    setInnerText("totalPrice", totalPrice);
    setInnerText("grandPrice", totalPrice);
    selectedSeats.push(seatName);
  });
}

//  next button validition

const nextBtn = document.getElementById("nextBtn");
const main = document.getElementById("main");
const success = document.getElementById("success");

nextBtn.addEventListener("click", function () {
  const numberDiv = document.getElementById("numberDiv").value;
  const numberValue = isNaN(numberDiv);
  const numberlength = numberDiv.length;
  if (seatCount > 0 && numberValue === !true && numberlength >= 11) {
    main.classList.add("hidden");
    success.classList.remove("hidden");
  } else {
    alert("Select a seats and give phone (BD) number");
  }
});

// coupon code validation

const firstCoupon = "NEW15";
const secondCoupon = "Couple 20";
const applyBtn = document.getElementById("apply");
const couponDiv = document.getElementById("couponDiv");
const discountDiv = document.getElementById("discountDiv");

applyBtn.addEventListener("click", function (e) {
  const couponCode = document.getElementById("couponCode").value;

  if (couponCode === firstCoupon && seatCount === 4) {
    const discount = grandPrice * 0.15;
    const finalGrandPrice = grandPrice - discount;
    setInnerText("grandPrice", finalGrandPrice);
    couponDiv.classList.add("hidden");
    discountDiv.classList.remove("hidden");
    setInnerText("discountAmount", discount);
  } else if (couponCode === secondCoupon && seatCount === 4) {
    discount2 = grandPrice * 0.2;
    const finalGrandPrice2 = grandPrice - discount2;
    setInnerText("grandPrice", finalGrandPrice2);
    couponDiv.classList.add("hidden");
    discountDiv.classList.remove("hidden");
    setInnerText("discountAmount", discount2);
  } else {
    alert("enter a valid code and select 4 seats");
  }
});

// success btn validation

const successBtn = document.getElementById("successBtn");
successBtn.addEventListener("click", function () {
  location.reload();
});
