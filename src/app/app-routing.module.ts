import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditComponent } from './edit/edit.component';
import { CorretoraComponent } from './corretora/corretora.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuarioComponent,
  },
  {
    path: 'usuario/edit/:id',
    component: EditComponent,
  },
  {
    path: 'corretoras',
    component: CorretoraComponent,
  },
  {
  path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
