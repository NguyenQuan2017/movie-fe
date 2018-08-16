import { Component, OnInit } from '@angular/core';
import {AuthenticatedService} from '../../services/authenticated.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  public user: any = {
      first_name: null,
      avatar: null,
  };
  constructor(private auth: AuthenticatedService) { }

  ngOnInit() {
    return this.auth.getMe().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    return this.auth.logout();
  }
}
