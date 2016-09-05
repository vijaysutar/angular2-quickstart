import { Component } from '@angular/core';
export class Hero{
  id:number;
  name:string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr.Nice'},
  { id: 12, name: 'Narco'},
  { id: 13, name: 'Bombasto'},
  { id: 14, name: 'Celeritas'},
  { id: 15, name: 'Magneto'},
  { id: 16, name: 'Dyna'},
  { id: 17, name: 'Mr. Noha'},
  { id: 18, name: 'Magno'},
  { id: 19, name: 'Tonndo'},
  { id: 20, name: 'Tinvi'},
]


@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
  </div>


  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  
   `
  })
export class AppComponent {
  title='Tour of heroes';
  heroes = HEROES;
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // hero: Hero = {
  //   id:1,
  //   name:'Windstrom'
  // };
}
