import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MATERIAL'S MODULES
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from "./layouts/homepage/Homepage.component";
import { EstablishmentDetailsComponent } from './layouts/establishment-details/establishment-details.component';
import { GroupsComponent } from './layouts/groups/groups.component';
import { GroupDetailsComponent } from './layouts/group-details/group-details.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AdminEstablishmentComponent } from './layouts/admin-establishment/admin-establishment.component';
import { AdminCommentsComponent } from './layouts/admin-comments/admin-comments.component';
import { EstablishmentCarouselComponent } from './components/establishment-carousel/establishment-carousel.component';
import { EstablishmentCommentsComponent } from './layouts/establishment-comments/establishment-comments.component';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { InvitationsEvenementComponent } from './components/invitations-evenement/invitations-evenement.component';
import { DialogUpdateCommentComponent } from './components/dialog-update-comment/dialog-update-comment.component';
import { NewEstablishmentComponent } from './layouts/new-establishment/new-establishment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Globals } from './global';
import { HttpInterceptors } from './_interceptor/http.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    EstablishmentDetailsComponent,
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
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    //angular bootstrap
    NgbModule,
  ],
  providers: [
    Globals,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
