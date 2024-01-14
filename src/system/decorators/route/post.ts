import logger from "../../utils/logger";

export type PostProps = {
  path: string;
};

export default function Post(props: PostProps): MethodDecorator {
  logger.log(">> POST props", props);

  return (target, propertyKey, descriptor) => {
    logger.log("POST inline function");
    logger.log(target, propertyKey, descriptor);
  };
}
