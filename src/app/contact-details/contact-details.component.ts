import { Contact } from './../models/contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'trm-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe((contact) => {
      this.contact = contact
    }
    );
  }

  goBack(): void {
    this.router.navigate(['/contact-list']);
  }

}
