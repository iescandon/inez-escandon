import { ToastService } from './../../services/toast.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myForm') formValues;
  contactForm = this.fb.group({
    name: [''],
    email: [''],
    subject: [''],
    message: [''],
  });

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.contactService.postMessage(this.contactForm.value);
    this.formValues.resetForm();
    this.toastService.show('Successfully submitted form!');
    // this.toastService.show('I am a success toast', {
    //   classname: 'bg-success text-light',
    //   delay: 10000,
    // });
  }
}
