import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  defaultSubscription = 'advanced';
  subscription = {
    email: '',
    subscription: '',
    password: '',
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.subscription.email = this.subscriptionForm.value.email;
    this.subscription.subscription = this.subscriptionForm.value.subscription;
    this.subscription.password = this.subscriptionForm.value.password;
    console.log(this.subscriptionForm.value);
    this.subscriptionForm.reset();
    this.subscriptionForm.form.patchValue({
      subscription: this.defaultSubscription,
    });
  }
}
