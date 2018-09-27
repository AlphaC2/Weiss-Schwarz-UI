import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardService } from './services/card.service';
import { GameComponent } from './components/game/game.component';
import { GameService } from './services/game.service';



@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CardService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
