// 1 task Задержка на промисах
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

// delay(3000).then(() => alert("выполнилось через 3 секунды"));
// 2 task Можно ли "перевыполнить" промис?
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
answer:1

// 3 task Промисы: сравните then и catch
promise.then(f1).catch(f2);
promise.then(f1, f2);
// Являются ли фрагменты кода ниже эквивалентными? answer: NO
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков? answer: NO