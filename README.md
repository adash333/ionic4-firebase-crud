# ionic4-firebase-crud

このページは、[Ionicで作る モバイルアプリ制作入門 Web/iPhone/Android対応](https://amzn.to/2miPTb9)のCHAPTER03のTODOアプリを参考に、ionic4アプリ作成の練習を行っているものです。


src/environments/environment.ts は、ご自身のfirebaseのAPIキーその他をコピペしてください。

```javascript:environment.ts
// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

## インストール方法


`git clone https://github.com/adash333/ionic4-firebase-crud.git`

modify "src/environments/environment.ts"

Run `npm install`to install all dependencies.

Run `ionic serve`to start the development environment.


作成経過は以下に記載しています。

http://twosquirrel.mints.ne.jp/?p=26674


## 開発環境

```
Windows 8.1 Pro
VisualStudioCode
git version 2.16.1.windows.4
Sourcetree Version 2.4.8.0
Android Studio 3.0.1

Node v8.11.2
npm 6.1.0
Ionic (Ionic CLI) 4.0.1
Ionic Framework @ionic/angular 4.0.0-beta.0

firebase@5.3.0
angularfire2@5.0.0-rc.11
```
