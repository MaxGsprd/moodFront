import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/global';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { DialogLoginComponent } from "../dialog-login/DialogLoginComponent";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private _global: Globals
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.loggedIn;
  }

  openDialogLogin() {
    let dialogRef = this.dialog.open(DialogLoginComponent, {
      height: '450px',
      width: '600px',
    });
  }
  
  // Naviguer vers la home user ou canteen
  onNavigateHome(): void {
    this.router.navigate(['/']);
  }
  
  // Permet de se déconnecter et renvoie vers la home
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  // Vérifie si un utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.tokenService.getToken();
  }


}

