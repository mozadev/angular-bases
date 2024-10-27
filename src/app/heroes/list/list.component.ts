import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['spyderman','neo','batman','hulk']
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero =  this.heroes.pop();
    // console.log({deleteHero})
  }

}
