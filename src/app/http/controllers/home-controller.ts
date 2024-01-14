import Controller from "../../../system/decorators/route/controller";
import Get from "../../../system/decorators/route/get";

@Controller({ path: "" })
export default class HomeController {
  /**
   * @returns
   */
  @Get({ path: "" })
  public index() {
    return {
      foo: "foo",
      bar: "bar",
    };
  }
}
