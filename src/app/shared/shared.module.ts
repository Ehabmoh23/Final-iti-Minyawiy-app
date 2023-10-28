import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, NotfoundComponent],
  imports: [CommonModule, RouterLink, RouterModule ],
  exports: [FooterComponent, NavbarComponent, NotfoundComponent],
})
export class SharedModule {}
