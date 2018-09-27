import { Component, Input } from '@angular/core';

@Component({
    selector: 'memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.css']
})
export class MemoryComponent {
    @Input() memory: Array<any>
}