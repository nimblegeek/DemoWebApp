import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  clubs: any;

  constructor() {
    this.title = 'Spring - Angular - DemoWebApp';
  }
}
