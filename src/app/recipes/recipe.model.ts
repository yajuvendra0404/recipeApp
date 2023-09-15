import { Iingredients } from "@interfaces/iingredients";

export class Recipe {
  public id:number | null;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Iingredients[]

  constructor(id:number,name: string, description: string, imagePath: string, ingredients: Iingredients[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients= ingredients;
  }
}
