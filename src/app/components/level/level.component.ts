import { Component, Input } from '@angular/core';

@Component({
    selector: 'level',
    templateUrl: './level.component.html',
    styleUrls: ['./level.component.css']
})
export class LevelComponent {
    @Input() level: Array<any>
}