import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http : HttpClient) { }

  postTask(data : any) :Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/todo/",data);
  }
  getTask()
  {
    return this.http.get<any>("http://localhost:8080/todo/");
  }
  getOneTask(id:any)
  {
    return this.http.get<any>("http://localhost:8080/todo/"+id);
  }
  patchTask(data:any,id:any):Observable<any>{
    return this.http.patch<any>("http://localhost:8080/todo/"+id,data);
  }
  deleteTask(id:any){
    return this.http.delete<any>("http://localhost:8080/todo/"+id);
  }
}
