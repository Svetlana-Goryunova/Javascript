    // node homework_3.js

    // Работа с if-else
// 1.	 Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = 0; 
if (a === 0){console.log( 'верно' );}
else {console.log( 'неверно' );} 

// 2.	 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = 1; 
if (a > 0){console.log( 'верно' );}
else {console.log( 'неверно' );}

// 3.	 Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = -3; 
if (a < 0){console.log( 'верно' );}
else {console.log( 'неверно' );}

// 4.	 Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = -3; 
if (a >= 0){console.log( 'верно' );}
else {console.log( 'неверно' );}

// 5.	 Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = -3; 
if (a <= 0){console.log( 'верно' );}
else {console.log( 'неверно' );}

// Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
a = 0; 
if (a !== 0){console.log( 'верно' );}
else {console.log( 'неверно' );}

// 7.	 Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
a = 'test'; 
if (a === 'test'){console.log( 'верно' );}
else {console.log( 'неверно' );}

// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
a = '1'; 
if (a === '1'){console.log( 'верно' );}
else {console.log( 'неверно' );}


    // Работа с логическими переменными
// 1.	 Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
test = true;
if (test){console.log( 'верно' );}
else {console.log( 'неверно' );}

console.log(test ? 'верно' : 'неверно');

// 2.	 Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
test = false;
if (! test){console.log( 'верно' );}
else {console.log( 'неверно' );}

console.log(! test ? 'верно' : 'неверно');


    // Работа с && (и) и || (или)
// 1.	 Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2
a = 0;
if (a > 0 && a < 5){console.log( 'верно' );}
else {console.log( 'неверно' );}

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
a = 5;
if (a === 0 || a === 2){console.log( a + 7 );}
else {console.log( a / 10 );}

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
a = 3;
b = 5;
if (a <= 1 || b >= 3){console.log( a + b );}
else {console.log( a - b );}

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
a = 5;
b = 6;
if (a > 2 && a < 11 || b >= 6 && b < 14){console.log( 'верно' );}
else {console.log( 'неверно' );}


    // На switch-case
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
num = 3;
switch (num) {
    case 1: {console.log('зима');
        break;}
    case 2: {console.log('весна');
        break;}
    case 3: {console.log('лето');
        break;}
    case 4: {console.log('осень');
        break;}
}


    // Общие задачи
// 1.	 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
a = 50;
if (a >= 1 && a <= 10){console.log( '1-я декада' );}
else if (a >= 11 && a <= 20){console.log( '2-я декада' );}
else if (a >= 21 && a <= 31){console.log( '3-я декада' );}
else {console.log( 'ошибка' );}

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
a = month = 7;
if (a === 1 && a === 2 && a === 12 ){console.log( 'зима' );}
else if (a >= 3 && a <=5){console.log( 'весна' );}
else if (a >= 6 && a <= 8){console.log( 'лето' );}
else if (a >= 9 && a <= 11){console.log( 'осень' );}
else {console.log( 'нет такого месяца' );}

// 3.	Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for ( let  i  =  1 ;  i  <= 100 ;  i ++ ) {
if ( i  %  3  ===  0   &&  i  %  5  ===  0 ) {console.log("fizzbuzz");}  
else  if ( i  %  5  ===  0 ) {console.log ( "Buzz" );} 
else  if ( i  %  3  ===  0 ) {console.log ( "Fizz" );}  
else {console.log ( i )}
 }




// Циклы while и for
    //Решите эти задачи сначала через цикл while, а затем через цикл for.
    //1.	 Выведите столбец чисел от 1 до 100.
let i = 1;
while (i < 101) {
    console.log(i);
    i++;
}
for (let i = 1; i <= 100; i ++) {
console.log (i);
}
    //2.	 Выведите столбец чисел от 11 до 33.
//let i = 11;
//while (i >= 11 && i <= 33) { 
//console.log (i);
//i++;
//}
for (let i = 11; i <= 33; i ++) {
console.log (i);}


    //3.	 Выведите столбец четных чисел в промежутке от 0 до 100.

for (let i = 0; i <=100; i++) {
    if (i % 2 == 0) 
    {console.log(i);}    
}

    //4.	 С помощью цикла найдите сумму чисел от 1 до 100.

let sum = 0;
for (let g = 1; g <= 100; g++) {sum = sum + g;} {
console.log(sum);
}

    //5.	 Найти факториал введенного числа(использовать prompt).

    //6.	Дано число 5. Вывести в консоль число 555555555, не используя вычислений.


    //7.	Перебрать числа от 0 до 300. Если  число четное, делится на 12 без остатка и не равно 48, а результат деления на 12 нечетный, то вывести строку “Ooops”. Если число нечетное и делится на 3, то вывести “Hola”. Если значение ноль, то вывести “Zero” (без использования сравнения).
