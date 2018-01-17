"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./zoo/Cat");
var Dog_1 = require("./zoo/Dog");
var Lion_1 = require("./zoo/Lion");
var Main = /** @class */ (function () {
    function Main() {
        console.log('Typescript Webpack starter launched');
    }
    /**
     *
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    Main.prototype.f1 = function (a, b) {
        return a + b;
    };
    /**
     *
     * @param {string} a
     * @param {string} b
     * @returns {string}
     */
    Main.prototype.f2 = function (a, b) {
        return a.concat(b);
    };
    /**
     *
     * @param {number} a
     * @param {string} b
     * @returns {string}
     */
    Main.prototype.f3 = function (a, b) {
        return b.toString() + a;
    };
    /**
     *
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    Main.prototype.f4 = function (a, b) {
        if (b) {
            return a + b;
        }
        return a;
    };
    Main.prototype.f5 = function (a, b) {
        if (typeof a == b) {
            return true;
        }
        if (typeof a == 'number') {
            return a;
        }
        if (typeof a == 'string') {
            return a;
        }
    };
    return Main;
}());
exports.default = Main;
var start = new Main();
var cat = new Cat_1.Cat('i', 'dusia');
var dog = new Dog_1.Dog('i', 'dusia');
var lion = new Lion_1.Lion('maso', 'simba');
function f6(animal) {
    if (animal.hasOwnProperty('food')) {
        animal.run();
    }
    else if (animal.hasOwnProperty('name')) {
        animal.findMaster();
    }
}
console.log(start.f1(1, 1));
console.log(start.f2('a', 'b'));
console.log(start.f3(1, '1'));
console.log(start.f4(1, 1));
console.log(start.f5(1, 1));
console.log(start.f5(1, 2));
console.log(start.f5('1', 2));
//# sourceMappingURL=index.js.map