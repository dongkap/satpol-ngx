import { Component, Input } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { User } from '@dongkap/do-core';

@Component({
  selector: 'do-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <do-header [user]="user" [extraMenu]="extraMenu"></do-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <do-footer></do-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class DefaultLayoutComponent {

  @Input('user') public user: User;
  @Input('extraMenu') public extraMenu: NbMenuItem[] = [];

}
