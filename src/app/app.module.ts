import { EventBusService } from './event-bus.service';
import { APP_ROUTES } from './app.routes';
import { ContactsService } from './contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { ContactDetailsViewComponent } from './contact-details-view/contact-details-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactListComponent, ContactDetailsComponent, ContactEditorComponent, ContactDetailsViewComponent, TabComponent, TabsComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, EventBusService]
})
export class ContactsModule {

}
