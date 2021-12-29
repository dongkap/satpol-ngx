import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { InventoryService } from '../services/inventory.service';
import { AssetModel } from '../models/asset.model';

@Component({
  selector: 'do-inventory-add-edit-page',
  styleUrls: ['./inventory-add-edit-page.component.scss'],
  templateUrl: './inventory-add-edit-page.component.html',
})
export class InventoryAddEditPageComponent extends BaseFormComponent<any> implements OnInit {

  public action: 'Add' | 'Edit' = 'Add';
  public apiSelectBusinessPartner: HttpBaseModel;
  public dataDefault: CheckboxModel[] = [
    {
      id: 'atOffice',
      name: 'At Office',
      selected: true,
    },
  ];
  public isAtOffice: boolean = true;
  constructor(
    public injector: Injector,
    private router: Router,
    private route: ActivatedRoute,
    private inventoryService: InventoryService) {
    super(injector,
      {
        assetName: [],
        assetCondition: [],
        quantity: [],
        description: [],
        atOffice: [],
        businessPartner: [],
      });
    if (this.inventoryService.getAsset() || (this.route.snapshot.params['action'] === 'add')) {
      this.apiSelectBusinessPartner = this.api['master']['select-business-partner'];
      if ((this.route.snapshot.params['action'] === 'edit')) {
        this.action = 'Edit';
        this.formGroup.get('assetName').setValue(this.inventoryService.getAsset().assetName);
        this.formGroup.get('assetCondition').setValue(this.inventoryService.getAsset().assetCondition);
        this.formGroup.get('quantity').setValue(this.inventoryService.getAsset().quantity);
        this.formGroup.get('description').setValue(this.inventoryService.getAsset().description);
        this.formGroup.get('atOffice').setValue([{
          id: 'atOffice',
          name: 'At Office',
          selected: this.inventoryService.getAsset().businessPartner ? false : true,
        }]);
        this.isAtOffice = this.inventoryService.getAsset().businessPartner ? false : true;
        if (!this.isAtOffice) {
          this.formGroup.get('businessPartner').setValue(this.inventoryService.getAsset()?.businessPartner['bpName']);
        }
      } else {
        this.formGroup.get('atOffice').setValue(this.dataDefault);
      }
    } else {
      this.router.navigate(['/app/mgmt/inventory']);
    }
  }

  ngOnInit(): void {}

  onReset(): void {
    this.router.navigate(['/app/mgmt/inventory']);
  }

  onCheckAtOffice(event: CheckboxModel[]): void {
    this.isAtOffice = event ? true : false;
  }

  onSubmit(): void {
    const atOffice: CheckboxModel[] = this.formGroup.get('atOffice').value;
    let businessPartner: any = null;
    if (!atOffice) {
      if (this.formGroup.get('businessPartner').value || this.inventoryService.getAsset()?.businessPartner) {
        businessPartner = {
          id: this.formGroup.get('businessPartner').value['value'] ?
                      this.formGroup.get('businessPartner').value['value'] : this.inventoryService.getAsset()?.businessPartner['id'],
          bpName: this.formGroup.get('businessPartner').value['label'] ?
                      this.formGroup.get('businessPartner').value['label'] : this.inventoryService.getAsset()?.businessPartner['bpName'],
        };
      }
    }
    const data: AssetModel = {
      id: this.inventoryService.getAsset()?.id,
      assetName: this.formGroup.get('assetName').value,
      assetCondition: this.formGroup.get('assetCondition').value,
      quantity: this.formGroup.get('quantity').value,
      description: this.formGroup.get('description').value,
      businessPartner,
    };
    (super.onSubmit(data, 'master', 'post-inventory')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
          this.router.navigate(['/app/mgmt/inventory']);
        }
      });
  }

}
