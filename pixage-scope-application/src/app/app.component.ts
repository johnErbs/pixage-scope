import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _imgDir: string;
  constructor(){
    this._imgDir = './assets/images/logo.png';
  }
}
