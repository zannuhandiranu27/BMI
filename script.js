function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === '' || isNaN(height)) {
        alert("Please enter a valid height");
        return;
    }

    if (weight === '' || isNaN(weight)) {
        alert("Please enter a valid weight");
        return;
    }

    let bmi = weight / Math.pow(height / 100, 2);
    document.getElementById("output").innerHTML = bmi.toFixed(1);


    if (bmi < 18.5) {
        document.getElementById("comment").innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("comment").innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("comment").innerHTML = "Overweight";
    } else {
        document.getElementById("comment").innerHTML = "Obese";
    }
}
function resetForm() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("output").innerHTML = "?";
    document.getElementById("comment").innerHTML = "?";
}