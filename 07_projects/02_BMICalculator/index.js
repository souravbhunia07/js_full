const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents the form from submitting

  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);

  const result = document.querySelector('#results');

  if(height === '' || isNaN(height) || height <= 0) {
    result.textContent = 'Please enter valid height';
    return;
  }
  else if(weight === '' || isNaN(weight) || weight <= 0) {
    result.textContent = 'Please enter valid weight';
    return;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.textContent = `Your BMI is ${bmi}`;
    if(bmi < 18.5) {
      result.textContent += ', you are underweight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
      result.textContent += ', you are normal weight';
    }
    else if(bmi >= 25 && bmi <= 29.9) {
      result.textContent += ', you are overweight';
    }
    else {
      result.textContent += ', you are obese';
    }
  }
});