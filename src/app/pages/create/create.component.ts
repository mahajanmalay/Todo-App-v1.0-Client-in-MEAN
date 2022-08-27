
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm:FormGroup;
  constructor(public fb : FormBuilder, private api: TaskService) { 
    this.createForm = this.fb.group(
      {
        'name' :[''],
        'about' : [''],
        'date' : [''],
      }
    );
  }

  ngOnInit(): void {
  }

  save(){
    const data =this.createForm.value;
    this.api.postTask(data).subscribe({
      complete: () => {
        alert('Task successfully created!')
      },
      error: (e) => {
        console.log(e);
      },
    });
  }


  reset(){
    this.createForm.reset();
  }
}
