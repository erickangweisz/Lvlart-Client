import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { routing, appRoutingProviders } from './app.routes'

import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { DuelsComponent } from './components/duels/duels.component'
import { RankingComponent } from './components/ranking/ranking.component'
import { SignupFormComponent } from './components/signup-form/signup-form.component'
import { SigninFormComponent } from './components/signin-form/signin-form.component'
import { ProfileComponent } from './components/profile/profile.component'

import { CarouselHeaderComponent } from './components/carousel-header/carousel-header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    DuelsComponent,
    RankingComponent,
    SignupFormComponent,
    SigninFormComponent,
    ProfileComponent,

    CarouselHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: appRoutingProviders,
  bootstrap: [AppComponent]
})
export class AppModule {}
