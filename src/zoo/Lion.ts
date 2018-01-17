import {InterfaceWildAnimal} from "./InterfaceWildAnimal";

export class Lion implements InterfaceWildAnimal{
    food: string;

    name: string;


    constructor(food:string, name:string) {
        this.food = food;
        this.name = name;
    }


    eatingFood(): boolean {
        return true;
    }

    run(): boolean {
        return true;
    }

    sound(): boolean {
        return true;
    }

}