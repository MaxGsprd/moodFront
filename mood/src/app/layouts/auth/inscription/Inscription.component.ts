import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public readonly MOOD_BEER: number = 1;
  public readonly MOOD_PARTY: number = 2;
  public readonly MOOD_CHILL: number = 3;


  inscriptionForm: FormGroup;

  forminscription: any;

  name: string | undefined;
  firstname: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  sex: string | undefined;
  localisationForm: string | undefined;
  phone: string | undefined;
  addressNumber: string | undefined;
  addressName: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  mood: string | undefined;

  fileName: string | undefined;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
    ) {
    this.inscriptionForm = this.fb.group({
      firstname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      localisationForm: new FormGroup({
        addressNumber: new FormControl(''),
        addressName: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      mood: new FormControl(''),
      //registrationDate: new Date('YYYY-mm-dd'),
      //status: new FormControl(1)
    });
  }

  ngOnInit(): void {
    
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        console.log(formData);

    }
  }
    /**
   * Filter establishments on Mood butttons click.
   * @param  {number} moodCategoryId establishment category Id
   */
     onMoodClick(moodCategoryId: number) {
      console.log(moodCategoryId);
      this.mood = String(moodCategoryId)
    }

  createUser() {
    if (this.inscriptionForm.valid) {
      this.forminscription = this.inscriptionForm.value;
      console.log(this.forminscription);

      
     this.authService.register(this.inscriptionForm.value)
        .subscribe(
          (rest: any) => {
            console.log(rest);
          }
        );
      //this.inscriptionForm.reset();
      console.log("form is valid");
    }
    else {
      console.log("error");
      if (this.inscriptionForm.controls['name'].invalid) {

        this.name = "Le prénom est obligatoire";
      }
      if (this.inscriptionForm.controls['firstname'].invalid) {

        this.firstname = "Le nom est obligatoire";
      }
      if (this.inscriptionForm.controls['sex'].invalid) {

        this.sex = "Veuillez choisir votre sexe";
      }
      if (this.inscriptionForm.controls['phone'].invalid) {

        this.phone = "Votre numéro est obligatoire et doit comporter 10 ou 12 chiffres";
      }
      if (this.inscriptionForm.controls['email'].invalid) {

        this.email = "Veuillez rentrer une adresse email valide";
      }
      if (this.inscriptionForm.controls['password'].invalid) {

        this.password = "Votre mot de passe est obligatoire, doit comporter au moins 6  caractères";
      }
      if (this.inscriptionForm.controls['password'] != this.inscriptionForm.controls['confirmPassword']) {

        this.password = "Vos mot de passe sont pas identique";
      }
    }
  }


}
