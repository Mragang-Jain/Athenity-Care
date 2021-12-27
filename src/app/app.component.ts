import { Component , OnInit } from '@angular/core';
import {ContactService} from './services/contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'client';

  constructor(private _authService: ContactService){}

  ngOnInit(){
      this._authService.autoSiginIn()
  }
 
}
