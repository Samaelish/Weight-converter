const inputEl = document.getElementById('input')
const errorEl = document.getElementById('error')
const resultEl = document.getElementById('result')
let errorTime
let resultTime

function updateResults() {
  // Нижеравно нуля и NaN выдают текст с ошибкой и спустя 2 секунды удаляют инпут юзера
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = 'Пожалуйста, введите корректный вес!'
    clearTimeout(errorTime)
    errorTime = setTimeout(() => {
      errorEl.innerText = ''
      inputEl.value = ''
    }, 2000)
  } else {
    // В противном случае - значение инпута становится текстом результата, также - происходит очистка поля через 10 секунд
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2)
    clearTimeout(resultTime)
    resultTime = setTimeout(() => {
      resultEl.innerText = ''
      inputEl.value = ''
    }, 10000)
  }
}

inputEl.addEventListener('input', updateResults)
