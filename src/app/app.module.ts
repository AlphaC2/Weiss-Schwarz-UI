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
import { StockComponent } from './components/stock/stock.component';
import { HandComponent } from './components/hand/hand.component';
import { LevelComponent } from './components/level/level.component';
import { DamageComponent } from './components/damage/damage.component';
import { StageComponent } from './components/stage/stage.component';
import { SlotComponent } from './components/slot/slot.component';
import { WaitingroomComponent } from './components/waitingroom/waitingroom.component';
import { LibraryComponent } from './components/library/library.component';
import { MemoryComponent } from './components/memory/memory.component';
import { BoardComponent } from './components/board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StockComponent,
    CardComponent,
    HandComponent,
    LevelComponent,
    DamageComponent,
    StageComponent,
    SlotComponent,
    WaitingroomComponent,
    LibraryComponent,
    MemoryComponent,
    BoardComponent
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
