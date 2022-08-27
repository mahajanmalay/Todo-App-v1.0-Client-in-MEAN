import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  jsonData :any = [];
  id_to_update:any;
  editForm:FormGroup;
  constructor(public fb : FormBuilder, private activatedRoute: ActivatedRoute, private api:TaskService) { 
    
    this.editForm = this.fb.group(
      {
        name :[''],
        about : [''],
        date : [''],
      }
    )
  }

  
  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id_to_update=id;
    this.api.getOneTask(id).subscribe((data) => {
      this.jsonData = data;
      this.editForm.controls['name'].setValue(this.jsonData[0].name);
      this.editForm.controls['about'].setValue(this.jsonData[0].about);
      this.editForm.controls['date'].setValue(this.jsonData[0].date);

    })

  }


  update(){
    this.api.patchTask(this.editForm.value,this.id_to_update).subscribe({
      next:(res)=>{
        alert("Updated Successfully");
        this.editForm.reset();
      },
      error:()=>{
        alert("Error While Updating the record")
      }
    })
  }
}
