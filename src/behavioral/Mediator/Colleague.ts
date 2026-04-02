import { Mediator } from "./Mediator";

export abstract class Colleague {
  protected mediator: Mediator;
  public name: string;

  constructor(name: string, mediator: Mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
