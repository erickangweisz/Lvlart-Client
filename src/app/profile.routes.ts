import { Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component'
import { ProfileViewComponent } from './components/profile-view/profile-view.component'
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component'
import { ProfileUploadimagesComponent } from './components/profile-uploadimages/profile-uploadimages.component'

export const ProfileRoutes: Routes = [
    {
        path: 'app-profile',
        component: ProfileComponent,
        children: [
            { path: 'view', component: ProfileViewComponent },
            { path: 'edit', component: ProfileEditComponent },
            { path: 'uploadimages', component: ProfileUploadimagesComponent }
        ]
    }
]