import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {

  title: string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answersSelected:string =""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished:boolean = false

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished=false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }
  playerChoose(value:string){
    this.answers.push(value)
    console.log("this.answers")
  }

  async nextStep(){
    this.questionIndex+=1

    if(this.questionIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else {
      this.finished = true
    }
  }
}
