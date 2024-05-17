"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: '*',
        });
        await app.listen(8888);
        console.log('Application started on port 8888');
    }
    catch (error) {
        console.error('Error starting application:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map