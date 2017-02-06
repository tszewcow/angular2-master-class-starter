import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    // this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
    this.contacts = this.contactsService.getContacts();
  }

  trackByFn(index, item) {
    return item.id;
  }

  showDetails(id: string): void {
    this.router.navigate(['/contact-details', id]);
  }

}
