import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { NavComponent } from './shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
}
/*standalone vuelve a un componente independiente */