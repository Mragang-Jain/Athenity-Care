import { Component, OnInit  } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {

  public logoutBtn : boolean = false

  constructor( private _authService: ContactService) { 
    // console.log("CONSTRUVTOR     .............")
  }

  ngOnInit() {
    // console.log("CHIGHDBHBH HIT ME")
  }
  
}
