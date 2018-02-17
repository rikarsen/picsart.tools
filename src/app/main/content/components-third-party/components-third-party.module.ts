import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseNgxDatatableComponent } from './datatable/ngx-datatable.component';
import { GoogleMapsModule } from './google-maps/google-maps.module';

const routes = [
    {
        path     : 'datatables/ngx-datatable',
        component: FuseNgxDatatableComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        GoogleMapsModule
    ],
    declarations: [
        FuseNgxDatatableComponent
    ]
})
export class FuseComponentsThirdPartyModule
{
}
