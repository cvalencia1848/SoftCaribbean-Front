import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  public sidebarItemsMaestras = [
    {label: 'Generos', icon: 'label', url: "./generos"},
    {label: 'Tipos de documentos', icon: 'label', url: "./tiposDocumento"},
    {label: 'Medicos tratantes', icon: 'label', url: "./medicosTratantes"}
  ];

  public sidebarItemsPacientes = [
    {label: 'Personas', icon: 'label', url: "./pacientes"},
    {label: 'Pacientes', icon: 'label', url: "./pacientesInforme"}
  ];


}
