// Importa as funções de conversão do arquivo 'temperatureConverter.js'
// Essas funções foram exportadas com 'export function' e podem ser reutilizadas aqui
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../cod/temperatureConverter.js';

// Pega a referência do campo de entrada de temperatura (input) no HTML
const inputTemp = document.getElementById('inputTemp');

// Pega a referência do seletor de escala de temperatura (select) no HTML
const inputScale = document.getElementById('inputScale');

// Pega a referência do botão de conversão
const convertBtn = document.getElementById('convertBtn');

// Pega a referência do parágrafo onde o resultado será exibido
const result = document.getElementById('result');

// Adiciona um "ouvinte de evento" para o clique no botão de conversão
convertBtn.addEventListener('click', () => {

  // Lê o valor digitado no campo e converte para número decimal
  const temp = parseFloat(inputTemp.value);

  // Obtém o valor da escala selecionada no menu suspenso (celsius ou fahrenheit)
  const scale = inputScale.value;

  // Verifica se o valor digitado é um número válido
  if (isNaN(temp)) {
    // Se não for número, exibe mensagem de erro e encerra a execução
    result.textContent = 'Por favor, insira um número válido.';
    return;
  }

  // Variável que armazenará o resultado da conversão
  let converted;

  // Se a escala de entrada for Celsius...
  if (scale === 'celsius') {
    // Converte para Fahrenheit usando a função importada
    converted = celsiusToFahrenheit(temp);
    // Exibe o resultado formatado com 2 casas decimais
    result.textContent = `${temp.toFixed(2)} °C = ${converted.toFixed(2)} °F`;
  } 
  // Caso contrário, a escala é Fahrenheit...
  else {
    // Converte para Celsius usando a função importada
    converted = fahrenheitToCelsius(temp);
    // Exibe o resultado formatado com 2 casas decimais
    result.textContent = `${temp.toFixed(2)} °F = ${converted.toFixed(2)} °C`;
  }
});
