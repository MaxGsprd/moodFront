import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL'S MODULES
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';


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
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    EstablishmentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MATERIAL'S MODULES
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    //angular bootstrap
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
