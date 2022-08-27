import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDos :any = [];
  constructor(private api:TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(){
    this.api.getTask().subscribe((data) => {
      this.toDos = data;
    });
  }

  
  delete(id:any){
    this.api.deleteTask(id).subscribe(()=>{
      alert("deleted successfully");
    this.getAllTasks();
    })
    
  }
}
