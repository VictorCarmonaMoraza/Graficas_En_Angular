import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './graficas/app-routing.module';
import { AppComponent } from './app.component';
import { BarrasComponent } from './graficas/pages/barras/barras.component';
import { BarrasDobleComponent } from './graficas/pages/barras-doble/barras-doble.component';
import { DonaHttpComponent } from './graficas/pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './graficas/components/grafica-barra/grafica-barra.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DonaComponent } from './graficas/pages/dona/dona.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrasComponent,
    BarrasDobleComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    MenuComponent,
    DonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
