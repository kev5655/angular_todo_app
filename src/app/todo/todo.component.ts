import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  @Input() todo = {todo: "", done: false}
  @Input() index = 0

  @Output() todoIndex = new EventEmitter<number>()
  @Output() deleteIndex = new EventEmitter<number>()

  toggleTodo(){
    this.todoIndex.emit(this.index)
  }

  deleteTodo(){
    this.deleteIndex.emit(this.index)
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
