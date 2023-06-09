import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  private hostUrl = 'http://localhost:5000/tasks'

  getTasks(): Observable<Task[]>  {
    return this.http.get<Task[]>(this.hostUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.hostUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTask(task): Observable<Task>{
    const url = `${this.hostUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }
}
