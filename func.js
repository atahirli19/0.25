//4
function zapusk(){
    console.log('Запуск')
}

zapusk()

//5

function summa(a, b){
    return a + b
}

console.log(summa(2, 5))

//6
function summma1(text='text', age=24) {
    return `${text} ${age}`;
}

const summa1 = (text='text', age=24) => `${text} ${age}`;

//7
function summa2(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b
}
   
console.log( summa3(2, 3));

//8
//da

//9
(function() {
    console.log('Запуск');
})();

//10
// text и age принимают значения 'text' 24

//13
function sum5(text, age, job) {
    
}

sum5('text', 24, 'developer');

//14

const person = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
person.firstFunc.call(person1);

//15

const person2 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person3 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
person.firstFunc.apply(person2);

//16

//call() и apply()

//17

Math.max(1, 2, 3);

//18
const num = [1, 2, 4];
Math.max(num);

//19
Math.min(1, 2, 3);

//20

const num2 = [1, 2, 4];
Math.min(num2);


