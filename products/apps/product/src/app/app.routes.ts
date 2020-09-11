export const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', loadChildren: () => import('@products/shared/product-list').then((m) => m.SharedProductListModule) },
  { path: 'addProduct/:id', loadChildren: () => import('@products/shared/add-product').then((m) => m.SharedAddProductModule) }
];