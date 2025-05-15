import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinutasListComponent } from './minutas-list/minutas-list.component';
import { PastasListComponent } from './pastas-list/pastas-list.component';
import { CombosListComponent } from './combos-list/combos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MinutasListComponent,
    PastasListComponent,
    CombosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
