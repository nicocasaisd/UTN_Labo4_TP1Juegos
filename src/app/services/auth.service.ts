import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public userCredentials : any = null;
  public isUserLogged : boolean = true;

  currentUser : User | undefined ;
  
  
  constructor(private authF : AngularFireAuth) { 
    
  }


  async register(email : string, pass : string){
    const respuesta = await this.authF.createUserWithEmailAndPassword(email, pass);
    this.userCredentials = respuesta.user;
    console.log(this.userCredentials);
  }

  async login(email:string, pass:string){
    // Firebase
    const respuesta = await this.authF.signInWithEmailAndPassword(email, pass);
    // Asigno a mis atributos
    this.userCredentials = respuesta.user;
    this.currentUser = new User(this.userCredentials.uid, email);
    console.log(this.currentUser);
  }
}
