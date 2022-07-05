//import all contrllers in here
//import ExampleController from "Models/Example/ExampleController";
import App from "./app";

const app = new App(
  [
    //new ExampleController() initializes all controllers
  ],
  10000
);

app.listen();
