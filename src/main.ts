import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Título de tu API')
        .setDescription('Descripción de tu API')
        .setVersion('1.0')
        .addTag('tags') // Puedes agregar etiquetas para organizar tus endpoints
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // 'api' es la ruta donde se servirá la documentación

    await app.listen(3000);
}
bootstrap();
