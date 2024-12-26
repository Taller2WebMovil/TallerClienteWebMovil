import { Routes } from '@angular/router';

export const routes: Routes = [

    {
      path: 'home',
      pathMatch: 'full',
      loadComponent: () => import('./TallerClienteWeb/pages/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
      path: 'login',
      pathMatch: 'full',
      loadComponent: () => import('./TallerClienteWeb/pages/login-page/login-page.component').then(m => m.LoginPageComponent)
    },
    {
      path: 'register',
      pathMatch: 'full',
      loadComponent: () =>
        import('./TallerClienteWeb/pages/register-page/register-page.component').then(
          (m) => m.RegisterPageComponent
        ),
    },
    {
      path: 'productos',
      loadComponent: () =>
        import('./TallerClienteWeb/product/pages/products-page/products-page.component').then(
          (m) => m.ProductsPageComponent
        )
    },
    {
      path: 'usuarios',
      loadComponent: () =>
        import('./TallerClienteWeb/users/pages/users-page/users-page.component').then(
          (m) => m.UsersPageComponent
        )
    },
    {
      path: 'get-usuarios',
      loadComponent: () =>
        import('./TallerClienteWeb/users/pages/get-users-page/get-users-page.component').then(
          (m) => m.GetUsersPageComponent
        )
    },
    {
      path: 'post-usuarios',
      loadComponent: () =>
        import('./TallerClienteWeb/users/pages/post-users-page/post-users-page.component').then(
          (m) => m.PostUsersPageComponent
        )
    },
    {
      path: 'put-usuarios',
      loadComponent: () =>
        import('./TallerClienteWeb/users/pages/put-users-page/put-users-page.component').then(
          (m) => m.PutUsersPageComponent
        )
    },
    {
      path: 'delete-usuarios',
      loadComponent: () =>
        import('./TallerClienteWeb/users/pages/delete-users-page/delete-users-page.component').then(
          (m) => m.DeleteUsersPageComponent
        )
    },
    {
      path: 'boletas',
      loadComponent: () =>
        import('./TallerClienteWeb/bills/pages/bills-page/bills-page.component').then(
          (m) => m.BillsPageComponent
        )
    },
    {
      path: 'ventas',
      loadComponent: () =>
        import('./TallerClienteWeb/sales/pages/sales-page/sales-page.component').then(
          (m) => m.SalesPageComponent
        )
    },
    {
      path: 'main',
      pathMatch: 'full',
      loadComponent: () =>
        import('./TallerClienteWeb/pages/main-page/main-page.component').then(
          (m) => m.MainPageComponent
        )
    },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }
];
