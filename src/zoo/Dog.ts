import {InterfaceHomeAnimal} from "./InterfaceHomeAnimal";

export class Dog implements InterfaceHomeAnimal{
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
        console.log('Dog findMaster');
        return true;
    }

    /**
     *
     * @returns {boolean}
     */
    run(): boolean {
        console.log('Dog run');
        return true;
    }

    /**
     *
     * @returns {boolean}
     */
    sound(): boolean {
        console.log('Dog bla bla');
        return true;
    }

}