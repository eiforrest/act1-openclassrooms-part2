import { Injectable } from '@angular/core';

 @Injectable()
export class Post {
    private title: string;
    private content: string;
    private loveIts: number;
    private createdAt: Date;

    public getTitle(): string{
        return this.title;
    }
    public setTitle(title:string){
        this.title = title;
    }
    public getContent(): string {
        return this.content;
    }
    public setContent(content:string){
        this.content = content;
    }
    public getLoveIts():number {
        return this.loveIts;
    }
    public setLoveIts(loveIts: number) {
        this.loveIts = loveIts;
    }

    public getCreatedAt(){
        return this.createdAt;
    }
    public setCreatedAt(createdAt: Date){
        this.createdAt = createdAt;
    }

    constructor() {
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}