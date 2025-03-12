import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gameslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gameslist.component.html',
  styleUrl: './gameslist.component.css'
})
export class GameslistComponent {
  title="List Of Games";
  displayTable=false;
  gameList=[
    {id:1,name:'Cricket',players:11,viewerCount:1000},
    {id:2,name:'Football',players:22,viewerCount:10000},
    {id:3,name:'KhoKho',players:20,viewerCount:100},
    {id:4,name:'BasketBall',players:8,viewerCount:100}
  ];
  displayGames(){
this.displayTable=!this.displayTable;
  }

}
