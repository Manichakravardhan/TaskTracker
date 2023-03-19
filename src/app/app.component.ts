import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first applicaton in Angular';
  public users : Array<User> = [
    new User("Manichakravardhan", "20"),
    new User("Aishwarya", "40")
  ]
  displayList: boolean = true
  constructor(){}

  ngOnInit(): void {}
} 


class User {
  name: string
  age: string
  constructor(public _name : string, public _age: string){
    this.name = _name
    this.age = _age
  }
}


//cmd+p search file
//ctrl + ` open the terminal