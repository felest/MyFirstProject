//console.log(111)
//console.log(123)
//let h = 4;
//let b = 6;
//let s = b*h/2;
//console.log(s)
//let n = 7;
//let k = 50;
//let each = Math.floor(k/n); //деление с округлением в меньшую сторону. берем ф-ю из библиотеки Math
//let rest = k%n;
//alert(each, rest);//чтобы показать инф-ю в браузере пользователю 
//console.log("каждому ребенку досталось ", each);
//console.log("остаток ", rest);
//console.log(5==5);

//найти большее число
// let a = 13;
// let b = 5;
// if(a>b){
//     console.log("большее число = ", a);
// }
// else if(a<b){
//     console.log("большее число = ", b);
// }
// else {
//     console.log("числа равны");
// }


//узнать, является ли число положительным, отрицательным или 0
// let n = 0;
// let с = Math.sign(n);
// if(с==1){
//     console.log("число положительное")
// }
// else if(с==-1){
//     console.log("число отрицательное")
// }
// else{
//     console.log("число равно 0")
// }

// for(let i=0; i<=10; i++){
//     console.log(i);
// }

//alert(123321)

//const num = prompt("введите число");

//alert(num);

//const name = prompt("введите ваше имя")
//alert("Привет, " + name);

// if(confirm("Say hello?")){
//     alert("Hello")
// }
// else{
//     alert("You cancelled")
// }

// let num = prompt("enter your number") //значение получается строковое

// num = Number(num)**2
// alert(num)

//console.log(typeof num)

// let n1 = prompt("enter first number")
// let n2 = prompt("enter the second number")

// n1 = Number(n1)
// n2 = Number(n2)
// alert((n1+n2)/2)

// let h = prompt("сколько часов")
// let m = prompt("сколько минут")

// h = Number(h)
// m = Number(m)

// let minA = 1440 - (h*60 + m)//сколько минут осталось в этом дне

// let hoursLeft = Math.floor(minA/60)//сколько часов осталось
// let minLeft = minA - hoursLeft*60
// //alert(hoursLeft)
// //alert(minLeft)
// //console.log(minA)
// alert("осталось часов " + hoursLeft + ", осталось минут " + minLeft)

// let num = 234 //вывести вторую цифру этого числа

// console.log((num % 100 - num % 10) / 10)

// let n = 12347
// //let str = String(n).split('')//разбиваем на элементы
// let str = String(n)
// let lastEl = str[str.length-1]
// //console.log(str.length)//выводим кол-во элементов
// //console.log(str[str.length-1])//выводим последний элемент

// console.log(str.substr(str.length-1, str.length-1) + str.substr(0, str.length-1))

// let sum = prompt("Enter the sum")
// sum = Number(sum)
// let sal = 250 + sum*0.1
// alert("your salary is " + sal)

// let obj = new Object()
// let obj2 = {
//     name: "Ann",
//     age: 20,
//     isProgrammer: true,
//     skills: ["html", "css", "js"]
// }

// obj2.isMarried = false//создаем новые данные
// obj2.isMarried = true //переприсвоили другое значение
// //console.log(obj2.skills)//вытаскиваем конкретные данные
// //console.log(obj2)

// delete obj2.isMarried

// obj2["user address"] = { //добавили еще данные
//     city: "Kazan",
//     postIndex: 445566
// }

// if("surname" in obj2){
//    console.log("Exists");
//     }
//     else{
//     console.log("Doesn't exist");
//     }
// //console.log(obj2)

// for(let key in obj2){ //последовательно выводим все свойства и значенияю key - переменная
//     console.log(key, obj2[key])  //obj2 с ключом key
// }

//задача 2. запрашиваем у пользователя данные(возраст), проверяем, корректные ли данные
// let age = prompt("enter number between 0 and 120")
// age = Number(age)
// if(age !== NaN && age > -1 && age < 121){ //если то, что ввел пользователь, не число (NaN)
//     alert("It's OK")
// }
// else{
//     alert("It's not correct")
// }

