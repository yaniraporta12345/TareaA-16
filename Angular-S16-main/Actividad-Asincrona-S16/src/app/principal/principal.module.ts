import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent
  ]
})
export class PrincipalModule { }
