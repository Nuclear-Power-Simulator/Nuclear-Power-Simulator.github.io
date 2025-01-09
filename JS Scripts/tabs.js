var systemSelected = document.getElementById("System");
var part = document.getElementById("Part");

function toggleReactor() {
document.getElementById("Reactor").hidden = !document.getElementById("Reactor").hidden;
document.getElementById("Building").hidden = !document.getElementById("Building").hidden;
}

let primaryOptions = [
"Reactor Containment",
"Control Rods",
"Reactor Core",
"Steam Generator"
];

let secondaryOptions = [
"Turbine",
"Condenser",
"Alternator"
];

let coolingOptions = [
"Water Cooling Tower"
];

function setOptions(system) {
part.options.length = 0; // Clear existing options
let optionsToAdd = [];
if (system == "Primary System") {
optionsToAdd = primaryOptions;
} else if (system == "Secondary System") {
optionsToAdd = secondaryOptions;
} else if (system == "Cooling System") {
optionsToAdd = coolingOptions;
}
optionsToAdd.forEach(option => {
let newOption = new Option(option, option.toLowerCase());
part.append(newOption);
});
}

systemSelected.addEventListener("change", function(event) {
var Title = document.getElementById("Title");
Title.innerHTML = event.target.value;
setOptions(event.target.value);
});
