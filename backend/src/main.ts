import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(){ try {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(8888);
  console.log('Application started on port 8888');
} catch (error) {
  console.error('Error starting application:', error);
}
}
bootstrap();
// 1.学习nestjs，并使用nestjs重写上周的expressjs功能（后端进行查询搜索返回数据）
//
// 2.了解数据库，了解一下sql
//
// 3. 增加功能：如果搜索了色情关键字，nextjs返回错误和错误提示，并且在前端展示信息
//
// 4. 增加功能：使用nextjs真正实现前端的搜索历史功能
//
// 5. 增加功能，接口的返回添加一个随机延迟，1-5秒，前端需要有加载状态
