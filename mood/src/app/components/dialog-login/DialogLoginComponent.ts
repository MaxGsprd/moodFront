import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/app/global';
import { AuthenticateUser } from 'src/app/models/in/AuthenticateUser';
import { UserDetails } from 'src/app/models/out/UserDetails';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string | undefined;
  password: string | undefined;
  hide: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private service: AuthService, private tokenService: TokenStorageService, private dialog: MatDialogRef<DialogLoginComponent>, private userService: UserService, private _global: Globals) {
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

      this.service.login(authenticateUser)
        .subscribe(
          (rest: any) => {
            // Sépare le token de l'id de l'utilisateur
            const result = rest.split(" ");
            this.tokenService.saveToken(result[0]);
            this.setGlobalUser(result[1]);

            this.dialog.close();
          }
        );
      this.loginForm.reset();
      //setTimeout(() => console.log(this.tokenService.getUser().user.id), 5000)
      console.log("form is valid");
    } else {
      console.log("form invalid");
      if (this.loginForm.controls['email'].invalid)
        this.email = "email obligatoire";
      if (this.loginForm.controls['password'].invalid)
        this.password = "password obligatoire";
    }
  }

  setGlobalUser(id: Number) {
    this.userService.getUser(id).subscribe(
      (rest: UserDetails) => {
        const globalUser = new UserDetails;
        globalUser.birthDate = rest.birthDate;
        globalUser.category = rest.category;
        globalUser.email = rest.email;
        globalUser.firstname = rest.firstname;
        globalUser.name = rest.name;
        globalUser.phone = rest.phone;
        globalUser.role = rest.role;
        // GROUPS
        globalUser.groups = rest.groups;
        // LOCALISATION
        globalUser.localisation = rest.localisation;

        this._global.user = globalUser;

      }
    );
  }

}
