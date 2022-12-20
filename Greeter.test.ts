import {Greeter} from './Greeter'

describe ("greeter test", () =>{
test("greeter greeting", () => {
const test = new Greeter ("Hey");

expect(test.greet("Brian")).toBe("Hey, Brian!")
})
})