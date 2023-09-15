import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no.auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'recipes',pathMatch:'full'},
  { path:'recipes',component:RecipesComponent, 
    canActivate:[AuthGuard], 
    children:[
      { path:'new',component:RecipesEditComponent },
      { path:':id',component:RecipeDetailComponent },
      { path:':id/edit',component:RecipesEditComponent },
    ]},
  { path:'shopping-list',component:ShoppingListComponent},
  { path:'auth',
    canActivate:[NoAuthGuard],
    component:AuthComponent
  },
  { path:'**',redirectTo:'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
