import { Component, Input } from '@angular/core';

@Component({
    selector: 'library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent {
    @Input() library: Array<any>
}