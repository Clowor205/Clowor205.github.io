function appendNumber(num) {
  const display = document.getElementById('display');
  display.value += num;
}

function appendOperator(op) {
  const display = document.getElementById('display');
  if (display.value === '' && op !== '-') return;
  const lastChar = display.value.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function appendDot() {
  const display = document.getElementById('display');
  const parts = display.value.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    
    let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
    
    let result = eval(expression);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
