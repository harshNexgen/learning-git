import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StoreDocument = Store & Document;

  //// For Address
@Schema()
class Address{
  @Prop({type:String,required:true})
  country:string;
  @Prop({type:String,required:true})
  State:string;
  @Prop({type:Number,required:true})
  Zip_Code:number;
  @Prop({type:String,required:true})
  NearbyLocation:string;
  @Prop({type:String,required:true})
  Street:string;
  @Prop({type:String,required:true})
  Address1:string;
  @Prop({type:String,required:true})
  Address2:string;

  
}


/// Bank Account Details
@Schema()
class BankAccountDetails{
  @Prop({type:String,required:true})
  AccountHolderName:string;
  @Prop({type:String,required:true})
  AccountType:string;
  @Prop({type:Number,required:true})
  AccountNumber:number;
  @Prop({type:Number,required:true})
  ReAccountNumber:number;
  @Prop({type:String,required:true})
  IFSC_code:string;
}

//// Tax Details
@Schema()
class TaxDetail{
  @Prop({type:String,required:true})
  Legal_Name:string;
  @Prop({type:Number,required:true})
  GST_Number:number;
  @Prop({type:String,required:true})
  PAN_Number:string;
}


@Schema()
export class Store {

  @Prop({ required: true})
  Phone: number;

  @Prop({ required: true})
  Storename: string;
  
  @Prop({ required: true})
  Storetitle: string;
  
  @Prop({ required: true})
  Email: string;
  
  @Prop({ required: true})
  Backgroundimage: string;

  
  @Prop({ required: true})
  Category: string;


  @Prop({type:Address,required:true})
  address_detail:Address;
  
   @Prop({ required: true})
  Shippingtype: string;
  @Prop({ required: true})
  ShippingFeeDetails: number;
 
  @Prop({type:BankAccountDetails, required: true})
  bank_account_detail:BankAccountDetails;
  
  @Prop({type:TaxDetail, required: true})
  tax_detail:TaxDetail; 
  @Prop({ required: true})
  Signature: string;

  @Prop({ required: true})
  message:string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
