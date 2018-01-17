import {InterfaceAnimal} from "./InterfaceAnimal";

export interface InterfaceWildAnimal extends InterfaceAnimal {
    food:string

    eatingFood():boolean;

}