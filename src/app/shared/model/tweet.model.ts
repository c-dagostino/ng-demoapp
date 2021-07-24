export class Tweet {
    public id: number; 
    public fullText: string;
    public username: string; 
    public name: string;
    public createdAt: number;
    public sentiment: string; 

    
    constructor(id: number, fullText: string, username: string, name: string, createdAt: number, sentiment: string) {
        this.id = id;
        this.fullText = fullText;
        this.username = username;
        this.name = name;
        this.createdAt = createdAt;
        this.sentiment = sentiment;
    }
}