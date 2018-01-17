import {Cat} from "./zoo/Cat";
import {Dog} from "./zoo/Dog";
import {Lion} from "./zoo/Lion";
import {InterfaceAnimal} from "./zoo/InterfaceAnimal";

export default class Main {
    constructor() {
        console.log('Typescript Webpack starter launched');
    }

    /**
     *
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    f1(a:number, b:number):number {
        return a + b;
    }

    /**
     *
     * @param {string} a
     * @param {string} b
     * @returns {string}
     */
    f2(a:string, b:string):string{
        return a.concat(b);
    }

    /**
     *
     * @param {number} a
     * @param {string} b
     * @returns {string}
     */
    f3(a:number, b:string):string {
        return b.toString() + a;
    }

    /**
     *
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    f4(a:number, b?:number):number {
        if(b) {
            return a + b
        }
        return a;
    }


    f5(a:number|string ,b:number|string):number|string|boolean {
        if(typeof a == b) {
            return true;
        }
        if(typeof a == 'number') {
            return a;
        }

        if(typeof a == 'string') {
            return a;
        }
    }
}

let start = new Main();
let cat = new Cat('i', 'dusia');
let dog = new Dog('i', 'dusia');
let lion = new Lion('maso', 'simba');

function f6(animal:InterfaceAnimal) {
    if(animal.hasOwnProperty('food')) {
        animal.run();
    } else if(animal.hasOwnProperty('name')) {
        animal.findMaster();
    }
}

console.log(start.f1(1,1));
console.log(start.f2('a','b'));
console.log(start.f3(1,'1'));
console.log(start.f4(1,1));

console.log(start.f5(1,1));
console.log(start.f5(1,2));
console.log(start.f5('1',2));


