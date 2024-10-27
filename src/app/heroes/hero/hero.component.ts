import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public edad: number = 45 ;

  get capitalizedName(){
    return 'hi'.toUpperCase()
  }

   getHeroDescription():string {
    return   `${this.name} - ${this.edad}`;

  }

  changeHero() : void {
    this.name = 'Spyderman'
  }

  changeAge(): void{
    this.edad = 25
  }

  reset():void {
    this.name = 'ironman'
    this.edad = 45
  }
}
