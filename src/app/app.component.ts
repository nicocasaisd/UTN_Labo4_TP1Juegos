import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-juego';

  constructor(private authS : AuthService){
    authS.register('nicolas.casais.dassie@gmail.com', 'asd123');
  }
}
