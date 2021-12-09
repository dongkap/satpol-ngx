import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import {
  AUTH_INDEXED_DB,
  USER_SERVICE,
  IndexedDBEncFactoryService,
  UserService,
  UserModel,
} from '@dongkap/do-core';

@Component({
  selector: 'do-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <do-layout
      [name]="name"
      [image]="image"
      [extraMenu]="extraMenu">
      <nb-menu [items]="menus"></nb-menu>
      <router-outlet></router-outlet>
    </do-layout>
  `,
})
export class PagesComponent implements OnInit, OnDestroy {

  public menus: NbMenuItem[] = [];
  public extraMenu: NbMenuItem[] = [];
  public name: string;
  public image: string;
  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    private translate: TranslateService,
    @Inject(USER_SERVICE) private userService: UserService,
    @Inject(AUTH_INDEXED_DB) private authIndexedDB: IndexedDBEncFactoryService) {
      this.setMenus();
      this.translate.onTranslationChange.pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.setMenus();
      });
  }

  ngOnInit() {
    this.setExtraMenu();
    this.translate.onTranslationChange.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.setExtraMenu();
    });
    this.userService.onUserChange.pipe(takeUntil(this.destroy$))
      .subscribe((user: UserModel) => {
        this.name = user.name;
        this.image = user.image;
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  setMenus() {
    this.authIndexedDB.getEnc('menus').then((value: string) => {
      this.menus = JSON.parse(value);
    });
  }

  setExtraMenu() {
    this.extraMenu = [];
    this.extraMenu.push({ title: '' });
    this.authIndexedDB.getEnc('extras').then((value: string) => {
      const extras: any[] = JSON.parse(value);
      if (extras) {
        extras.forEach(extra => {
          this.extraMenu.push({ title: extra.title, link : extra.link });
        });
      }
      this.translate.get('Logout').subscribe((result: string) => {
        this.extraMenu.push({ title: result, link : '/auth/logout' });
      });
      this.extraMenu.splice(0, 1);
    });
  }

}
