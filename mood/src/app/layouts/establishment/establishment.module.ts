import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Globals } from 'src/app/global';
import { AppComponent } from 'src/app/app.component';
import { EstablishmentRoutingModule } from './establishment.routing.module';
import { EstablishmentDetailsComponent } from './establishment-details/establishment-details.component';
import { EstablishmentCommentsComponent } from './establishment-comments/establishment-comments.component';
import { NewEstablishmentComponent } from './new-establishment/new-establishment.component';
import { CommonModule } from '@angular/common'
import { EstablishmentDetailCardComponent } from './establishment-detail-card/establishment-detail-card.component';

@NgModule({
    declarations: [
      EstablishmentDetailsComponent,
      EstablishmentCommentsComponent,
      NewEstablishmentComponent,
      EstablishmentDetailCardComponent
    ],
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        EstablishmentRoutingModule,
        CommonModule,
        // MATERIAL'S MODULES
        MatToolbarModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
      ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ],
    providers: [
        Globals
      ],
      bootstrap: [AppComponent]
  })
export class EstablishmentModule {
}