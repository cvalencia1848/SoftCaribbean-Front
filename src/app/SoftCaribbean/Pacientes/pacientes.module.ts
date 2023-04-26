import { RouterModule, Routes } from "@angular/router";
import { PacientesComponent } from "./pacientes.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { PacienteListaComponent } from './paciente-lista/paciente-lista.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from "@angular/common";
import { PacienteService } from "./Shared/paciente.service";
import { MatIconModule } from "@angular/material/icon";
import { PacienteComponent } from "./paciente/paciente.component";
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { PacienteInformeComponent } from "./paciente-informe/paciente-informe.component";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule
    ],
    declarations: [PacientesComponent, PacienteListaComponent, PacienteComponent, PacienteInformeComponent],
    providers: [ PacienteService],
    exports: [ RouterModule ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})
export class PacientesModule { }