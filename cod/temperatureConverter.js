// Função para converter de Celsius para Fahrenheit
// Recebe um valor em Celsius como parâmetro
export function celsiusToFahrenheit(celsius) {
  // Fórmula oficial: (°C × 9/5) + 32 = °F
  return (celsius * 9 / 5) + 32;
}

// Função para converter de Fahrenheit para Celsius
// Recebe um valor em Fahrenheit como parâmetro
export function fahrenheitToCelsius(fahrenheit) {
  // Fórmula oficial: (°F − 32) × 5/9 = °C
  return (fahrenheit - 32) * 5 / 9;
}
