//a
const numeroRandom = Math.random();

if (numeroRandom >= 0.5) {
    alert("Greater than 0,5");
}
    else {
        alert("Lower than 0,5")
    }

//b
const age = Math.floor(Math.random() * 101);

if (age < 2) {
    alert("Bebe");
} else if (age >= 2 && age <= 12) {
    alert("Niño: " + age);
} else if (age >= 13 && age <= 19) {
    alert("Adolescente: " + age);
} else if (age >= 20 && age <= 30) {
    alert("Joven: " + age);
} else if (age >= 31 && age <= 60) {
    alert("Adulto: " + age);
} else if (age >= 61 && age <= 75) {
    alert("Adulto Mayor: " + age);
} else if (age >= 75) {
    alert("Anciano: " + age);
}