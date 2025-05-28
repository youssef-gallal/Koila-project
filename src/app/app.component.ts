import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ResultPageComponent } from "./components/result-page/result-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
