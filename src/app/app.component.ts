import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSubscription = 'advanced';

  submitted = false;

  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    this.submitted = true;

    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.password;
  }
}
