import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { Footer } from '../footer/footer';
import { GoogleMap } from "../google-map/google-map";

@Component({
  selector: 'app-home',
  imports: [Navigation, Footer, GoogleMap],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
