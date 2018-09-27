import { Component, Input } from '@angular/core';

@Component({
    selector: 'damage',
    templateUrl: './damage.component.html',
    styleUrls: ['./damage.component.css']
})
export class DamageComponent {
    @Input() damage: Array<any>
}