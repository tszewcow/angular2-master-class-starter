import { ContactDetailsViewComponent } from './contact-details-view/contact-details-view.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    {
        path: 'contact-list',
        component: ContactListComponent
    },
    {
        path: 'contact-details/:id',
        component: ContactDetailsViewComponent
    }, 
    {
        path: 'contact-details/:id/edit',
        component: ContactEditorComponent
    }, 
    {
        path: '',
        redirectTo: '/contact-list',
        pathMatch: 'full'
    }];