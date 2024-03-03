import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'user',
      password: 'pass1234',
      database: 'nestjs_db',
      entities: [User,Product],
      synchronize: true
    })
    ,
    UserModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