//задача 3. Запросить у пользователя число и вывести его модуль
// let n = prompt("enter a number")
// n = Number(n)
// console.log(Math.abs(-7))//обратились к объекту math  и вытаскиваем метод abs(модуль)

// function sumOfNum(a, b){ // функция
//     return a+b
// }
// console.log(sumOfNum(5, 10))

//const arr = ["str", 1212, [12, 74], {"name": "Lena"}, true] //создали пустой массив. можно 
                //заполнить разными данными
//const arr2 = new Array() // способ создать экземпляр класса array

// console.log(arr[1])
// console.log(arr.length) //узнать кол-во эл-тов
// console.log(arr[arr.length - 1]) //вытащить последний эл-т
// arr[0] = "hello" //присвоили новое значение элементу
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr.indexOf(1212)) //ищем индекс объекта

//const arr = [1, 22, 14, 456, 32]
//function getFirstElem(str){
  //  return str[0];
//}
//console.log(getFirstElem("hello, world!"));

//let str = "I love winter so much!"
//console.log(str.split(" ")) //делим строку по пробелам
//console.log(str.split("")) //делим по каждому элементу

// str = str.split(" ")
// str = str.join("**")
// console.log(str)

// let n = prompt("введите число")
// n = Number(n)
// n%5==0 ? alert("кратно 5") : alert("не кратно 5")

// const str = "ЗЕМЛЯ"
// let str2 = prompt("на какой планете ты живешь?")
// str2 = str2.toUpperCase() // все буквы стали верхнего регистра
// if(str === str2){
//     alert("Привет, Землянин!")
// }
// else{
//     alert("Привет, инопланетянин!")
// }

// //ЗАДАЧА: ввести два числа и какой-то знак. вычислить пример и вывести результат
// let x = Number(prompt("введите первое значение"))
// let y = Number(prompt("введите второе значение"))
// let symbol = prompt("какую метаматическую операцию выполнить")

// switch(symbol){ //передаем знак в качестве условия (если или if)
//     case "+": // если +, то прибавляем
//         alert(x+y);
//         break;
//     case "-":
//         alert(x-y);
//         break;
//     case "*":
//         alert(x*y);
//         break;
//     case "/":
//         alert(x/y);
//         break;
//     default: // если ни с чем не совпадает (else или иначе)
//         alert("введен неверный знак");
//         break;
// }

// let str = "hello, world!"
// console.log(str.substr(2, 6))//выводим со 2 эл-та 6 элементов
// console.log(str.substring(2, 6))//выводим со 2 по 6 элементы

// let n = 5;
// let i = 0;
// while(i <= n){
//     console.log("#");
//     i++;
// }

// let n = 10;
// while(n >= 0){
//     console.log(n);
//     n--;
// }

//ЗАДАЧА с факториалом
// let m = 10;
// let res = 1;
// for(let i = 1; i <= m; i++){
//     res = res * i;
// }
// console.log(res)

// function factorial(n){ //с помощью рекурсии
//     if(n===0 || n===1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// //Вывести числа от  0 до 100, которые кратны указанному числу
// let x = 7;
// for(let i=0; i<100 ; i ++){
//     if(i%x === 0){
//         console.log(i)
//     }
// }

// const today = new Date();
// console.log(today)

// let date1 = new Date("2021-05-17"); // год-месяц-день
// console.log(date1);
// console.log(today.getTime())// выдает ответ в миллисекундах
// console.log('Разница между датами в миллисекундах ', today - date1);
// console.log('Разница между датами в днях ', Math.round((today - date1)/24/60/60/1000));

//function Student(firstname, lastname, birthday){
//    this.firstname = firstname;
//    this.lastname = lastname;
//    this.birthday = birthday;
//    this.showInfo = function(){
//        return "Student name: " + this.furstname + " " + this.lastname;
//        //console.log('Student name: '+this.firstname+ ' '+this.lastname);
 //     }
