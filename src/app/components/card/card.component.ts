import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })
export class CardComponent implements OnInit{
    card : any

    constructor(private cardService: CardService, private route: ActivatedRoute){}

    ngOnInit() {
        this.getCard();
      }

      getCard(){
        this.card = this.cardService.getCard(this.route.snapshot.params.id).subscribe(
            data => {this.card = data},
            err => console.error(err)
        );
      }
}