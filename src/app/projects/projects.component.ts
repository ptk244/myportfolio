import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects: any[] = [];

  

  ngOnInit(): void {
    // this.projects = JSON.parse(localStorage.getItem('projects') || '[]');

    this.projects = [
      {
        title: 'Codial - Social Media Web Application',
        description: 'A real-time social media platform with chat functionality, built with Node.js, Express.js, and MongoDB.',
        link: 'https://github.com/ptk244/Codial',
        image: 'assets/codial.jpg' // Replace with your image path
      },
      {
        title: 'Food Mine',
        description: 'An e-cart website allowing users to order food from various restaurants, using Angular and Node.js.',
        link: 'https://github.com/ptk244/foodmine',
        image: 'assets/Foodmine.png'
      },
      {
        title: 'Jio Coupons',
        description: 'Enhanced user interface and experience of Jio Coupons website using Angular and Django.',
        link: 'https://jiocoupons.in/',
        image: 'assets/Jiocoupons.jpg'
      }
    ];
  }

  
}