//    this.showAge = function(){
//      const deltaTime = Date.now() - Date.parse(this.birthday);
//      const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
//      return (this.firstname+' '+this.lastname+' is '+studentAge +' years old.');
//      //console.log(this.firstname+' '+this.lastname+' is '+studentAge +' years old.');
//    } 
//}
// let michael = new Student('Michael', 'Dowson', '11/23/2001');
// michael.showInfo();
// michael.showAge();
// let mary = new Student('Mary', 'Simpson', '08/12/1998');
// mary.showInfo();
// mary.showAge();
// //console.log(michael, lisa);
// console.log(michael.firstname); //можем вытащить имя
// console.log(michael.showAge());
// //console.log(mary);
// console.log(mary.firstname);
// console.log(mary.showAge());



// //ООП, классы, инкапсуляция, наследование
// class Car{  //создали класс-родитель
//   constructor(wheelAmount){
//     this.wheelAmount = wheelAmount;
//   }

//   go(){
//     return "Мы едем";
//   }

//   showWheelAmount(){
//     return this.wheelAmount;
//   }
// }

// //const Audi = new Car(4) //создаем экземпляр класса и передаем ему параметры

// class Audi extends Car{ //создаем класс Audi, который наследует все свойства класса Car
//   #index;  //приватное значение
//   constructor(wheelAmount, madeIn, isPrime, design){ //можем передать и новые параметры
//     super(wheelAmount); //обозначет свойства, которые унаследованы от родительского класса
//     this.madeIn = madeIn;
//     this.isPrime = isPrime;
//     this.design = design;
//     this.#index = Math.floor(Math.random()*1000);
//   }

//   get getIndex(){  //получить значание
//     return this.#index;
//   }

//   set setIndex(value){  //изменить значение
//     this.#index = value
//   }

//   showInfo(){
//     return "Произведено в " + this.madeIn + ". " + "Автомобиль престижный - " + this.isPrime
//   }
// }

// const Item = new Audi(4, "Germany", true, {logo: "4 rings"}); //создаем экземпляр класса
// console.log(Item);
// console.log(Item.showInfo());
// console.log(Item.getIndex); //получили индекс, т.е. приватную переменную

// Item.madeIn = "Russia" //можем поменять какое-либо свойство
// console.log(Item);

// Item.setIndex = 50000000;
// console.log(Item.getIndex);

// //написать функцию, которая проверяет, является ли переданное ей число простым
// function isSimpleNumber(n){
//   for(let i = 2; i < 10; i++){
//     if (n % i == 0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSimpleNumber(811))


// function sumAllElem(x, ...args){ //ф-ия принимает несколько элементов. х и все остальные(они не обязательны)
//   return args.reduce((acc, elem)=> acc = acc+ elem, 0) + x;
// }
// console.log(sumAllElem(1, 2, 4, 6));


// //получили сумму всех элементов массива
// let arr = [1, 2, 3, 4, 5];
// let answer = arr.reduce((acc, elem)=>acc = acc+elem, 0)
// console.log(answer)

//функция принимает массив со строками и считает кол-во букв в массиве
//const animals = ["cat", "dog", "parrot", "hamster"];
// function sumAllElem(arr){
//     num = arr.reduce((acc, elem) => elem.length + acc, 0);
//     return num;
// }
//console.log(sumAllElem(animals));


//создать массив с числами, котороые передают длину каждого слова
// function createNewArray(arr){
//   return arr.map((elem, index, array) => elem.length)
//   //return arr.map((elem, index, array) => index) - вывести индексы
//   //return arr.map((elem, index, array) => array) - вывести слова как элементы массива
//   //return arr.map((elem, index, array) => elem.length + 10) - можно прибавить что-то
// }
// console.log(createNewArray(animals));

// function createNewArray(arr){
//   return arr.filter((elem, index) => elem === "cat")//если элемет = true, то он остается в массиве. 
//   // если false - то убирается
//   //return arr.filter((elem, index) => index === 3)
// }
// console.log(createNewArray(animals))

//forEach - обрабатывает содержимое массива, но не возвращает новое значение
//const newArr = animals.forEach((elem, index, arr) => console.log(elem += "!"))
// const newArr = animals.forEach((elem, index, arr) => 
//   index % 2 === 0 ? console.log(elem += "!") : console.log(elem))

// let animals = ["cat", "dog", "parrot", "hamster"];
// animals.push("elephant");
// console.log(animals);

