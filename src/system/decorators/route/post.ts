export type PostProps = {
  path: string;
};

export default function Post(props: PostProps): MethodDecorator {
  console.log(">> POST props", props);

  return (target, propertyKey, descriptor) => {
    console.log("POST inline function");
    console.log(target, propertyKey, descriptor);
  };
}
