import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(
            (m) => m.HomeComponent)
    },
    // {
    //     path: 'login',
    //     loadComponent: () => import('./components/auth/login/login.component').then(
    //         (m) => m.LoginComponent)
    // },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(
            (m) => m.AboutComponent)
    },
    {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.routes').then(
            (m) => m.routes)
    },
    {
        path: '**',
        loadComponent: () => import('./components/error/error.component').then(
            (m) => m.ErrorComponent)
    },
    
];
