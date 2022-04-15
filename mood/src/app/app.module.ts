import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MATERIAL'S MODULES
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InscriptionComponent } from './layouts/inscription/inscription.component';
import { LoginComponent } from './layouts/login/login.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { EstablishmentDetailsComponent } from './layouts/establishment-details/establishment-details.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { GroupsComponent } from './layouts/groups/groups.component';
import { GroupDetailsComponent } from './layouts/group-details/group-details.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminEstablishmentComponent } from './layouts/admin-establishment/admin-establishment.component';
import { AdminCommentsComponent } from './layouts/admin-comments/admin-comments.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EstablishmentCarouselComponent } from './components/establishment-carousel/establishment-carousel.component';
import { EstablishmentCommentsComponent } from './layouts/establishment-comments/establishment-comments.component';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { InvitationsEvenementComponent } from './components/invitations-evenement/invitations-evenement.component';
import { DialogUpdateCommentComponent } from './components/dialog-update-comment/dialog-update-comment.component';
import { NewEstablishmentComponent } from './layouts/new-establishment/new-establishment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { Globals } from './global';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    LoginComponent,
    HomepageComponent,
    ForgotPasswordComponent,
    EstablishmentDetailsComponent,
    ProfileComponent,
    GroupsComponent,
    GroupDetailsComponent,
    AdminComponent,
    AdminEstablishmentComponent,
    AdminCommentsComponent,
    CarouselComponent,
    EstablishmentCarouselComponent,
    EstablishmentCommentsComponent,
    InvitationsComponent,
    InvitationsEvenementComponent,
    DialogUpdateCommentComponent,
    NewEstablishmentComponent,
    DialogLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MATERIAL'S MODULES
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
