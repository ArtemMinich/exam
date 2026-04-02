import { Mediator } from "./Mediator";
import { Colleague } from "./Colleague";
import { User } from "./User";

export class ChatRoom implements Mediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    user.setMediator(this);
    console.log(`[ChatRoom] ${user.name} joined the room.`);
  }

  notify(sender: Colleague, event: string, data?: string): void {
    switch (event) {
      case "message":
        this.users
          .filter((u) => u !== sender)
          .forEach((u) => u.receive(sender.name, data ?? ""));
        break;

      case "private":
        const [recipientName, ...msgParts] = (data ?? "").split(":");
        const recipient = this.users.find((u) => u.name === recipientName);
        if (recipient) {
          recipient.receive(`[PM from ${sender.name}]`, msgParts.join(":"));
        } else {
          console.log(`[ChatRoom] User "${recipientName}" not found.`);
        }
        break;

      default:
        console.log(`[ChatRoom] Unknown event: ${event}`);
    }
  }
}
