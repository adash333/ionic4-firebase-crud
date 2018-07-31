import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActionSheetController, AlertController } from '@ionic/angular';


import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  customers: any;

  constructor(
    private customerService: CustomerService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getCutomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll();
  }

  
  async changeCustomer(index: number, key: string) {
    const actionSheet = await this.actionSheetController.create({
      header: "Customerの変更",
      buttons: [{
        text: '削除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.customerService.deleteCustomer(key);
        }
      }, {
        text: '変更',
        icon: 'open',
        handler: () => {
          console.log('Edit clicked');
          this._editCustomer(index, key);
        }
      }, {
        text: '閉じる',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async _editCustomer(index: number, key: string) {
    const alert = await this.alertController.create({
      header: '変更後のCustomer',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: '名前',
          value: this.customers[index].name
        },
        {
          name: 'age',
          type: 'number',
          placeholder: '年齢',
          value: this.customers[index].age
        }
      ],
      buttons: [
        {
          text: '閉じる',
        }, {
          text: '保存',
          handler: data => {
            // タスクのindex番目を書き換え
            this.customers[index] = { name: data.name, age: data.age};
            // Firebaseに保存
            this.customerService.updateCustomer(key, {
              name: this.customers[index].name,
              age: this.customers[index].age
            });
        }
      ]
    });

    await alert.present();
  }

}
