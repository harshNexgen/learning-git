import { Body, Controller, Get, Post,Param } from "@nestjs/common";
import { StoreService } from '../service/store.service';
import { Store, StoreDocument } from "../repository/store.entity";
import { StoreRequest } from '../model/store.request';

@Controller('store')
export class StoreController {
  constructor(private readonly appService: StoreService) {}

//// Getting Add Store Information

  @Post("/addStore")
  async addStore(@Body() storeRequest:StoreRequest):Promise<Store>{
    return await this.appService.saveStores(storeRequest);
  }

//// Getting all stores information

  @Get("/getAllStores")
  async getAllStore(){
    return this.appService.getStores();
  }
//// Store Name Verification
  @Get(":storeName")
  verifyName(@Param("storeName") sName:string){
      return this.appService.StoreNameVerify(sName);
  }

/// Particular Store information 

}
