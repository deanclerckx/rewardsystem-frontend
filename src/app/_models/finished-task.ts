export class FinishedTask {
    id: number;
    userKey: string;
    task: {
        name: string;
        points: number;
    };
    explanation: string;
    isApproved: boolean;
}
