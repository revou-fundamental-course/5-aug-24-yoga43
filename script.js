// script.js
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = 'Masukkan data yang valid.';
        return;
    }
    
    const bmi = weight / (height * height);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Kelebihan berat badan';
    } else {
        bmiCategory = 'Kegemukan';
    }

    document.getElementById('result').innerText = `BMI Anda adalah ${bmi.toFixed(2)} (${bmiCategory})`;
}
