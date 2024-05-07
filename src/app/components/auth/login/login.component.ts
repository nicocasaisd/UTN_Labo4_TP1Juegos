import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  pass: string = '';

  //authS:AuthService ;

  constructor(public authS: AuthService) {
    this.authS = authS;
  }

  private auth = inject(AuthService);

  loginHandler() {
    console.log(this.email, this.pass);
    this.auth.login(this.email, this.pass);
  }

  registerHandler() {
    console.log(this.email, this.pass);
    this.auth.login(this.email, this.pass);
  }

  logoutHandler() {
    this.authS.isUserLogged = false;
    console.log("Logging out..");
  }
}
