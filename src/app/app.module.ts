import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoComponent } from './demo/demo.component';
import { TerminalComponent } from './terminal/terminal.component';
import { SideLogoComponent } from './side-logo/side-logo.component';
import { SideLogoDarkComponent } from './side-logo-dark/side-logo-dark.component';
import { ResearchComponent } from './research/research.component';
import { TractionComponent } from './traction/traction.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { ProductsComponent } from './products/products.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarLightComponent } from './navbar-light/navbar-light.component';
import { NavbarDarkComponent } from './navbar-dark/navbar-dark.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, data: {animation: 'Home'} },
  { path: 'Home', component: HomePageComponent, data: {animation: 'Home'} },
  { path: 'Products', component: ProductsComponent, data: {animation: 'Home'} },
  { path: 'Traction', component: TractionComponent , data: {animation: 'Home'} },
  { path: 'Research', component: ResearchComponent, data: {animation: 'research'} },
  { path: 'Recognition', component: RecognitionComponent, data: {animation: 'About'}},
  { path: 'Discover', component: DemoComponent, data: {animation: 'Demo'}},
  { path: '**', component: HomePageComponent ,  data: {animation: 'Home'}},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    DemoComponent,
    TerminalComponent,
    SideLogoComponent,
    SideLogoDarkComponent,
    ResearchComponent,
    TractionComponent,
    RecognitionComponent,
    ProductsComponent,
    NavbarLightComponent,
    NavbarDarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
     ),
    //  AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