// const sequenceSum = (begin, end, step) => {
//   if (begin > end){
//     return 0;
//   }
//   const arrNum = [];
//   for(let i = begin; i <= end; i += step){
//   arrNum.push(i);
//   }
//   return arrNum.reduce((acc, elem) => acc + elem, 0);
// }
// console.log(sequenceSum(1, 6, 1))

//ООП
// function Rectangle(l, h){
//     this.l = l;
//     this.h = h;
      
//     this.showInfo = function(){
//         return "длина прямоугольника: " + this.l + " высота прямоугольника: " + this.h;
//     }
//     this.perimeter = function(){
//       return "периметр прямоугольника = " + (l+h)*2
//     } 
//     this.square = function(){
//       return "площадь прямоугольника = " + l*h
//     }
//     this.change = function(ch){ //меняет длину
//       return this.l +=ch;
//     }
// }
// let abcd = new Rectangle(2, 4); //создаем новый экземпляр
// console.log(abcd.showInfo());
// console.log(abcd.perimeter());
// console.log(abcd.square());
// console.log(abcd.change(2));
// console.log(abcd.showInfo());
// abcd.l=5; //меняет длину. просто обращаемся к конкретной переменной
// console.log(abcd.showInfo());

// let topLeft = document.querySelector(".one").style.top = "40px"; //поменяли положение точки
// let bottomLeft = document.querySelector(".three").style.top = "110px";//поменяли положение точки
// let topRight = document.querySelector(".two").style.top = "40px";//поменяли положение точки
// let bottomRight = document.querySelector(".four").style.top = "110px";//поменяли положение точки
//console.log(topLeft);

// document.querySelector(".one").getElementsByClassName.top;
// console.log(document.body);
// console.log(window);

//  //объектная модель документа
//  const div = document.createElement('div'); //создали переменную
//  //const p = document.createElement('p'); //создали еще одну переменную
//  div.classList.add('wrapper'); //добавили класс
//  const body = document.body;
//  document.body.appendChild(div); //в body поместили тэг div
//  //div.appendChild(p); // в тэг div поместили еще один тэг
//  //p.textContent = 'DOM (Document Object Model)'; //присваивает текст
//  const header = document.createElement('h1');
//  header.textContent = 'DOM (Document Object Model)';
//  div.insertAdjacentElement('beforebegin', header); //указываем положение
//  //div.insertAdjacentElement('afterend', p);
//  const ul = ` 
//    <ul>
//        <li>one</li>
//        <li>two</li>
//        <li>three</li>
//    </ul>
//    `;

//    div.innerHTML = ul; //подключаем HTML код
//  //console.log("Это элемент див " + div + "Это лемент параграф" + p);
//  //console.log(`Это элемент див ${div}. Это элемент параграф ${p}`)// используем обратные кавычки(находятся на букве Ё)

//  const img = document.createElement('img');
//  img.src = 'https://picsum.photos/240';
//  img.width = 240;
//  div.appendChild(img);
//  console.log(img);

//  const pDiv = document.createElement('div');
//  const pDiv1 = document.createElement("p");
//  const pDiv2 = document.createElement("p");
//  pDiv.appendChild(pDiv1);
//  pDiv.appendChild(pDiv2);
//  pDiv1.textContent = "First paragraph";
//  pDiv2.textContent = "Second paragraph";
//  document.body.insertAdjacentElement('beforeend', pDiv);
//  //pDiv.children[0].style.color = "red"; //меняем цвет одного элемента
//  pDiv.classList.add("red-text"); //меняем цвет текста всего класса, только класс надо создать
//    // в файле CSS
//  pDiv.firstElementChild.remove(); //удалить тэг, в данном случае первый параграф

//  const generateAutoCard = (brand, color, year) => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//      return `
//          <div class="autoCard">
//           <div>
//             <h2>${brand} ${color}</h2>
//             <p>Автомобиль ${brand} - ${year} года. Возраст авто ${currentYear - year} лет</p>
//             <button>Delete card</button>
//           </div>
//         </div>
//      `;
//  }

//  const carsDiv = document.createElement('div');

