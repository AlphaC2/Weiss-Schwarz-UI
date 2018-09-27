import { Component, Input } from '@angular/core';

@Component({
    selector: 'climax',
    templateUrl: './climax.component.html',
    styleUrls: ['./climax.component.css']
})
export class ClimaxComponent {
    @Input() climax: any
}