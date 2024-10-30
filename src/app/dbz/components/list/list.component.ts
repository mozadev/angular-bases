import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {

    // to get a property called characterList from father (main-page-component) if you don't define inside ()
    @Input() 
    public characterList: Character[]= [
        // {
        //     name:'Trunk',
        //     power: 10
        // }
    ]
 }




