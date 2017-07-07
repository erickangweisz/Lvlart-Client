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
import { ChatComponent } from './components/chat/chat.component'
import { FooterComponent } from './components/footer/footer.component'

import { LevelPipe } from './pipes/level/level.pipe'
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe'

import { CarouselHeaderComponent } from './components/carousel-header/carousel-header.component'
import { CarouselVisitedComponent } from './components/carousel-visited/carousel-visited.component'
import { AsideComponent } from './components/aside/aside.component'
import { GalleryHeaderComponent } from './components/gallery-header/gallery-header.component'
import { GalleryLatestuploadsComponent } from './components/gallery-latestuploads/gallery-latestuploads.component'
import { GalleryTopratedComponent } from './components/gallery-toprated/gallery-toprated.component'
import { GalleryDuelsComponent } from './components/gallery-duels/gallery-duels.component'
import { GalleryIllustrationComponent } from './components/gallery-illustration/gallery-illustration.component'
import { GalleryPhotographyComponent } from './components/gallery-photography/gallery-photography.component'
import { GalleryModelingComponent } from './components/gallery-modeling/gallery-modeling.component'
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component'
import { ProfileViewComponent } from './components/profile-view/profile-view.component'
import { ProfileUploadimagesComponent } from './components/profile-uploadimages/profile-uploadimages.component'
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component'
import { ProfileInfoComponent } from './components/profile-info/profile-info.component'
import { ProfileLastvisitsComponent } from './components/profile-lastvisits/profile-lastvisits.component'
import { ProfileGalleryComponent } from './components/profile-gallery/profile-gallery.component'
import { ProfileDuelsComponent } from './components/profile-duels/profile-duels.component'
import { ProfileCommentsComponent } from './components/profile-comments/profile-comments.component'
import { DuelsIllustrationComponent } from './components/duels-illustration/duels-illustration.component'
import { DuelsPhotographyComponent } from './components/duels-photography/duels-photography.component'
import { DuelsModelingComponent } from './components/duels-modeling/duels-modeling.component'
import { RankingFirstComponent } from './components/ranking-first/ranking-first.component'
import { RankingListallComponent } from './components/ranking-listall/ranking-listall.component'
import { RankingIllustrationComponent } from './components/ranking-illustration/ranking-illustration.component';
import { RankingPhotographyComponent } from './components/ranking-photography/ranking-photography.component';
import { RankingModelingComponent } from './components/ranking-modeling/ranking-modeling.component'

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
    ChatComponent,
    ProfileLastvisitsComponent,
    ProfileGalleryComponent,
    ProfileDuelsComponent,
    ProfileCommentsComponent,
    DuelsIllustrationComponent,
    DuelsPhotographyComponent,
    DuelsModelingComponent,
    RankingFirstComponent,
    CapitalizePipe,
    RankingListallComponent,
    RankingIllustrationComponent,
    RankingPhotographyComponent,
    RankingModelingComponent
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
