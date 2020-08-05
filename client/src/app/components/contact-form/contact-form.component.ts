import { Message } from './../../models/message';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    name: [''],
    email: [''],
    subject: [''],
    message: [''],
  });

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.contactService.postMessage(this.contactForm.value);
    console.warn(this.contactForm.value);
  }
}
