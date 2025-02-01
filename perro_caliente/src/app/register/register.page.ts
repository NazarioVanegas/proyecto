import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: any;
  formErrors = {
    email: [
      { type: 'required', message: 'El correo es obligatorio' },
      { type: 'email', message: 'El correo no es valido' }
    ]
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      user: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password_confirmation: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  ngOnInit() {
  }

  registerUser(registerData: any){
    console.log('Datos recibidos en el servicio:', registerData);
    this.authService.register(registerData).then(res => {
      console.log(res);
      this.errorMessage = '';
      this.navCtrl.navigateForward('/login');
    }).catch(err => {
      console.log(err);
      this.errorMessage = err;
    });
  }
  home(){
    this.navCtrl.navigateForward('/menu/home');
  }

}