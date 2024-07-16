/*
* Les dépendances sont importées ici. 
*/
import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" alt="Homes Logo" aria-hidden="true" />
      </header>
    </main>
    <!--la partie section contient app-home qui est le composant principal de l'application.-->
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.css'],
  /**imports sert à importer les composants qui seront utilisés dans le composant principal de l'application. */
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'homes';
}
