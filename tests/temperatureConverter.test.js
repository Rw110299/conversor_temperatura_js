// Importa as funções que serão testadas
// Estamos pegando do arquivo 'temperatureConverter.js' que está dentro da pasta 'cod'
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../cod/temperatureConverter.js';

// Teste 1: Verifica se a função celsiusToFahrenheit está funcionando corretamente
test('Celsius para Fahrenheit', () => {
  // 0°C deve ser aproximadamente igual a 32°F
  expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
  
  // 100°C deve ser aproximadamente igual a 212°F
  expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
});

// Teste 2: Verifica se a função fahrenheitToCelsius está funcionando corretamente
test('Fahrenheit para Celsius', () => {
  // 32°F deve ser aproximadamente igual a 0°C
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
  
  // 212°F deve ser aproximadamente igual a 100°C
  expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
});
