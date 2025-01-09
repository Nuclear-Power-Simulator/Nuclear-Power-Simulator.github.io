var buildingPart = document.getElementById("buildingPart");
var parts = document.getElementById("parts");
var subparts = document.getElementById("subparts");
var buildPart = document.getElementById("buildPart");
var buy = document.getElementById("buy")

let containmentSubParts = [
"<br>$2000 - Steel",
"<br>$200 - Concrete"
]
let rodSubParts = [
"<br>$2000 - Hafnium",
"<br>$15 - Boron"
]
let coreSubParts = [
"<br>$1500 - A1",
"<br>$1500 - A2",
"<br>$1500 - A3",
"<br>$1500 - B1",
"<br>$1500 - B2",
"<br>$1500 - B3",
"<br>$1500 - B4",
"<br>$1500 - B5",
"<br>$1500 - B6",
"<br>$1500 - B7",
"<br>$1500 - B8",
"<br>$1500 - B9",
"<br>$1500 - C1",
"<br>$1500 - C2",
"<br>$1500 - C3",
"<br>$1500 - C4",
"<br>$1500 - C5",
"<br>$1500 - C6",
"<br>$1500 - C7",
"<br>$1500 - C8",
"<br>$1500 - C9",
"<br>$1500 - C10",
"<br>$1500 - C11",
"<br>$1500 - C12",
"<br>$1500 - C13",
"<br>$1500 - C14",
"<br>$1500 - C15",
"<br>$285000 - Regulating Rod",
"<br>$25000 - Control Blade Absorber",
"<br>$25000 - Control Blade Flow Relief Hole",
"<br>$15000 - Coolant Entrance Channel",
"<br>$75000 - Fixed Absorber",
"<br>$90000 - Fixed Absorber In Radial Arm",
"<br>$125000 - Core Structure",
"<br>$5000 - Core Tank",
"<br>$190000 - Fuel Element"
]
let steamGeneratorSubParts = [
"<br>$80000 - Inconel",
"<br>$250 - Alloy 690"
]
let turbineSubParts = [
"<br>$2000 - Steel",
"<br>$500 - Blade"
]
let condenserSubParts = [
"<br>$2000 - Stainless Steel"
]
let alternatorSubParts = [
"<br>$3000 - Steel Shaft",
"<br>$15000 - Rotor"
]
let coolingTowerSubParts = [
"<br>$9000 - Timber",
"<br>$6700 - Plastic"
]
let allSubParts = [
...containmentSubParts,
...rodSubParts,
...coreSubParts,
...steamGeneratorSubParts,
...turbineSubParts,
...condenserSubParts,
...alternatorSubParts,
...coolingTowerSubParts
]
allSubParts.forEach(option => {
let newOption = new Option(option.replace("<br>", ""), option.replace("<br>", ""));
subparts.append(newOption);
});
subparts.addEventListener("change", function() {
buildingPart.innerHTML = parts.value + " - " + (subparts.selectedOptions[0] ? subparts.selectedOptions[0].value : "No SubPart Selected");
});

let allOptions = [
...primaryOptions,
...secondaryOptions,
...coolingOptions
];

allOptions.forEach(option => {
let newOption = new Option(option, option);
parts.append(newOption);
});

parts.addEventListener("change", function() {
buildingPart.innerHTML = parts.value + " - " + (subparts.selectedOptions[0] ? subparts.selectedOptions[0].value : "No SubPart Selected");
const selectedIndex = parts.selectedIndex;
let subParts;

switch (selectedIndex) {
case 1:
subParts = containmentSubParts;
break;
case 2:
subParts = rodSubParts;
break;
case 3:
subParts = coreSubParts;
break;
case 4:
subParts = steamGeneratorSubParts;
break;
case 5:
subParts = turbineSubParts;
break;
case 6:
subParts = condenserSubParts;
break;
case 7:
subParts = alternatorSubParts;
break;
case 8:
subParts = coolingTowerSubParts;
break;
default:
subParts = '';
}

document.getElementById("partsForBuild").innerHTML = subParts;
});
let itemCounts = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
let itemsText = []
function updateItems() {
    itemsText = [
    allSubParts[0] + ": " + itemCounts[0],
    allSubParts[1] + ": " + itemCounts[1],
    allSubParts[2] + ": " + itemCounts[2],
    allSubParts[3] + ": " + itemCounts[3],
    allSubParts[4] + ": " + itemCounts[4],
    allSubParts[5] + ": " + itemCounts[5],
    allSubParts[6] + ": " + itemCounts[6],
    allSubParts[7] + ": " + itemCounts[7],
    allSubParts[8] + ": " + itemCounts[8],
    allSubParts[9] + ": " + itemCounts[9],
    allSubParts[10] + ": " + itemCounts[10],
    allSubParts[11] + ": " + itemCounts[11],
    allSubParts[12] + ": " + itemCounts[12],
    allSubParts[13] + ": " + itemCounts[13],
    allSubParts[14] + ": " + itemCounts[14],
    allSubParts[15] + ": " + itemCounts[15],
    allSubParts[16] + ": " + itemCounts[16],
    allSubParts[17] + ": " + itemCounts[17],
    allSubParts[18] + ": " + itemCounts[18],
    allSubParts[19] + ": " + itemCounts[19],
    allSubParts[20] + ": " + itemCounts[20],
    allSubParts[21] + ": " + itemCounts[21],
    allSubParts[22] + ": " + itemCounts[22],
    allSubParts[23] + ": " + itemCounts[23],
    allSubParts[24] + ": " + itemCounts[24],
    allSubParts[25] + ": " + itemCounts[25],
    allSubParts[26] + ": " + itemCounts[26],
    allSubParts[27] + ": " + itemCounts[27],
    allSubParts[28] + ": " + itemCounts[28],
    allSubParts[29] + ": " + itemCounts[29],
    allSubParts[30] + ": " + itemCounts[30],
    allSubParts[31] + ": " + itemCounts[31],
    allSubParts[32] + ": " + itemCounts[32],
    allSubParts[33] + ": " + itemCounts[33],
    allSubParts[34] + ": " + itemCounts[34],
    allSubParts[35] + ": " + itemCounts[35],
    allSubParts[36] + ": " + itemCounts[36],
    allSubParts[37] + ": " + itemCounts[37],
    allSubParts[38] + ": " + itemCounts[38],
    allSubParts[39] + ": " + itemCounts[39],
    allSubParts[40] + ": " + itemCounts[40],
    allSubParts[41] + ": " + itemCounts[41],
    allSubParts[42] + ": " + itemCounts[42],
    allSubParts[43] + ": " + itemCounts[43],
    allSubParts[44] + ": " + itemCounts[44],
    allSubParts[45] + ": " + itemCounts[45],
    allSubParts[46] + ": " + itemCounts[46],
    allSubParts[47] + ": " + itemCounts[47]
    ]
}
updateItems()
var items = document.getElementById("items")
items.innerHTML = itemsText
buy.addEventListener("click", function() {
	var price = subparts.value.match(/\d+/)[0]
    if (cash >= price) {
    	cash -= price
    	itemCounts[subparts.selectedIndex - 1]++
    	document.getElementById("cashlbl").innerHTML = `Cash: $${cash}`
    	updateItems()
    	items.innerHTML = itemsText
    }
})
var toggleItems = document.getElementById("toggleItems")
var divv = document.getElementById("divv")
toggleItems.addEventListener("click", function() {
    divv.hidden = !divv.hidden
})
buildPart.addEventListener("click", function() {
    // Put code for building parts here
})