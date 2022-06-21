import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './module/store.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nexGen:1234@cluster0.akayt.mongodb.net/?retryWrites=true&w=majority'),
    StoreModule,
  ],
})
export class AppModule {}
