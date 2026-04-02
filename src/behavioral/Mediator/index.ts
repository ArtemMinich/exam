export { Mediator } from "./Mediator";
export { Colleague } from "./Colleague";
export { ChatRoom } from "./ChatRoom";
export { User } from "./User";

// --- Демонстрація реалізації патерну Mediator ---

import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

const chatRoom = new ChatRoom();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

console.log("\n--- Broadcast повідомлення ---");
alice.send("Привіт всім!");

console.log("\n--- Приватне повідомлення ---");
bob.sendPrivate("Alice", "Як справи?");

console.log("\n--- Ще одне broadcast повідомлення ---");
charlie.send("Доброго ранку!");
