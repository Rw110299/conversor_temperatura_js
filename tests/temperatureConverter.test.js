import { celsiusToFahrenheit, fahrenheitToCelsius } from '../cod/temperatureConverter.js';

test('Celsius para Fahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
  expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
});

test('Fahrenheit para Celsius', () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
  expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
});
