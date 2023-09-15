import { Iingredients } from "./iingredients";

export interface Irecipe {
   id:number;
   name: string;
   description: string;
   imagePath: string;
   ingredients: Iingredients[]
}

