//Task1
var str = "Have a good day";
console.log(str);

//Task2
var age = 25;
console.log(age);

//Task3
var info = {};
info.name = 'Max';
info.age = '31';
console.log(info);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//Task4
var customArray = [3, 13, 21];
console.log(customArray);
customArray = 0;
console.log(customArray);

//Task5
var student = 'Maxim ';
console.log(student);
document.write(student);
document.write('<br>');
student = 'Maxim Demura';
console.log(student);
document.write(student);

//Task6
var complex = [];
complex[0] = 'My name is ';
complex[1] = 7;
complex[2] = null;
complex[3] = {name};
console.log(complex[2]);

//Task7
var complexObj = {};
complexObj.name = 'Max';
complexObj.age = 31;
complexObj.friends = ['Vasya', 'Petya', 'Kolya'];
complexObj.soc_links = {facebook:'https://www.facebook.com/maxim.demura.50', googlePlus:'https://plus.google.com/u/0/+MaximDemura'};
console.log(complexObj);
document.write('<br>');
document.write(complexObj);

var temp = `My name is ${complexObj.name}, I'm ${complexObj.age}, I have a lot of friends but the best one is ${complexObj.friends}, You can find me on facebook: ${complexObj.soc_links.facebook} or on goole groups: ${complexObj.soc_links.googlePlus}.`;
console.log(temp);
document.write('<br>');
document.write(temp);


