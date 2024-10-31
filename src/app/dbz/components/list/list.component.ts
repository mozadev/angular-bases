import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
        {
            name:'Trunk',
            power: 10
        }
    ]
    // enviando al padre
    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id?: string): void {
        // emitir el ID del personaje
        if(!id ) return;
        
        console.log({id})

        this.onDelete.emit(id);
    }
 }




