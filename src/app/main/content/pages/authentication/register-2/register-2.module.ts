import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseRegister2Component } from './register-2.component';

const routes = [
    {
        path     : 'auth/register-2',
        component: FuseRegister2Component
    }
];

@NgModule({
    declarations: [
        FuseRegister2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class Register2Module
{
}
