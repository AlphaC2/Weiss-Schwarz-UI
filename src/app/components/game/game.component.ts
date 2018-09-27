import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    game: any
    gameform: FormGroup;
    validMessage: string = "";
    constructor(private gameService: GameService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getGame();
        this.gameform = new FormGroup({index: new FormControl('',Validators.required)});
    }

    getGame() {
        this.game  = this.gameService.getGame(this.route.snapshot.params.id).subscribe(
            data => { this.game = data},
            err => console.error(err)
        );
    }

    isObject(val){
        return typeof val === 'object';
    }
    
    submit() {
        if (this.gameform.valid){
            this.gameService.postChoice(this.gameform.value).subscribe(
                data => {
                    this.gameform.reset();
                    this.getGame();
                    return true;
                  },
                  error => {
                    return Observable.throw(error);
                  }
            );
        }else {
            this.validMessage = "Please fill out the form before submitting";
          }
       
    }
}