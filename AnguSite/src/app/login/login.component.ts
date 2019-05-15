import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() change = new EventEmitter<boolean>();
  private logged = false;
  private username = '';
  private password = '';

  constructor(private provider: ProviderService) { }

  // auth() {
  //   if (this.username !== '' && this.password !== '') {
  //     this.provider.auth(this.username, this.password).then(res => {
  //       localStorage.setItem('token', res.token);
  //       this.logged = true;
  //       this.change.emit(this.logged);
  //     });
  //   }
  // }

  ngOnInit() {
  }

}
