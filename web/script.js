import { celsiusToFahrenheit, fahrenheitToCelsius } from '../cod/temperatureConverter.js';

const inputTemp = document.getElementById('inputTemp');
const inputScale = document.getElementById('inputScale');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temp = parseFloat(inputTemp.value);
  const scale = inputScale.value;

  if (isNaN(temp)) {
    result.textContent = 'Por favor, insira um número válido.';
    return;
  }

  let converted;

  if (scale === 'celsius') {
    converted = celsiusToFahrenheit(temp);
    result.textContent = `${temp.toFixed(2)} °C = ${converted.toFixed(2)} °F`;
  } else {
    converted = fahrenheitToCelsius(temp);
    result.textContent = `${temp.toFixed(2)} °F = ${converted.toFixed(2)} °C`;
  }
});
