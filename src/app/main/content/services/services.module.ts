import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseConfigServiceDocsComponent } from './config/config.component';
import { FuseSplashScreenServiceDocsComponent } from './splash-screen/splash-screen.component';

const routes = [
    {
        path     : 'config',
        component: FuseConfigServiceDocsComponent
    },
    {
        path     : 'splash-screen',
        component: FuseSplashScreenServiceDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseConfigServiceDocsComponent,
        FuseSplashScreenServiceDocsComponent
    ]
})

export class FuseServicesModule
{
}
