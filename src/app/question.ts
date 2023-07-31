import { Choice } from "./choice";
//ng generate interface question
export interface Question {
    id: number,
    text: string,
    image?: string,
    choices: Choice[]
}
