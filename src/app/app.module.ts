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
import { CarouselVisitedComponent } from './components/carousel-visited/carousel-visited.component'
import { AsideComponent } from './components/aside/aside.component'
import { GalleryLatestuploadsComponent } from './components/gallery-latestuploads/gallery-latestuploads.component'
import { LevelPipe } from './pipes/level/level.pipe'
import { GalleryTopratedComponent } from './components/gallery-toprated/gallery-toprated.component'
import { GalleryDuelsComponent } from './components/gallery-duels/gallery-duels.component'
import { FooterComponent } from './components/footer/footer.component'
import { GalleryIllustrationComponent } from './components/gallery-illustration/gallery-illustration.component'
import { GalleryPhotographyComponent } from './components/gallery-photography/gallery-photography.component'
import { GalleryModelingComponent } from './components/gallery-modeling/gallery-modeling.component'
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component'
import { ProfileViewComponent } from './components/profile-view/profile-view.component'
import { ProfileUploadimagesComponent } from './components/profile-uploadimages/profile-uploadimages.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { GalleryHeaderComponent } from './components/gallery-header/gallery-header.component';
import { ChatComponent } from './components/chat/chat.component'

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
    CarouselHeaderComponent,
    CarouselVisitedComponent,
    AsideComponent,
    GalleryLatestuploadsComponent,
    LevelPipe,
    GalleryTopratedComponent,
    GalleryDuelsComponent,
    FooterComponent,
    GalleryIllustrationComponent,
    GalleryPhotographyComponent,
    GalleryModelingComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    ProfileUploadimagesComponent,
    ProfileHeaderComponent,
    ProfileInfoComponent,
    GalleryHeaderComponent,
    ChatComponent
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
