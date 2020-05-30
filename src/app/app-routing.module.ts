import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { LoginComponent } from './login/login/login.component';
import { PersonaComponent } from './persona/persona.component';
 
const routes: Routes = [
  {
    path: 'empleado',
  component: EmpleadoComponent
  }
  ,
  {
    path: 'empresa',
  component: EmpresaComponent
  }
  ,
  {
    path: 'app',
    component: LoginComponent
  }
  ,
  {
    path: 'persona',
  component: PersonaComponent
  }
  ,
  { path: '**', redirectTo: 'app' }
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }