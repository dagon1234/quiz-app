import { Choice } from "./choice";

export interface Question {
    id: number,
    text: string,
    image?: string,
    choices: Choice[],
}

