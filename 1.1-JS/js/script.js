//1) Создайте в HTML документе кнопку, и создайте событие клика (3 разными способами), по клику на кнопку в консоль выводить фразу по вашему усмотрению

let button = document.querySelector('.btn');
button.addEventListener('click', function(e) {
    alert('Привет');
});

button.onclick = function() {
    alert('Hello');
};

function isHello() {
    let button = document.quertSelector('.btn');
    button.addEventListener('click', function() {
        alert('Привет');
    });

}

//2) Создать еще одну кнопку. Повесить на нее слушатель события на двойное нажатие. Вывести запись в консоль
let nextbutton = document.querySelector('.second');
button.addEventListener('dblclick', function(e) {
    alert('Hi');
});

//3) Создать поле в котором будет событие наведение мыши и вывод координат в консоль
let screen = document.querySelector('.block-for-mouse');

function showConsole(event) {
    console.log(event.clientX);
    console.log(event.clientY);
}

screen.addEventListener("mousemove", showConsole);
//4) Создать событие скролла и вывод координат в консоль
window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML;
});