const btn1 = document.querySelector(".question__1-btn")
const btn2 = document.querySelector(".question__2-btn")
const btn3 = document.querySelector(".question__3-btn")
const btn4 = document.querySelector(".question__4-btn")

const ans1 = document.querySelector("#ansver1")
const ans2 = document.querySelector("#ansver2")
const ans3 = document.querySelector("#ansver3")
const ans4 = document.querySelector("#ansver4")

const maxQwe = (b) => {
    let a = b.split(" ")
    let y = a.sort()
    let g = y.reverse()

    return g[0]
}

const minQwe = (b) => {
    let a = b.split(" ")
    let y = a.sort()

    return y[0]
}

const btn_1 = () => {
    let a = prompt("Введите предложение")
    ans1.innerHTML = 
    `Длина предложения: ${a.length}<br>
    Количество слов в предложении: ${a.split(" ").length}<br>
    Самое длинное слово: ${maxQwe(a)}<br>
    Самое короткое слово: ${minQwe(a)}<br>
    Количество указанных пользователем букв: ${a.length}<br>
    Слово, в котором встречается указанное пользователем сочетание букв: ${a.length} `
}

const btn_2 = () => {
    let a = prompt("Имя")
    let b = prompt("Имя #2")
    ans2.innerHTML = 
    `Ваше имя: ${
        (a.toLowerCase() === b.toLowerCase()) ? "Корректно" : "Некорректно"
    }`
}

const btn_3 = () => {
    let a = prompt("Имя")
    ans3.innerHTML = 
    `Результат: 20`
}

const btn_4 = () => {
    let a = prompt("Текстовая строка")
    ans4.innerHTML = 
    `${
        a
    }`
}