export default interface DiContainerInterface {
  // TODO Add necessary methods here.

  set(key: string, val: any): Promise<void>;
  get(key: string): Promise<any>;
}
