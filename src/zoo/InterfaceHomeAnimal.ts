import {InterfaceAnimal} from "./InterfaceAnimal";

export interface InterfaceHomeAnimal extends InterfaceAnimal{
    master:string

    findMaster():boolean;

}