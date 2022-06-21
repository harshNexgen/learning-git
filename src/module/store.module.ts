import { Module } from '@nestjs/common';
import { StoreController } from 'src/controlers/store.controller';
import { StoreService } from '../service/store.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from '../repository/store.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
