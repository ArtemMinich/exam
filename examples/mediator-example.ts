import { ChatRoom, User } from "../src/behavioral/Mediator";

const chatRoom = new ChatRoom();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

console.log("\n--- Broadcast message ---");
alice.send("Hello everyone!");

console.log("\n--- Private message ---");
bob.sendPrivate("Alice", "Hey, how are you?");

console.log("\n--- Another broadcast ---");
charlie.send("Good morning!");
