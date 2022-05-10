import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticateUser } from 'src/app/models/in/AuthenticateUser';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string | undefined;
  password: string | undefined;
  hide: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private fb: FormBuilder, 
    private authService: AuthService, 
    private dialog: MatDialogRef<DialogLoginComponent>
    ) {
      this.loginForm = this.fb.group({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      });
      this.hide = true;
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const authenticateUser = new AuthenticateUser(this.loginForm.value);

      this.authService.login(authenticateUser);

      this.dialog.close();

      this.loginForm.reset();

      console.log("form is valid");
    } else {
      console.log("form invalid");
      if (this.loginForm.controls['email'].invalid)
        this.email = "email obligatoire";
      if (this.loginForm.controls['password'].invalid)
        this.password = "password obligatoire";
    }
  }



}
