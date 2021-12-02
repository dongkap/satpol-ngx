# satpol-ngx [![Actions Status](https://github.com/dongkap/satpol-ngx/workflows/Dongkap%20CI/badge.svg)](https://github.com/dongkap/satpol-ngx/actions)
Dongkap | Web Application with Angular

```

   __| |   ___    _ __     __ _  | | __   __ _   _ __  
  / _` |  / _ \  | '_ \   / _` | | |/ /  / _` | | '_ \ 
 | (_| | | (_) | | | | | | (_| | |   <  | (_| | | |_) |
  \__,_|  \___/  |_| |_|  \__, | |_|\_\  \__,_| | .__/ 
                          |___/                 |_|    

```

## Features
A big thank you to [Akveo team](https://www.akveo.com?utm_campaign=services%20-%20akveo%20website%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=from_developers_made_by) for their contribution in building [ngx-admin](https://github.com/akveo/ngx-admin) with full feature support. :thumbsup:

## Environment setup
Make sure following software is installed on your PC.
* [NodeJS 12](https://nodejs.org/en/download/) or later
* [Angular CLI 12](https://www.npmjs.com/package/@angular/cli)
* [NPM 6](https://www.npmjs.com/package/npm) or later
* [Visual Studio Code](https://code.visualstudio.com/download)


## Compile & Test
* __Development__

  ```
  $ npm install
  $ npm run start:do-app
  ```
  or
  ```
  $ npm install
  $ npm run install:do-core
  $ npm run install:do-theme
  $ npm run install:do-shared
  $ npm run install:do-auth
  $ npm run install:do-extra
  $ npm run install:do-sys
  $ npm run start:do-mock
  $ npm run start:do-app
  ```

## Code Scaffolding

- copy source from [akveo](https://github.com/akveo/ngx-admin)

### 1.	Generate Project
```sh
$ ng new satpol-ngx --create-application=false --routing=false --style=scss --skipGit=true --commit=false -S --newProjectRoot=@dongkap
```

### 2.	Generate Application
```sh
$ ng generate application do-mock --routing=true --prefix=ngx --style=scss
$ ng generate library do-core --prefix=do
$ ng generate library do-theme --prefix=do
$ ng generate library do-shared --prefix=do
$ ng generate library do-auth --prefix=do
$ ng generate library do-extra --prefix=do
$ ng generate application do-app --routing=true --prefix=do --style=scss
```

### 3.	Config Library @dongkap/do-core
- change name angular.json `projects.do-core` to `@dongkap/do-core`
- rename file *@dongkap/do-core/src/public-api.ts* to *index.ts*
- change name *@dongkap/do-core/ng-package.json* `src/public-api.ts` to `src/index.ts`
- change name *@dongkap/do-core/ng-package.json* `/dist/do-core` to `/dist/@dongkap/do-core`
- change name *@dongkap/do-core/package.json* at `"name": "do-core "` to `"name": "@dongkap/do-core"`
- adjust *tsconfig.lib.json*
- adjust *tsconfig.spec.json*
- create new file *@dongkap/do-core/src/lib/core.module.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/analytics.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/layout.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/seo.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/state.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/module-import-guard.ts* to *@dongkap/do-core/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/data/users.ts* to *@dongkap/do-core/src/lib/models/utils*

### 4.	Config Library @dongkap/do-theme
- change name angular.json `projects.do-theme` to `@dongkap/do-theme`
- rename file *@dongkap/do-theme/src/public-api.ts* to *index.ts*
- change name *@dongkap/do-theme/ng-package.json* `src/public-api.ts` to `src/index.ts`
- change name *@dongkap/do-theme/ng-package.json* `/dist/do-theme` to `/dist/@dongkap/do-theme`
- change name *@dongkap/do-theme/package.json* at `"name": "do-theme "` to `"name": "@dongkap/do-theme"`
- adjust *tsconfig.lib.json*
- adjust *tsconfig.spec.json*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/components* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/directives* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/layouts* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/pipes* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/styles* to *@dongkap/do-theme/src/lib*
- `mkdir @dongkap/do-theme/src/styles`
- copy `@dongkap/do-theme/src/lib/styles/*.scss` to `@dongkap/do-theme/src/styles`
- copy `opensans.css`, `fonts/*` from [master](https://github.com/ridlafadilah/do-ngx/tree/master/%40dongkap/do-theme/src/styles)
- change in *@dongkap/do-theme/src/styles/syles.scss*  `@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');` to `@import 'opensans.css';`
- delete `@dongkap/do-theme/src/lib/components/tiny-mce`
- adjust *do-theme.module.ts*
- change `@dongkap/do-theme/src/lib/layouts/*.scss` `@import '../../styles/themes';` to `@import '../../../styles/themes';`
- change `@dongkap/do-theme/src/lib/components/*.scss` `@import '../../styles/themes';` to `@import '../../../styles/themes';`
- delete in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/default';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/dark';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/cosmic';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/corporate';`
- delete *@dongkap/do-theme/src/lib/components/index.ts*
- delete *@dongkap/do-theme/src/lib/layouts/index.ts*
- delete *@dongkap/do-theme/src/lib/pipes/index.ts*
- change angular.json `src/app/@theme/styles/styles.scss` to `node_modules/@dongkap/do-theme/styles/styles.scss`
- add angular.json `node_modules/flag-icon-css/css/flag-icon.min.css`

### 5.	Restructure Template @dongkap/do-mock
- change name angular.json `projects.do-mock` to `@dongkap/do-mock`
- adjust *tsconfig.app.json*
- adjust *tsconfig.spec.json*
- `mkdir src/app/@mock`
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/data* to *@dongkap/do-mock/src/app/@mock/data*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/mock* to *@dongkap/do-mock/src/app/@mock/mock*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils* to *@dongkap/do-mock/src/app/@mock/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages* to *@dongkap/do-mock/src/app/@mock/pages*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages-menu.ts* to *@dongkap/do-mock/src/app/@mock/pages-menu.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages-routing.module.ts* to *@dongkap/do-mock/src/app/@mock/mock-routing.module.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.component.scss* to *@dongkap/do-mock/src/app/@mock/mock.component.scss*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.component.ts* to *@dongkap/do-mock/src/app/@mock/mock.component.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.module.ts* to *@dongkap/do-mock/src/app/@mock/mock.module.ts*
- delete *@dongkap/do-mock/src/app/@mock/data/users.ts*
- change `@dongkap/do-mock/src/lib/pages/dashboard/rooms/rooms.component.scss` `../../../../assets/images/square_pattern.svg';` to `/assets/images/square_pattern.svg`
- change `@dongkap/do-mock/src/lib/pages/dashboard/rooms/rooms.component.scss` `../../../../assets/images/square_pattern_cosmic.svg';` to `/assets/images/square_pattern_cosmic.svg`
- delete *src/app/@mock/pages/editors*
- remove routing and menu editors
