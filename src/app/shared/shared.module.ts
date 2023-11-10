import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterLink, RouterModule } from '@angular/router';
import { PartnersModule } from '../partners/partners.module';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotfoundComponent ,],
  imports: [CommonModule, RouterLink, RouterModule , PartnersModule],
  exports: [FooterComponent, NavbarComponent, NotfoundComponent],
})
export class SharedModule {
}
