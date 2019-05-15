import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() change = new EventEmitter();
  private isLogged = false;
  public username = '';
  public password = '';

  constructor(private router: Router, private provider: ProviderService) { }

  auth() {
    if (this.username !== '' && this.password !== '') {
      this.provider.auth(this.username, this.password).then(res => {
        localStorage.setItem('token', res.token);
        this.isLogged = true;
        this.provider.sendMessage.emit(this.isLogged);
        this.router.navigate(['']);
      });
    }
  }

  ngOnInit() {
  }

}
