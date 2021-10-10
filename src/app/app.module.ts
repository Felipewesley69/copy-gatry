import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { SearchComponent } from './layout/search/search.component';
import { ListProductsComponent } from './promo/list-products/list-products.component';
import { PromoComponent } from './promo/promo.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ButtonModule } from './shared/components/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent,
    PromoComponent,
    ScrollToTopComponent,
    FooterComponent,
    ListProductsComponent,
  ],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
