import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public successSubmision: boolean = false;
  public contactForm = this.fb.group({
    name: ["",Validators.required],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    mobile: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required]
  })

  constructor(public fb:FormBuilder, private svc:ContactService) { }

  ngOnInit() {
  }

  public onSubmit() {
    if(this.contactForm.valid){
      this.svc.addNewContact(this.contactForm.value).then(res => {
        this.successSubmision = true;        
        this.contactForm.reset();
      }).catch(err => {
        this.successSubmision = false;
        console.log(err);
      })
    }
  }

}
