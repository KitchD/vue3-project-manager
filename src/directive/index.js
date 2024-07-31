import visibility from "./common/visibility";
import HoverBlur from "./common/hover-blur";
export default function directive(app) {
  app.directive("visibility", visibility);
  app.directive("hover-blur", HoverBlur);
}
