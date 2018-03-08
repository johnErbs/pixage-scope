// imports.
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Metadata.
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})

export class CameraComponent implements AfterViewInit {
  // #variable declaration-Bindings to frontend.
  @ViewChild('video')  _video: ElementRef;
  @ViewChild('imgCanvas') _imgCanvas: ElementRef;

  // variables :
  btn_txt: string;
  image: ImageData;

  // Constructor: constructs/assigns the variables for use in frontend.
  constructor() { 
    this.btn_txt = 'Tag foto';
  }

  // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  ngAfterViewInit() {
    this._video = this._video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
      .then(stream => {
        this._video.src = window.URL.createObjectURL(stream);
        this._video.play();
      }).catch(function (err) {
        console.log(err.name + ': ' + err.message);
      });
    }
  }

  CaptureImg(e) {
    this.image = this._imgCanvas.nativeElement.getContext('2d').drawImage(this._video, 0, 0, 300, 225);
    console.log(e);
  }
}
