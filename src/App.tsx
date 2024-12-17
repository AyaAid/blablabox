import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import Home from "@views/Home";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      credentials: true,
      origin: true,
    },
  });

  const config = new DocumentBuilder().setTitle("Discord server").build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("doc", app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets("public");
  await app.listen(3000);
}
bootstrap();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
