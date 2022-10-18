import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TableComponent } from './components/table/table.component';
import { VisibilityImageComponent } from './components/visibility-image/visibility-image.component';
import { FormsModule } from '@angular/forms';
import { ListPageComponent } from './pages/list-page/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TableComponent,
    VisibilityImageComponent,
    ListPageComponent,
    DetailsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'list-page', component: ListPageComponent},
      {path: 'landing-page', component: LandingPageComponent},
      {path: 'details-page', component: DetailsPageComponent},
      {path:'', redirectTo:'/landing-page', pathMatch:'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router){}
}
