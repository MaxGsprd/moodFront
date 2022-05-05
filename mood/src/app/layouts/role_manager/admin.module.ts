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
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';
import { AdminEstablishmentComponent } from './admin-establishment/admin-establishment.component';
@NgModule({
    declarations: [
      AdminComponent,
      AdminCommentsComponent,
      AdminEstablishmentComponent
    ],
    imports: [  
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdminRoutingModule,
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
export class AdminModule {
}