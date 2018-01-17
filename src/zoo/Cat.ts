import {InterfaceHomeAnimal} from "./InterfaceHomeAnimal";

export class Cat implements InterfaceHomeAnimal {
    master: string;

    name: string;

    constructor(master:string, name:string) {
        this.master = master;
        this.name = name;
    }

    /**
     *
     * @returns {boolean}
     */
    findMaster(): boolean {
        console.log('Cat findMaster');
        return true;
    }

    /**
     *
     * @returns {boolean}
     */
    run(): boolean {
        console.log('Cat run');
        return true;
    }

    /**
     *
     * @returns {boolean}
     */
    sound(): boolean {
        console.log('Cat bla bla');
        return true;
    }

}