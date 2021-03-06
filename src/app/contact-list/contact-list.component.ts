import { EventBusService } from './../event-bus.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ContactsService } from './../contacts.service';
import { Contact } from './../models/contact';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/merge'


@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private term$ = new Subject<string>();
  contacts: Observable<Array<Contact>>;


  constructor(private contactsService: ContactsService, private router: Router, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    // this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
    // this.contacts = this.contactsService.getContacts();

    this.contacts = this.contactsService.search(this.term$, 400)
      .merge(this.contactsService.getContacts());

      this.eventBusService.emit('appTitleChange', 'Contacts');
  }

  trackByFn(index, item) {
    return item.id;
  }

  showDetails(id: string): void {
    this.router.navigate(['/contact-details', id]);
  }

  // search(term: string) {
  //   this.contacts = this.contactsService.search(term);
  // }

}
