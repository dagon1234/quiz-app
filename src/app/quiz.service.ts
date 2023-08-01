import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = "http://localhost:3000/questions";

  constructor() { }

  async getQuizData() {
    const res = await fetch(this.url)
    return res.json();
  }
}