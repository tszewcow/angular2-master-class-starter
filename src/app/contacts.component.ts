import { EventBusService } from './event-bus.service';
import { ContactsService } from './contacts.service';
import { Contact } from './models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit{

  title: string = 'Contacts';

  constructor(private eventBusService: EventBusService){}

  ngOnInit(){
    this.eventBusService.observe('appTitleChange').subscribe(title => this.title = title.data);
  }


}