//  const carList = [
//    {brand: "Tesla", color: "red", year: 2016},
//    {brand: "Lexus", color: "black", year: 2019},
//    {brand: "Nissan", color: "grey", year: 2021}
//  ]

//  let carsHTML = carList.map((car) => {
//    return generateAutoCard(car.brand, car.color, car.year);
//  })

//  carsHTML = carsHTML.join(' ');
//  console.log(carsHTML);
//  carsDiv.innerHTML = carsHTML;
//  console.log(carsDiv);
//  document.body.appendChild(carsDiv);

//  const buttons = document.querySelectorAll("button"); //обращаемся по тегу
 
//  function handleClick(e){  //ф-ия, которая занимается обработкой события
//   const currentButton = e.currentTarget;
//   //currentButton.parentElement.remove(); //обращаемся к родительскому элементу
//   currentButton.closest('.autoCard').remove(); //при большой вложенности. обращаемя к элементу по классу
//       // в данном случае autoCard
//   console.log(currentButton.parentElement);
//  }
// buttons.forEach(button => {  //идет итерация по кнопкам
//   button.addEventListener('click', handleClick) //добавили прослушиватель событий, который реагирует на изменения в браузере
//         //в данном случае на клик мыши
// })


// function isPangram(string){
//   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
//     "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   let arr = string.split(' ').join('').toLowerCase().split(''); //разделили по пробелам, потом соединили все в одно, потом
//         //понизили регистр у всех букв, потом снова разделяем строку по каждому элементу
//   for( let i = 0; i <= arr.lenght; i++){
//     if (arr[i] in alphabet){}  // ????????!
//   }
//   return arr;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));


// //функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы двух массивов без повторений
// const arr1 = ["1", "2", "3", "4", "5"];
// const arr2 = ["3", "5", "6", "7", "2"];
// let a = new Set([...arr1, ...arr2]); //используем оператор rest
// console.log(a);


// const l = new XMLHttpRequest();
// console.log(l);


// const data = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
// console.log(data);

//fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

// async function getData(){
//   let url = 'https://jsonplaceholder.typicode.com/users';
//   let response = await fetch(url);
//   let commits = await response.json();
//   return commits;
  
// }
// console.log(getData('https://jsonplaceholder.typicode.com/users'));

//import axios from "axios" //будет храниться содержимое библиотеки "axios" в переменной axios

// async function getData2(url){
//   return await fetch(url).then(response => {
//     return response.json().then(ans => console.log(ans))
//   });
// }
// console.log(getData2('https://jsonplaceholder.typicode.com/users'));

// function getData3(url){
//   fetch(url).then(data => {
//     return data.text()
//   })
//   .then(data => {
//     console.log(data)
//   })
// }
// let data = getData3('https://jsonplaceholder.typicode.com/users');

// //возведение числа в степень
// function mult(n, d){
//   if (d == 1){
//     return n;
//   }
//   return n * mult (n, d-1);
// }
// const n = 5; //число
// const d = 3; //степень
// console.log(mult(5, 3))


// function maxNum(n){
// 	if(n == 0){ 
// 		return 0;
// 	}
// 	else{
// 		return Math.max(n%10, maxNum(Math.floor(n/10)));
// 	}
// }
// console.log(maxNum(12467));

//let arr = [1, 21, 3, 5, 7];
//console.log(Math.max(...arr));

// function maxNum(arr){
//   let buf = -Infinity;
//   for (let i = 0; i <= arr.length; i++){
//       if(arr[i] > buf){
//         buf = arr[i];
//       }
//   }
//   return buf;
// }
// console.log(maxNum([3, 44, 5, 16, 9]));

// let users = ""
// //выводим информацию в консоль
// //fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => console.log(data));

// async function getUsers(){
//   await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
//   .then(data => users = JSON.stringify(data)); //преобразуем массив в строку
//   console.log(users);

//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   div.innerHTML = users;

//   console.log(JSON.parse(users)); //загоняем строку обратно в массив
// }

// getUsers();

//console.log(document.forms);


//работа с формами
// let phoneCounter = 1;

