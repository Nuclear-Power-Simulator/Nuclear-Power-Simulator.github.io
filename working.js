var workbtn = document.getElementById("work");
var promotebtn = document.getElementById("promote");
var cashlbl = document.getElementById("cashlbl");
var dayslbl = document.getElementById("dayslbl");
let paycheck = 1500;
let cash = 0;
let daysTillPay = 7;
let daysWorked = 0;
let daysTillPromotion = 25;

workbtn.innerHTML = `Work 1 Day (Paycheck in ${daysTillPay} More Days)`;
promotebtn.innerHTML = `Get Promotion (Need ${daysTillPromotion} Days)`;

workbtn.addEventListener("click", function() {
if (daysTillPay > 0) {
daysTillPay -= 1;
} else {
daysTillPay = 7;
cash += paycheck;
cashlbl.innerHTML = `Cash: $${cash}`;
}
daysWorked += 1;
dayslbl.innerHTML = `Days Worked: ${daysWorked}`;
workbtn.innerHTML = `Work 1 Day (Paycheck in ${daysTillPay} More Days)`;
});

promotebtn.addEventListener("click", function() {
if (daysWorked >= daysTillPromotion) {
daysTillPromotion *= 2;
promotebtn.innerHTML = `Get Promotion (Need ${daysTillPromotion} Days)`;
paycheck *= 2;
}
});
