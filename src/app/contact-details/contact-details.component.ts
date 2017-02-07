import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'trm-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent  {

  @Input()
  contact: Contact;

  @Output()
  back = new EventEmitter<any>();

  @Output()
  edit = new EventEmitter<Contact>();

  goBack(): void{
    this.back.emit();
  }

  goEdit(): void {
    this.edit.emit(this.contact);
  }
  
}
