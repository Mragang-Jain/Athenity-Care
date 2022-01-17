import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {

  public logoutBtn : boolean = false

  constructor( private route:Router,  private _authService: ContactService) { 
    // console.log("CONSTRUVTOR     .............")
  }

  ngOnInit() {
    this.route.events.subscribe((res)=>{
      console.log("RES", res)
    })
    // console.log("CHIGHDBHBH HIT ME")
  }
  
}
