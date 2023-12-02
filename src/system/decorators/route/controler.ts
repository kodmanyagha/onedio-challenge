export type ControllerProps = {
  path: string;
};

export default function Controller(props: ControllerProps): ClassDecorator {
  console.log(">> Controller props", props);

  return (target) => {
    console.log(">> Controller inline function", target);
  };
}
