import { NgModule } from '@angular/core';
import { SharedModule } from '../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseMainComponent } from './main.component';
import { FuseContentComponent } from './content/content.component';
import { FuseFooterComponent } from './footer/footer.component';
import { FuseNavbarComponent } from './navbar/navbar.component';
import { FuseToolbarComponent } from './toolbar/toolbar.component';
import { FuseNavigationModule } from '../core/components/navigation/navigation.module';
import { FuseNavbarToggleDirective } from './navbar/navbar-toggle.directive';
import { QuickPanelComponent } from './quick-panel/quick-panel.component';
import { FuseThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';
import { FuseShortcutsModule } from '../core/components/shortcuts/shortcuts.module';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseFooterComponent,
        FuseMainComponent,
        FuseNavbarComponent,
        FuseToolbarComponent,
        FuseNavbarToggleDirective,
        FuseThemeOptionsComponent,
        QuickPanelComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        FuseNavigationModule,
        FuseShortcutsModule
    ],
    exports     : [
        FuseMainComponent
    ]
})

export class FuseMainModule
{
}
