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
      image:'assets/img/projects/1.jpg',
      title:'Davinci by Eli-Lilly',
      sortDesc:'Eli Lilly and Company is a global pharmaceutical company headquartered in Indianapolis, Indiana...',
      url:''//'project/1'
    },
    {
      id:2,
      image:'assets/img/projects/2.jpg',
      title:'Ameriprise Financial',
      sortDesc:'Ameriprise Financial is an investment company that provides clients with financial planning...',
      url:''//'project/2'
    },
    {
      id:3,
      image:'assets/img/projects/3.jpg',
      title:'Liberty Mutual Insurance',
      sortDesc:'',
      url:''//'project/3'
    },
    {
      id:4,
      image:'assets/img/projects/4.jpg',
      title:'AT&T Inc',
      sortDesc:'AT&T Inc. is an American multinational telecommunications corporation,AT&T is the largest provider...',
      url:''//'project/4'
    },
    {
      id:5,
      image:'assets/img/projects/5.jpg',
      title:'Argha Services, Inc',
      sortDesc:'Argha is a software company that provides a variety of services that include application development...',
      url:''//'project/5'
    },
    {
      id:6,
      image:'assets/img/projects/6.jpg',
      title:'TD Bank Mount Laurel',
      sortDesc:'TD bank is one of the 10 largest banks in US. The purpose of this project was to design a web application...',
      url:''//'project/6'
    },
    {
      id:7,
      image:'assets/img/projects/7.jpg',
      title:'UNITED HEALTH CARE',
      sortDesc:'',
      url:''//'project/7'
    },
    {
      id:8,
      image:'assets/img/projects/8.jpg',
      title:'THE MONEY TREE OF GEORGIA',
      sortDesc:'',
      url:''//'project/8'
    },
    {
      id:9,
      image:'assets/img/projects/9.jpg',
      title:'Crown Fine Arts',
      sortDesc:'Crown fine arts is one of the largest fine arts logistic company provide services related to Fine arts management...',
      url:''//'project/9'
    }   
    )
  }

}
