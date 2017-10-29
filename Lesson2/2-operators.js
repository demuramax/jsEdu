//Определите результат и тип переменных в следующих случаях:
//Task1
var r = '9' + 0; //string "90"

var r = 9 + '0'; //string 90

var r = 4 + 9; // number 13

var r = null + 7; // number 7

var r = '6' + null; // string "6null"

var r = '6' + []; //string "6"

var r = '6' + undefined; //string "6undefined"

//Task2
2/3 + 1 + 1/3 == 2 // не будет, 2/3 + 1 + 1/3 не равно 2

//Task3
var r;
var t = ++2;
var u = 1++;
var w = 2--;

r = 6 && 0 && 7; // r=0

r = -9 && -8; // r = -8

r = 6 && 0 && 7; // r = 0

r = "string" && 0; //r = 0

r = [] && {} && 7; // r = 7

r = [] || 7; // r = []

r = {} || 0; // r = {}

r = false || true; // true

r = "2" > "3"; // false

r = "ab" <= "fg"; //true

r = "2k" <= "8l"; // true

r = "2" != 2; // false

r = "2" !== 2; //true

r = t + 2; // r = 11

r = t + 2--; // r = 11

r = u - w; // r = -1