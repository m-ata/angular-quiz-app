import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    console.log(this.quizService.getQuiz().subscribe(res => console.log(res)));
  }

}