// const addBtn = document.getElementById("addBtn")
// addBtn.addEventListener('click', addPhoneNumber)

// function addPhoneNumber(event) {
//         event.preventDefault()
//         phoneCounter++;
//         const f = document.forms[0];
//         const b = document.createElement('br');
//         f.appendChild(b);

//         const t = document.createElement('span')
//         t.textContent = "Phone number "
//         f.appendChild(t)

//         const phoneInput = document.createElement('input');
//         phoneInput.type = 'text';
//         phoneInput.name = 'phone' + phoneCounter;
//         phoneInput.placeholder = 'Enter phone number';
//         f.appendChild(phoneInput);

//         const t2 = document.createElement('span')
//         t2.textContent = " Phone type "
//         f.appendChild(t2)

//         var selector = f.elements['type'];
//         console.log(selector)

//         var newSelector = selector.cloneNode(true);
//         console.log(newSelector);

//         newSelector.name = 'type' + phoneCounter;
//         f.appendChild(newSelector);

//         const t3 = document.createElement('span')
//         t3.textContent = " Priority "
//         f.appendChild(t3);

//         let mainRadio = document. createElement('input')

//         mainRadio.type = 'radio';
//         mainRadio.name = 'main';
//         mainRadio.value = phoneCounter

//         document.body.appendChild(f)
//         console.log(phoneCounter)
// }



//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
//const template = /\$/; //ищем символ $
//const template = /^\d/; //проверяем, начинается ли строка с числа
//let res = template.test("three thousand $");
//console.log(res);

// let str = "20% of -8765 population 3576384 owning 80% income 7879654";
// //let template = /\%/;
// //let res = template.exec(str);

// let template = /\-?\d+/g; //ищем либо отрицательное, либо положительное число
// let res = str.match(template);
// console.log(res);

//let str = "20% of -8765 population 3576384 owning 80% income 7879654";
//console.log(str.replace(/3/g, "7")); //заменили все 3 на 7

// //ОБЛАСТИ ВИДИМОСТИ ПЕРЕМЕННЫХ (глобальная и локальная)
// const template = /\-?\d+/g;
// function fetchData(){
//   const data = '111'; //переменная доступна только внутри функции
//   console.log(template); //можем получить данные, т.к. переменная глобальная
// }

// // if(!data){
// //   console.log("no data")
// // }
// // else{
// //   console.log("everything's OK")
// // }
// fetchData();


// //callback функция

// const arr = ["one", "two2", "three", "four4", "five"];
// function createNew(arr){
//   return arr.map((elem, index, array) => elem.length);
// }
// console.log(createNew(arr));

// const template = /\d/;
// console.log(arr.filter(word => !template.test(word))); //выводит слова без цифр

// const newArr = arr.forEach((elem, index, arr) => console.log(elem+="NEW"));

// console.log(arr.reduce((acc, n) => n.length + acc, 0));


// //ТИП ДАННЫХ SYMBOL
// const name = Symbol("name");
// console.log(name);

// let user = {
//   login: "user1",
//   [Symbol("data")]: "This is important user data"
// }
// console.log(user);
// console.log(user.data); //выводит undefined 

// //ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА
// const arr = [1212, 3434, 456, 5675];
// //let numOne = arr[0];
// //let numTwo = arr[1];

// //const [numOne, numTwo, ...rest] = arr;
// const [numOne, numTwo, , numFour] = arr;
// console.log(numOne, numTwo, numFour);


// //вывод информации из объектов
// const obj = {name: "Helen", age: 25};
// let {name, age} = obj;
// console.log(name, age);

//сеттеры и геттеры
class Product{
  constructor(name, price){
    this._name = name;
    this._price = price;
  }

  set name(name){
    if(name.trim().length !== 0){
      this._name = name;
    }
    else{
      console.log("This is not suitable data");
    }
  }

  set price(price){
    if(price > 0){
      this._price = price;
    }
    else {
      console.log("This is not suitable data");
    }
  }
  
  printInfo(){
    console.log("Name: ${this._name}, Price: ${this._price}");
  }
}

  let phone = new Product("iPhone 10", 660);

  phone.price = 550;
  console.log(phone._price);
