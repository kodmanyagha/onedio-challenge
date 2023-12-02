import Controller from "../../../system/decorators/route/controler";
import Get from "../../../system/decorators/route/get";

@Controller({ path: "about" })
export default class AboutUsController {
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

  /**
   * @returns
   */
  @Get({ path: "contact" })
  public contact() {
    return {
      foo: "foo",
      bar: "bar",
    };
  }
}
