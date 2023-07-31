import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  question = {
    text: 'Who painted the Mona Lisa?',
    choices: [
      'Pablo Picasso',
      'Leonardo da Vinci',
      'Vincent van Gogh',
      'Michelangelo'
    ]
  }

  onclickChoice(text: string) {
    console.log(text)
  }
}
