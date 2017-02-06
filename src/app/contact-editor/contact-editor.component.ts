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

  contact: Contact = <Contact>{ address: {} };

  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe((contact) => {
      this.contact = contact
    }
    );
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
