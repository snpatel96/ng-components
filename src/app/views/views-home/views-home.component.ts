import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  items = [
    {
      image: '/assests.images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assests.images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to puy stuff in',
    },
  ];
}
