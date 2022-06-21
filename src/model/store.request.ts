
export class StoreRequest {
    Phone: number;
    Storename:string;
    Storetitle:string;
    Email:string;
    Backgroundimage:string;
    Category:string;
    address_detail:{
        country:string,
        State:string,
        Zip_Code:number,
        NearbyLocation:string,
        Street:string,
        Address1:string,
        Address2:string
    };
    Shippingtype:string;
    ShippingFeeDetails: number;
    bank_account_detail:{
        AccountHolderName:string,
        AccountType:string,
        AccountNumber:number,
        ReAccountNumber:number,
        IFSC_code:string,
    };
    tax_detail:{
        Legal_Name:string,
        GST_Number:number,
        PAN_Number:string,

    };
   
    Signature: string;
  }
  