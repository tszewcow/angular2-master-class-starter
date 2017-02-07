import { EventBusService } from './../event-bus.service';
import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trm-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.css']
})
export class ContactEditorComponent implements OnInit {

  title: string = 'edit contacts';
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router, private eventBusService: EventBusService) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe((contact) => {
      this.contact = contact
    });

    this.eventBusService.emit('appTitleChange', 'Edit contact');
  }

  save(contact: Contact): void{
    this.contactsService.update(contact).subscribe((res) => {
      if (res === 200){
        this.router.navigate(['/contact-details', contact.id]);
      }
    })
  }

  cancel(contact: Contact): void{
    this.router.navigate(['/contact-details', contact.id]);
  }

}
