import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement,
  {
    loaders: {},
    props: {},
  }
);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    const auth: any = localStorage.getItem("auth");
    if (!auth) {
      if (
        name != "@monkeysmedia/login" &&
        name != "@monkeysmedia/register" &&
        name != "@monkeysmedia/not-found" &&
        name != "@monkeysmedia/globalStyles"
      ) {
        window.location.pathname = "/login/";
      }
    }
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
