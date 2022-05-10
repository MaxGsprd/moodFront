import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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
import { AuthRoutingModule } from './auth.routing.module';
import { InscriptionComponent } from './inscription/Inscription.component';
import { DialogLoginComponent } from 'src/app/layouts/auth/dialog-login/DialogLoginComponent';

@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent,
        InscriptionComponent,
        ForgotPasswordComponent,
        DialogLoginComponent
    ],
    imports: [  
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthRoutingModule,
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
export class AuthModule {
}