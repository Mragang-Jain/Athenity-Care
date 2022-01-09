import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public projects = [];
  constructor() { }

  ngOnInit() {
    this.projects.push({
      id:1,
      image:'assets/img/wards/ccu.jpg',
      title:'CCU Ward ( सीसीयू वार्ड )',
      sortDesc:'',
      url:''//'project/1'
    },
    {
      id:2,
      image:'assets/img/wards/nicu.jpg',
      title:'NICU Ward ( एनआईसीयू वार्ड )',
      sortDesc:'',
      url:''//'project/2'
    },
    {
      id:3,
      image:'assets/img/wards/deluxpvt.jpg',
      title:'Delux PVT Ward ( डीलक्स प्राइवेट वार्ड )',
      sortDesc:'',
      url:''//'project/3'
    },
    {
      id:4,
      image:'assets/img/wards/privateward.jpg',
      title:'Private Ward ( प्राइवेट वार्ड )',
      sortDesc:'',
      url:''//'project/3'
    },
    {
      id:5,
      image:'assets/img/wards/download.jpg',
      title:'General Ward ( सामान्य वार्ड )',
      sortDesc:'',
      url:''//'project/3'
    },
    {
      id:6,
      image:'assets/img/wards/ccu.jpg',
      title:'ICU Ward ( आईसीयू वार्ड )',
      sortDesc:'',
      url:''//'project/1'
    }
    )
  }

}
