import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ContactService } from 'src/app/services/contact.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-training-portal',
  templateUrl: './training-portal.component.html',
  styleUrls: ['./training-portal.component.css']
})
export class TrainingPortalComponent implements OnInit {

  public successSubmision: boolean = false;
  public forgetPassword: boolean = false
  public errorMessage:string 
  public successMessage:string
  public errorHandleMsg = [{ name:"EMAIL_NOT_FOUND" , value:"Please Enter Valid Email"},{name:"INVALID_PASSWORD", value:"Please Enter Valid Password"}]
  

  constructor(public fb:FormBuilder, private svc:ContactService,  private router:Router ) { }

  ngOnInit() {
  }

  public signInForm = this.fb.group({
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: ["", Validators.required]
  })

  public ResetForm = this.fb.group({
    email: [""],
  })

  public onSubmit() {
    if(this.signInForm.valid){
      this.svc.signIn(this.signInForm.value).subscribe((res) => {
        if(res.status === 200){
        this.successSubmision = true;
        this.router.navigate(['training/courses']);      
        this.signInForm.reset();
        }
      }, (err) => {
        const error = err.json()
        const indx = this.errorHandleMsg.findIndex((data)=>{return data.name ===  error.error.message })
        if(indx != -1){
        this.errorMessage = this.errorHandleMsg[indx].value ;
        }else{
          this.errorMessage = "Something Went Wrong"
        }
      })
    }
  }

  public passwordForgot(){
    this.forgetPassword = !this.forgetPassword
  }

  public resetPassword(){
    if(this.ResetForm.valid){
      this.svc.resetPassword(this.ResetForm.value).then(res => {
        this.successSubmision = true;  
        this.successMessage = "Please Check You Mail Id"   
        setTimeout(()=>{
          this.successMessage = '';
        },3000)   
        this.ResetForm.reset();
      }).catch(err => {
        this.successSubmision = false;
        this.errorMessage = "Please Enter Valid Email ID"
        setTimeout(()=>{
          this.errorMessage = '';
        },3000) 
        console.log(err);
      })
    }
  }

}
