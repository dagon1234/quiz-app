import { Component, inject } from '@angular/core';
import { Choice } from './../choice';
import { QuizService } from './../quiz.service';
import { Question } from './../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  audio = new Audio()

  questions: Question[]
  currentQuestionIndex = 0
  isEnd = false
  score = 0

  usedQuestion: string[] = []
  usedAnswer: string[] = []
  questionsNoImage: Question[];
  showEachQuestionFlag = true;

  constructor(private quizService: QuizService) {
    this.questions = this.quizService.getQuizData();
    this.audio.src = '../assets/audio/mixkit-arcade-retro-game-over-213.wav'
    this.newQuiz()
    this.questionsNoImage = this.quizService.getQuizDataNoImage();
  }

  onclickChoice(choice: Choice, question: Question) {
    this.playSound()

    if (choice.isAnswer) this.score++

    if (this.currentQuestionIndex == this.questions.length - 1) {
      this.usedQuestion.push(question.text)
      this.usedAnswer.push(choice.text)
      this.isEnd = true
    } else {
      this.currentQuestionIndex++
      this.questions[this.currentQuestionIndex].choices.sort((a, b) => 0.5 - Math.random())
      this.usedQuestion.push(question.text)
      this.usedAnswer.push(choice.text)
    }
  }

  private playSound() {
    this.audio.load();
    this.audio.addEventListener('canplaythrough', () => {
      this.audio.play();
    })
  }

  onclickNewQuiz() {
    this.newQuiz()
  }
  private newQuiz() {
    this.questions.sort((a, b) => 0.5 - Math.random())
    this.isEnd = false
    this.currentQuestionIndex = 0
    this.score = 0
    this.usedAnswer = []
    this.usedQuestion = []
  }
  getCurrentQuestion(): Question {
    return this.questionsNoImage[this.currentQuestionIndex];
  }

  showEachQuestion(): void {
    this.showEachQuestionFlag = true;
    this.isEnd = false;
    this.currentQuestionIndex = 0;
  }

  showQuestionList(): void {
    this.showEachQuestionFlag = false;
    this.isEnd = true;
  }

  onClickNext(): void {
    if (this.showEachQuestionFlag) {
      if (this.currentQuestionIndex < this.questionsNoImage.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.isEnd = true
      }
    }
  }

  onClickPrevious(): void {
    if (this.showEachQuestionFlag) {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    }
  }
}
