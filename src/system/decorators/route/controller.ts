import logger from "../../utils/logger";

export type ControllerProps = {
  // This will be our class' base route.
  path: string;
};

export default function Controller(props: ControllerProps): ClassDecorator {
  logger.log(">> Controller props", props);

  return (target) => {
    logger.log(">> Controller inline function", target);

    return target;
  };
}
