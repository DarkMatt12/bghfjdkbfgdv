import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { GaleriaComponent } from './shared/Components/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,



    HomePageComponent,
    ProductsPageComponent,
    AddPageComponent,
    GaleriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
