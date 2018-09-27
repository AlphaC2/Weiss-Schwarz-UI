import { Component, Input } from '@angular/core';

@Component({
    selector: 'waitingroom',
    templateUrl: './waitingroom.component.html',
    styleUrls: ['./waitingroom.component.css']
})
export class WaitingroomComponent {
    @Input() waitingroom: Array<any>
}