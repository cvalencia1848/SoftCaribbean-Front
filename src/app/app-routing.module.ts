import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './SoftCaribbean/Pacientes/pacientes.component';
import { PacienteComponent } from './SoftCaribbean/Pacientes/paciente/paciente.component';
import { PacienteInformeComponent } from './SoftCaribbean/Pacientes/paciente-informe/paciente-informe.component';

const routes: Routes = [
    { path: 'pacientes', component: PacientesComponent },
    { path: 'pacientes/crear', component: PacienteComponent },
    { path: 'pacientes/editar/:id', component: PacienteComponent },
    { path: 'pacientesInforme', component: PacienteInformeComponent },
    { path: '**', redirectTo: 'pacientes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
