import { Injectable } from "@nestjs/common";
import { Store, StoreDocument } from "../repository/store.entity";
import { StoreRequest } from "src/model/store.request";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class StoreService {

  constructor(@InjectModel(Store.name) private storeDocumentModel: Model<Store>) {
  }

  async saveStores(storeRequest:StoreRequest):Promise<Store>{
    const found = await this.storeDocumentModel.findOne({Storename:storeRequest.Storename});
    console.log(found);
    if(found){
        throw new Error ("Store name already taken"); 
    }else{
        const storeDatas = new this.storeDocumentModel(storeRequest);
        return await storeDatas.save();
    }
  }
/// Function for Getting Stores information
  async getStores(){
    const Store = await this.storeDocumentModel.find().exec();
    return Store as Store[];
  }

/// Store Name Verification

  async StoreNameVerify(Storename: string) {
    const data = await this.storeDocumentModel.findOne({ Storename: Storename });
    if (data) {
        return { Alert: "Store Name Already Used" }
    }
    else {
        return { Alert: "Store name not used !" }
    }
}
}
