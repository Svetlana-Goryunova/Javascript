// node hw_5.js
// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
var str = 'Каждый охотник желает знать';
let delete_characters = (str, length) =>(str.constructor===String && length>0 && str.slice(7,length)); 
console.log (delete_characters(str, 14)); 

//2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
var str = "HTML JavaScript PHP";
let insert_dash = (str) => str.trim().toUpperCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"); // 1 - замена символов нижнего регитра на верхний; 2 - заменяет пробалы на -
console.log(insert_dash(str))

//3. Сделать первую букву строки прописной
//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
var str = "string not starting with capital";  
let cursive_letter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(cursive_letter(str));

//4. Первая буква каждого слова заглавная
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
var str = "каждый охотник желает знать";  
let capitalize= (str) => str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
console.log(capitalize(str));

//5. Смена регистра символов строки
//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
function change_register(str) {
let next_str = "";
let leng = str.length;
    for (var i = 0; i < leng; i++) {
    if (str[i] === str[i].toLowerCase()) { // нижной регистр
        next_str += str[i].toUpperCase(); // верхний регистр
    } else {
        next_str += str[i].toLowerCase();
    }
    }
    return next_str;
}
console.log(change_register(str));

//6. Удалить все не буквенно-цифровые символы
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
let remove_char= (str) => str.replace(/[^\w\s]|_/g, "") // убираем символы и пробелы, добавляем _
           .replace(/\s+/g, " "); // заменяем _ на пробед
console.log(remove_char(str));

// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
function zeros (num, len, sign) { // аргументы - число, длина, знак
    let leng_zeros = len - (num + '').length, // добавить количество нулей = длина - количество символов числа
    num_zer = ''; // 
    for ( ; leng_zeros > 0; leng_zeros--) {
        num_zer += 0;
    }    
    return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
};
console.log(zeros(231, 8, '+'));

//8. Сравнение строк без учёта регистра
//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
//function comparison(str1, str2) {
  //  let result = str1.toUpperCase() === str2.toUpperCase(); 
    //return result; 
//}
let comparison = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
console.log(comparison("SfHJF", "SFHJF"));

// 9. Поиск без учета регистра
//Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
//let str1 = "ПРИВЕТ Андрей"
//let str2 = "приветик"
//function insensitive_search(str1, str2) {

//};


//10. ВерблюжийРегистр (CamelCase)
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
str = "hEllo world";
function initCap(str) {
    return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(i) {
        return i.toUpperCase().replace(/\s+/g, "");
     });
};
console.log(initCap(str));

//11. Змеиный_регистр (snake_case)
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
    str = str.replace(/[A-Z]/g, function (style_str) { // Заменяем все заглавные буквы символом подчеркивания (_), а затем строчными буквами
        return '_' + style_str.toLowerCase();
      });  
  return str.replace(/^_/, "");  // Удаляем символ подчеркивания (_) в начале строки
};
console.log(initSnake("Hi Andrew"));

//12. Повторить строку n раз
//Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
//function repeatStr(str, n) { 
let repeatStr = (str, n) => {
    return str. repeat (n);
}
console.log(repeatStr("Film", 5));

//13. Получить имя файла
//Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
var pathname = "/home/user/dir/file.txt";
let path = (pathname) => {
    return pathname.split("/").pop();
}
console.log(path(pathname));

//14. Заканчивается ли строка символами другой строки
//Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать"; 
var str1 = "";
function StringendsWith(str) {  
    if (str.length > str1.length) return false ;     
  };

  console.log(str.endsWith ("охотник"));


//String.endsWith = function (substring) {
   
//  };

//15. Подстрока до/после указанного символа
//Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

var str = 'Астрономия — Наука о небесных телах';

let getSubstr = (str, char, pos) => {
    if(pos=='after') return str.slice(str.indexOf(char) + 1); // выводит значение после обозначенного символа строки
   else if(pos=='before') return str.slice(0, str.indexOf(char)); // выводит значение до обозначенного символа строки
   else return str;   // при отсутсвии заданного параметра  char возвращает всю строку, за исключением 0 символа строки, при отсутсвии заданного параметра pos выводит всю строку.
 };
console.log(getSubstr(str, "у", 'after'));

//16. Вставить подстроку в указанную позицию строки
//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

let insert = (str, substr, pos) => {
    let str1 = str.split('');  // разбивает строку на подстроки, чтоб между подстрок вставить новую подстроку
    str1.splice(pos, 0, substr); // вставляет новую подстроку согласно объявленной позиции символа строки
    return str1.join('');   // объединяет все подстроки в общую строку
};
console.log (insert("Москва слезам", " верит", 6));


//17. Ограничить длину строки
//Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
str = "Москва слезам не верит"
let limitStr = (str, n, symb = "...") => {return str.substr (0, n - symb.length) + symb; // возвращает строку от 0 до n символа строки и прибавляет к строке значение symb
}
console.log(limitStr(str, 10, ",,"));


//18. Поделить строку на фрагменты
function cutString(str, n) {
    var str1 =[];
    for(let i = 0 ; i < str.length; i += n) {
      str1.push(str.substr(i, n));
    }
    return str1;
};
console.log(cutString('Верное решение', 2));

// 19. Количество вхождений символа в строке
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

var symb = "о", str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
    for (count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));
    return count;
};
console.log(count(str, symb));

//20. Удалить лишние пробелы из строки
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str = "    Max is a good      boy     "; 
let strip = (str) => {return str.replace(/\s +/g, " ") // заменяет несколько пробелов на 1
.replace(/^\s/, "")                                   // заменяет пробел в начале строки на пусто
.replace(/\s$/, "");}                                 // заменяет пробел в конце строки на пусто
console.log(strip(str));


//21. Удалить лишние слова из строки
//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

var str = "Сила тяжести приложена к центру масс тела"; 

function cutString(str, n) {
    return str.split(" ") // разбивает строку на подстроки (слова) по пробелам
    .splice(0, n) // устанавливает количество подстрок для отображения
    .join(" "); // объединяет установленное количество подстрок в одну строку
};
console.log(cutString(str, 3));

//22. Сортировка символов строки по алфавиту
//Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.
str = "trbfxm"
function alphabetize(str) {
    return str.split('').sort().join(''); // 1. разделение строки на символы (буквы) 2. сортирует массив символов 3. объединяет в строку
};
console.log(alphabetize(str));



