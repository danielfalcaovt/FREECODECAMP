import os from "os";

const user = os.userInfo();
console.log(`Hello ${user.username}`);
console.log(`Sorry, for that, but its too late! your computer is on for exactly ${os.uptime()} seconds... maybe weak? can i hack it ? i can't`);