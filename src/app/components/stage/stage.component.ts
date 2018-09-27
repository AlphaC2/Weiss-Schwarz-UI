import { Component, Input } from '@angular/core';

@Component({
    selector: 'stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.css']
})
export class StageComponent {
    @Input() stage: Array<any>
}