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
    game: any;
    buttonText: string;
    showOpponent: boolean;
    gameform: FormGroup;
    validMessage: string = "";
    constructor(private gameService: GameService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.getGame();
        this.showOpponent = false;
        this.buttonText = "Opponent's";
        this.gameform = new FormGroup({index: new FormControl('',Validators.required)});
    }

    click(){
        this.showOpponent = !this.showOpponent;
        if (this.showOpponent){
            this.buttonText = "Your";
        } else {
            this.buttonText = "Opponent's";
        }
    }

    getGame() {
        this.game  = this.gameService.getGame(this.route.snapshot.params.id).subscribe(
            data => { this.game = data
                if (this.game.p2.player.name == this.game.sourcePlayer.name){
                    console.log("p2 turn");
                    this.getGame();
                }
            },
            err => console.error(err)
        );
    }

    isObject(val){
        return typeof val === 'object';
    }
    
    submit() {
        if (this.gameform.valid){
            this.gameService.postChoice(this.route.snapshot.params.id, this.gameform.value).subscribe(
                data => {
                    this.gameform.reset();
                    setTimeout( () => { this.getGame(); }, 200 );
                    return true;
                  },
                  error => {
                    /** return Observable.throw(error); */
                  }
            );
        }else {
            this.validMessage = "Please fill out the form before submitting";
          }
       
    }
}