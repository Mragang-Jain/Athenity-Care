import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public frmSubscriber = this.fb.group({
    email:['',Validators.compose([Validators.required,Validators.email])]
  });
  public successSubmision:boolean = false;
  constructor(public fb:FormBuilder,private svc:ContactService) { }

  ngOnInit() {
  }

  handleTraining(){
    window.open("http://tranning.finixtechnocrates.com/");
  }

  public submitSubscriber() {
    if(this.frmSubscriber.valid){
      this.svc.addNewSubscriber(this.frmSubscriber.value.email).then(res => {
        this.frmSubscriber.reset();
        this.successSubmision = true;
      }).catch(err => {
        alert("Sorry, we are unable to proceed your request ! please retry !!");
      });
    }
  }

}
