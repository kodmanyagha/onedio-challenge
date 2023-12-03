export type GetProps = {
  path: string;
};

export default function Get(props: GetProps): MethodDecorator {
  console.log(">> GET props", props);

  return (target, propertyKey, descriptor) => {
    console.log(
      ">> GET inline function params:",
      target,
      propertyKey,
      descriptor.value
    );
  };
}
