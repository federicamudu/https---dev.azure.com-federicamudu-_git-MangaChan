import { Component, OnInit } from '@angular/core';
import { IAnime } from './anime';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  pageTitle: string='Lista anime'
  imageWidth: number = 50;
  imageMargin: number=2;
  showListAnime: boolean = false;
  private _listFilter: string = '';
    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredAnime=this.performFilter(value);
    }
  constructor(private route: Router) { }
  filteredAnime: IAnime[]=[];
  animes: IAnime[] = [
    {
      "nameAnime": "Bleach",
      "character": "Ichigo",
      "quote": "We can't waste time worrying about the what if's!"
    },
    {
      "nameAnime": "OnePiece",
      "character": "Luffy",
      "quote": "I decided to be Pirate King. I don't care if I die for it."
    }
  ];
  performFilter(filteredBy:string): IAnime[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.animes.filter((anime:IAnime)=>anime.nameAnime.toLocaleLowerCase().includes(filteredBy));
  }
  ngOnInit(): void {
    this.listFilter='';
  }
  toogleAnime(): void {
    this.showListAnime = !this.showListAnime;
}
}
