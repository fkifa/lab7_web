var element = document.getElementsByClassName("lab456");
var last_index = -1;

function lab(indexx) {
    var element1 = document.getElementsByClassName("lab4");
    var element2 = document.getElementsByClassName("lab5");
    var element3 = document.getElementsByClassName("lab6");
    switch (last_index) {
        case "0":
            element1[0].classList.add("lab456");
            break
        case "1":
            element2[0].classList.add("lab456");
            break
        case "2":
            element3[0].classList.add("lab456");
            break
    }
    switch (indexx) {
        case "0":
            element1[0].classList.remove("lab456");
            break
        case "1":
            element2[0].classList.remove("lab456");
            break
        case "2":
            element3[0].classList.remove("lab456");
            break
        case "3":
            element[last_index].classList.add("lab456");
            break
    }
    last_index = indexx;
}

/*function lab4(){
    var element=document.getElementsByClassName("lab456");
    console.log(element);
    element[0].classList.remove("lab456");
    element[0].classList.add("lab4");
}
function lab5(){
    var ggg=document.getElementsByClassName("lab4");
    ggg[0].classList.remove("lab4");
    ggg[0].classList.add("lab456");
    var element=document.getElementsByClassName("lab456");
    element[1].classList.remove("lab456");
    element[1].classList.add("lab4");
}
function lab6(){
    var element=document.getElementsByClassName("lab456");
    element[2].classList.remove("lab456");
    element[2].classList.add("lab4");
}
function del(){
    var element1=document.getElementsByClassName("lab4");
    element1[0].classList.remove("lab4");
    element1[0].classList.add("lab456");
}*/

//СКРИПТЫ 4 ЛАБЫ
function ex6() {
    let num = window.prompt("Введите положительное число");
    console.log(num);
    if (isNaN(parseInt(num)) || parseInt(num) < 0) {
        window.alert("некорректное число");
    } else {
        let a = parseInt(num);
        document.getElementById("a0").innerHTML = "Вы ввели " + num
        let n = 1, vit, bbb;
        bbb = " ";
        while (n <= a) {
            vit = n * n * n;
            if (vit < 1000) bbb = bbb + vit + " ";
            if (vit > 1000) break;
            n = n + 1;
        }
        document.getElementById("a1").innerHTML = "Ответ:" + bbb
    }
}

function ex22() {
    let num = window.prompt("Введите четное положительное число");
    console.log(num);
    if (isNaN(parseInt(num)) || parseInt(num) < 0 || parseInt(num) % 2 !== 0) {
        window.alert("некорректное число");
    } else {
        let a = parseInt(num);
        document.getElementById("a3").innerHTML = "Вы ввели " + num
        let x, y, s = " ";
        for (x = 0; x < (a / 2); x++) {
            if (Number.isInteger(a / x) === true) {
                y = a / x;
                s = s + y + "*" + x + ", ";
            }
        }
        document.getElementById("a2").innerHTML = "Ответ:" + s
    }
}

function ex6_2() {
    let lang = window.prompt("Введите ru или en");
    let s = " ", i;
    console.log(lang);
    if (lang === "ru") {
        document.getElementById("a4").innerHTML = "Вы ввели " + lang
        var arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    }
    if (lang === "en") {
        document.getElementById("a4").innerHTML = "Вы ввели " + lang
        var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    }
    if (lang !== "ru" && lang !== "en") window.alert("некорректные данные");
    for (i = 0; i < 7; i++) {
        s = s + arr[i] + "; ";
    }
    document.getElementById("a5").innerHTML = "Итоговый массив: " + s
}

function ex7() {
    let lang = window.prompt("Введите ru или en");
    let tog = " ", i;
    console.log(lang);
    switch (lang) {
        case "ru": {
            document.getElementById("a6").innerHTML = "Вы ввели " + lang
            var arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
            break;
        }
        case "en": {
            document.getElementById("a6").innerHTML = "Вы ввели " + lang
            var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            break;
        }
        default: {
            window.alert("некорректные данные");
        }
    }
    for (i = 0; i < 7; i++) {
        tog = tog + arr[i] + "; ";
    }
    document.getElementById("a7").innerHTML = "Итоговый массив: " + tog
}

function ex2() {
    let n = window.prompt("Введите натуральное число");
    if (parseInt(n) < 1 || isNaN(parseInt(n))) {
        window.alert("некорректное число");
    } else {
        document.getElementById("a8").innerHTML = "Вы ввели " + n
        let A = new Array(parseInt(n));
        for (let i = 0; i < n; i++) A[i] = i + 1; //тут все наши циферки, для которых ищем нок
        let tog = NOK(A);
        document.getElementById("a9").innerHTML = "Наименьшее общее кратное чисел от 1 до " + n + ": " + tog
    }
}

function NOK(A) {
    let n = A.length, a = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
        let b = Math.abs(A[i]), c = a;
        while (a && b) {
            a > b ? a %= b : b %= a;
        }
        a = Math.abs(c * A[i]) / (a + b);
    }
    return a;
}

function ex8() {
    let x = window.prompt("Введите натуральное число");
    if (parseInt(x) < 1 || isNaN(parseInt(x))) {
        window.alert("некорректное число");
    } else {
        document.getElementById("a10").innerHTML = "Вы ввели " + x
        ex8_a(x);
    }
}

