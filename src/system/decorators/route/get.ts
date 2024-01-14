import logger from "../../utils/logger";

export type GetProps = {
  path: string;
};

export default function Get(props: GetProps): MethodDecorator {
  logger.log(">> GET props", props);

  return (target, propertyKey, descriptor) => {
    logger.log(
      ">> GET inline function params:",
      target,
      propertyKey,
      descriptor.value
    );
  };
}
