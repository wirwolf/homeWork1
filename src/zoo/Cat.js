"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = /** @class */ (function () {
    function Cat(master, name) {
        this.master = master;
        this.name = name;
    }
    /**
     *
     * @returns {boolean}
     */
    Cat.prototype.findMaster = function () {
        console.log('Cat findMaster');
        return true;
    };
    /**
     *
     * @returns {boolean}
     */
    Cat.prototype.run = function () {
        console.log('Cat run');
        return true;
    };
    /**
     *
     * @returns {boolean}
     */
    Cat.prototype.sound = function () {
        console.log('Cat bla bla');
        return true;
    };
    return Cat;
}());
exports.Cat = Cat;
//# sourceMappingURL=Cat.js.map