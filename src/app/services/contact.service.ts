import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { User } from '../user.modal';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.apiUrl;
  
  private options:RequestOptions;
 
  user = new BehaviorSubject<User>(null)

  constructor(private http:Http) {
    let header = new Headers();
    header.append("Content-Type","application/json");
    this.options = new RequestOptions();
    this.options.headers = header;
  }


  public addNewSubscriber(email:string):Promise<any>{
    var body = JSON.stringify({
      "email":email
    })
    // return this.http.post(this.url+"service/api_inntech/incoming_webhook/newSubsc",body,this.options).toPromise();
    return this.http.post(this.url+"/subscribe/newsub",body,this.options).toPromise();
  }

  public addNewContact(data:any):Promise<any>{
    var body = JSON.stringify({
      "name": data.name,
      "email": data.email,
      "mobile": data.mobile,
      "subject": data.subject,
      "message": data.message
    })
    return this.http.post(this.url+"/contact/newcontact",body,this.options).toPromise();
    // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
  }

  public newResume(value:any,files:any):Promise<any>{
    const data = new FormData();
    data.append('name',value.name)
    data.append('designation', value.designation)
    data.append('apply', value.apply)
    data.append('email',value.email)
    data.append('relocation', value.relocation)
    data.append('file', files[0]);
    return this.http.post(this.url+"/career/newcareer",data).toPromise();
  }

  public signIn(data:any): Observable<any>{
    var body = JSON.stringify({
      "email": data.email,
      "password": data.password,
      "returnSecureToken":true
    })
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU",
    body,this.options).pipe(
      catchError((err:any)=>{
        throw err
      }),
      tap((res) =>{
        const data = res.json(); 
        this.authenticateUser(data.email , data.localId, data.idToken, data.expiresIn)
      })
    )
    // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
  }

  // public googleSignIn(data:any):Promise<any>{
  //   return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU",{
  //     postBody:`id_token=${data}&providerId=[google.com]`,
  //     requestUri:'http://localhost:4200/training',
  //     returnIdpCredential:true,
  //     returnSecureToken:true}).toPromise();
  //   // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
  // }

  public resetPassword(data:any):Promise<any>{
    // var body = JSON.stringify({
      var Email = data.email
    //   "returnSecureToken":true
    // })
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU",{
      requestType:"PASSWORD_RESET",
      email:Email}).toPromise();
    // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
  }

  autoSiginIn(){
    const userData = JSON.parse(localStorage.getItem('auth'));
    if(!userData){
      return ;
    }
    const loggedInUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate ))
     if(loggedInUser.token){
       this.user.next(loggedInUser)
     }
  }

  public authenticateUser(email , userId , token , expiresIn){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User(email , userId , token , expirationDate)
    this.user.next(user);
    localStorage.setItem('auth', JSON.stringify(user))
  }

}
