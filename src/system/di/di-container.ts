import DiContainerInterface from "./di-container-interface";

export default class DiContainer implements DiContainerInterface {
  private services: Record<string, any>;

  constructor() {
    this.services = {};
  }

  // TODO Add necessary methods here.
  async set(key: string, val: any) {
    this.services[key] = val;
  }

  async get(key: string) {
    return this.services[key];
  }
}
