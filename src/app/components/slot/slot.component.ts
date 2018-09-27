import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'slot',
    templateUrl: './slot.component.html',
    styleUrls: ['./slot.component.css']
  })
export class SlotComponent{
    @Input() slot: any;
    
    checkSlot(type: string){
    	if (type.toUpperCase().includes('FRONT')){
            return 'front';
        } else {
            return 'back';
        }
    }
}