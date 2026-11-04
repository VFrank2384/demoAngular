
import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactivo/form-reactivo';

export const routes: Routes = [
    {
    path: 'formplantilla',
    component: FormPlantilla,
    title: 'Formulario basado en plantilla',
    },
    {
    path: 'formreactivo',
    component: FormReactivo,
    title: 'Formulario reactivo',
    }
];
