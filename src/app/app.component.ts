import { Component, OnInit } from '@angular/core';
import { ITodo } from './ITodo'
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loggingService: LoggingService){

  }
  
  ngOnInit(): void {
    const data = localStorage.getItem("todos")
    if(data !== "" && data !== null){
      this.todos = JSON.parse(data)
    }
  }

  todos : ITodo[] =[]

  newTodo = ''

  logging(msg : any){
    this.loggingService.log(msg)
  }

  setTodo(event : KeyboardEvent){
    this.newTodo = (event.target as HTMLInputElement).value
  }

  addTodo() {
    if(this.newTodo.trim() === ""){
      return
    }
    this.todos.push({todo: this.newTodo, done: false})
    this.storeTodos()
    this.logging(this.todos)
  }

  storeTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  countOpenTodos() {
    const done = this.todos.filter((item) => {
      return !item.done
    })
    return done;
  }

  toggleTodo(index : number){
    this.todos[index].done = !this.todos[index].done
    this.storeTodos()
  }

  deleteTodo(index : number){
    this.todos.splice(index, 1)
    this.storeTodos()
  }

  title = 'angular_todo_app';
}