function ex8_a(x) {
    var s = parseInt(x), s1 = " 1; ";
    var number_to = 2;
    while (s >= 1 && number_to <= s) {
        if (number_to === 2 && s % 2 === 0) {
            s1 += "2; ";
            s = s / 2;
            number_to += 1;
        }
        if (s % number_to === 0) {
            s1 += number_to + "; ";
            s = s / number_to;
        }
        number_to += 1;
    }
    document.getElementById("a11").innerHTML = "Ответ: " + s1
}

//СКРИПТЫ 5 ЛАБЫ
function ex1_a() {
    var str = "Я изучаю javascript!";
    var l;
    l = str.length;
    document.getElementById("ra0").innerHTML = "A. количество символов этой строке:  " + l;
}

function ex1_b() {
    var str = "Я изучаю javascript!";
    var l = str.substr(0, 2) + str.substring(9, 20);
    document.getElementById("ra1_1").innerHTML = "B. с помощью str.substr и str.substring:  " + l;
    var str1 = str.split(" ", 3);
    document.getElementById("ra1_2").innerHTML = "B. с помощью str.split:  " + str1[0] + " " + str1[2];
}

function ex1_c() {
    var str = "Я изучаю javascript!";
    var l = str.indexOf("изучаю");
    document.getElementById("ra2").innerHTML = "C. позиция подстроки 'изучаю':  " + l;
}

function ex2_14() {
    let str = window.prompt("Введите строку");
    document.getElementById("ra3_0").innerHTML = "Введенная строка:  " + str;
    let n = window.prompt("Введите n");
    if (isNaN(parseInt(n))) {
        window.alert("некорректное число");
    } else {
        document.getElementById("ra3_00").innerHTML = "Введенная длина:  " + n;
        var str_len = str.length;
        if (str_len > n) {
            var res = str.substr(0, n) + "...";
        } else {
            var res = str;
        }
        document.getElementById("ra3").innerHTML = "res =  " + res;
    }
}

function ex3_1() {
    let str = "ahb acb aeb aeeb adcb axeb";
    var exp = /a.b/g;
    var res = str.match(exp);
    document.getElementById("ra4").innerHTML = "Подходят под шаблон:  " + res;
}

function ex4_15() {
    var str = "aa aba abba abbba abbbba abbbbba";
    var exp = /ab{1,3}a/g;
    var res = str.match(exp);
    document.getElementById("ra5").innerHTML = "Подходят под шаблон:  " + res;
}

function dop1() {
    let mas1 = ["mail", "gmail", "bk", "yandex", "inbox", "list"];
    let mas2 = ["ru", "com", "eu", "us"];
    let exp;
    exp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let mail = document.getElementById("mail").value;
    let valid = exp.test(mail);
    var flag1 = 0;
    var flag2 = 0;
    var output = "";
    if (valid) {
        var mas11 = mail.split('@');
        var mas22 = mas11[1].split('.');
        for (var i in mas1) {
            if (mas22[0] === mas1[i]) {
                flag1 = 1;
                for (var j in mas2) {
                    if (mas22[1] === mas2[j]) {
                        flag2=1;
                        output = "Адрес эл. почты введен правильно!";
                    }  /*output = "Адрес электронной почты введен неправильно!\n неверный домен №1";*/
                }
            }
            // } else output = "Адрес электронной почты введен неправильно!\n неверный домен №2";
        }
    }
    if(flag1===0) output = "Адрес электронной почты введен неправильно!\n неверный домен ур. 2";
    if(flag2===0) output = "Адрес электронной почты введен неправильно!\n неверный домен ур. 1";
    document.getElementById("message").innerHTML = output;
    return valid;
}

//СКРИПТЫ 6 ЛАБЫ
//ex 3, bl 1
function showFootTeam() {
    var footballTeam = {
        "Николай": ['вратарь'],
        'Андрей': ['нападающий'],
        "Петри": ['правый защитник'],
    };
    let result = " ";
    for (let player in footballTeam) {
        result += player + " - " + footballTeam[player] + ".   ";
    }
    document.getElementById("ta0").innerHTML = "Результат:  \n" + result;
}

//ex 7, bl 1
function showWeek() {
    var week = {
        Monday: "weekday",
        Tuesday: "weekday",
        Wednesday: "weekday",
        Thursday: "weekday",
        Friday: "weekday",
        Saturday: "Weekend",
        Sunday: "Weekend",
    };
    let res1 = " ";
    let res2 = " ";
    for (let day in week) {
        if (week[day] == "weekday") res1 += day + " ";
        if (week[day] == "Weekend") res2 += day + " ";
    }
    document.getElementById("aa1").innerHTML = res1;
    document.getElementById("aa2").innerHTML = res2;
}

function ex3() {
    document.getElementById("aa3").innerHTML = "Ура!!!";
}

function last() {
    document.getElementById("aa4").innerHTML = "Хорошая работа!)) можно и 20б поставить^^";
}

function last2() {
    document.getElementById("aa4").innerHTML = "&lt;p&gt; Текс заключен в теги &lt;/p&gt;";
}

