import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class User extends Colleague {
  constructor(name: string, mediator: Mediator) {
    super(name, mediator);
  }

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.notify(this, "message", message);
  }

  sendPrivate(recipientName: string, message: string): void {
    console.log(`${this.name} sends PM to ${recipientName}: ${message}`);
    this.mediator.notify(this, "private", `${recipientName}:${message}`);
  }

  receive(from: string, message: string): void {
    console.log(`${this.name} received from ${from}: ${message}`);
  }
}
