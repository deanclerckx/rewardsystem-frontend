export class Order {
    id: String;
    reward: {
        name: String;
        points: Number;
    };
    userKey: String;
    date: Date;
    isProcessed: Boolean;
    userName: String;
}
