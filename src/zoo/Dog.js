"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog(master, name) {
        this.master = master;
        this.name = name;
    }
    /**
     *
     * @returns {boolean}
     */
    Dog.prototype.findMaster = function () {
        console.log('Dog findMaster');
        return true;
    };
    /**
     *
     * @returns {boolean}
     */
    Dog.prototype.run = function () {
        console.log('Dog run');
        return true;
    };
    /**
     *
     * @returns {boolean}
     */
    Dog.prototype.sound = function () {
        console.log('Dog bla bla');
        return true;
    };
    return Dog;
}());
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map