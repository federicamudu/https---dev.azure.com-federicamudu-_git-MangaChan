import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/components/table/table.component';
import { IAnime } from 'src/app/components/table/anime';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
