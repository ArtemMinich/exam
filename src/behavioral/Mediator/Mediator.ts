import { Colleague } from "./Colleague";

export interface Mediator {
  notify(sender: Colleague, event: string, data?: string): void;
}
