import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    public characterList: Character[]= [
        {
            name:'Trunk',
            power: 10
        }
    ]
 }




