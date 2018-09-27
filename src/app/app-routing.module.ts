import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: 'game/:id',
    component: GameComponent
  },
  {
    path: 'card/:id',
    component: CardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
