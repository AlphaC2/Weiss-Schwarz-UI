import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })
export class CardComponent{
    @Input() card: any;
}