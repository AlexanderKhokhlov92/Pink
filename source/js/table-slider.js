const table = document.querySelector('.order-table_table');
const radioButton4 = document.getElementById('breadcrumbs-table-button-1');
const radioButton5 = document.getElementById('breadcrumbs-table-button-2');
const radioButton6 = document.getElementById('breadcrumbs-table-button-3');

// Обработчик события изменения радио кнопки
function handleRadioChange() {
  if (window.innerWidth >= 651) {
    table.style.transform = 'translateX(0px)';
  } else {
    if (radioButton4.checked) {
      table.style.transform = 'translateX(0px)';
    } else if (radioButton5.checked) {
      table.style.transform = 'translateX(-240px)';
    } else if (radioButton6.checked) {
      table.style.transform = 'translateX(-480px)';
    }
  }
}

// Обработчик события изменения размера окна
function handleWindowResize() {
  if (window.innerWidth >= 651) {
    table.style.transform = 'translateX(0px)';
  }
}

// Установка начального значения "checked" для radioButton5
radioButton5.checked = true;

// Привязка обработчика события изменения радио кнопки к каждой радио кнопке
radioButton4.addEventListener('click', handleRadioChange);
radioButton5.addEventListener('click', handleRadioChange);
radioButton6.addEventListener('click', handleRadioChange);

// Привязка обработчика события изменения размера окна
window.addEventListener('resize', handleWindowResize);

// Вызов функции handleRadioChange для применения начальных стилей
handleRadioChange();
