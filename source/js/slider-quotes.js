const radioButton1 = document.getElementById('breadcrumbs-button-1');
const radioButton2 = document.getElementById('breadcrumbs-button-2');
const radioButton3 = document.getElementById('breadcrumbs-button-3');
const sliderList = document.querySelectorAll('.slide');

// Обработчик события изменения радио кнопки
function handleRadioChange() {
  if (radioButton1.checked) {
    sliderList.forEach((slide) => {
      slide.style.transform = 'translateX(0)';
    });
  } else if (radioButton2.checked) {
    sliderList.forEach((slide) => {
      slide.style.transform = 'translateX(-100%)';
    });
  } else if (radioButton3.checked) {
    sliderList.forEach((slide) => {
      slide.style.transform = 'translateX(-200%)';
    });
  }
}

// Установка начального значения "checked" для radioButton1
radioButton1.checked = true;

// Привязка обработчика события изменения радио кнопки к каждой радио кнопке
radioButton1.addEventListener('change', handleRadioChange);
radioButton2.addEventListener('change', handleRadioChange);
radioButton3.addEventListener('change', handleRadioChange);

// Вызов функции handleRadioChange для применения начальных стилей
handleRadioChange();

const rightArrow1 = document.getElementById('right-arrow-1');
const rightArrow2 = document.getElementById('right-arrow-2');
const rightArrow3 = document.getElementById('right-arrow-3');
const leftArrow1 = document.getElementById('left-arrow-1');
const leftArrow2 = document.getElementById('left-arrow-2');
const leftArrow3 = document.getElementById('left-arrow-3');

// Обработчик события нажатия на правую стрелку 1
rightArrow1.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(-100%)';
  });
});

// Обработчик события нажатия на правую стрелку 2
rightArrow2.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(-200%)';
  });
});

// Обработчик события нажатия на правую стрелку 3
rightArrow3.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(0)';
  });
});
// Обработчик события нажатия на левую стрелку 1
leftArrow1.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(-200%)';
  });
});

// Обработчик события нажатия на левую стрелку 2
leftArrow2.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(0)';
  });
});

// Обработчик события нажатия на левую стрелку 3
leftArrow3.addEventListener('click', function () {
  sliderList.forEach((slide) => {
    slide.style.transform = 'translateX(-100%)';
  });
});
