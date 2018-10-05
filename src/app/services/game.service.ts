import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  getGame(id:number){
    var game = this.http.get('/server/game?id='+id,{headers: new HttpHeaders()});
    return game;
  }

  postChoice(id:number, choice){
      var response = this.http.get('/server/game?id='+id+'&choice='+choice.index, {headers: new HttpHeaders()});
      return response;
  }
}