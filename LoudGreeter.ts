import {Greeter} from "./Greeter";
class LoudGreeter extends Greeter{
    private extra: string ="!!"
    greet(name: string): string {
        return `${this.greeting}, ${name}${this.extra}`
}
addVolume(): void{
    this.extra += "!"
}
    
}
export {LoudGreeter};