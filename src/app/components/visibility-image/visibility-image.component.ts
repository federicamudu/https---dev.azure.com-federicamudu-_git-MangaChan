import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visibility-image',
  templateUrl: './visibility-image.component.html',
  styleUrls: ['./visibility-image.component.css']
})
export class VisibilityImageComponent implements OnInit {

  imageLogo:string="assets/images/logoAnime.png";
  imageWidth: number = 50;
  imageMargin: number = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
