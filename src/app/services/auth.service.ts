import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authF : AngularFireAuth) { }

  userCredentials : any = null;

  async register(mail : string, pass : string){
    const respuesta = await this.authF.createUserWithEmailAndPassword(mail, pass);
    this.userCredentials = respuesta.user;

    console.log(this.userCredentials);
    
  }
}
