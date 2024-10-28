import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent { }
