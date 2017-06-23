import { ModuleWithProviders }         from '@angular/core'
import { Routes, RouterModule }        from '@angular/router'

import { HomeComponent }               from './components/home/home.component'
import { GalleryComponent }            from './components/gallery/gallery.component'
import { DuelsComponent }              from './components/duels/duels.component'
import { RankingComponent }            from './components/ranking/ranking.component'
import { SignupFormComponent }         from './components/signup-form/signup-form.component'
import { SigninFormComponent }         from './components/signin-form/signin-form.component'
import { ProfileComponent }            from './components/profile/profile.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'duels', component: DuelsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)