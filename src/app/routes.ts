import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routeConfig: Routes = [
    {
        path: './home',
        component: HomeComponent,
        title: 'HomePage'
    }
];

export default routeConfig;