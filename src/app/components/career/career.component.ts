import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private fb:FormBuilder, private svc:ContactService) { }

  ngOnInit() {
  }

  public upload:HTMLInputElement;
  public successSubmision: boolean = false;
  public resumeForm = this.fb.group({
    name: ["",Validators.required],
    designation: ["",Validators.required],
    apply: ["",Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    relocation: [false],
    upload: ["", Validators.required]
  })
  files:any;
  handleFileInput(files){
    if(files.length > 0){
      this.files = files;
    }else{
      this.files = null;
    }
  }

  public onSubmit(){
    // console.log("CHVH")
    if(this.resumeForm.valid){
      this.svc.newResume(this.resumeForm.value,this.files).then(res => {
        this.successSubmision = true;        
        this.resumeForm.reset();
      },err => {console.error(err)})
    }
  }

}
