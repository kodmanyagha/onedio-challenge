import Controller from "../../../system/decorators/route/controller";
import Get from "../../../system/decorators/route/get";
import logger from "../../../system/utils/logger";

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
    logger.info("AboutUs::contact() method invoked.");

    return {
      page: "about/contact",
      hello: "world",
    };
  }
}
