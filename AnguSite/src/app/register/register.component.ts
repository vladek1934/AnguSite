import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() change = new EventEmitter();
  private isLogged = false;
  public username = '';
  public password1 = '';
  public email = '';
  public password2 = '';

  constructor(private router: Router, private provider: ProviderService) {
  }

  register() {
    if (this.username !== '' && this.password1 !== '' && this.email !== '' && this.password1 == this.password2) {
      this.provider.register(this.username, this.password1, this.email).then(res => {
        this.router.navigate(['/login']);
      });
    }
  }

  ngOnInit() {
  }

}
