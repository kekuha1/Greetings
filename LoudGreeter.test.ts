import { LoudGreeter } from "./LoudGreeter";

describe("Loud Greeter tests", () => {
test("greet without addVolume", () =>{
    let greeter = new LoudGreeter("Hello")
    expect(greeter.greet("Brian")).toEqual("Hello, Brian!!");
});

test('greet after addVolume once', () => {
    let greeter = new LoudGreeter("Hello")
    greeter.addVolume();
    expect(greeter.greet("Brian")).toEqual("Hello, Brian!!!");
});
test("greet after calling addVolume multiple times",() => {
    let greeter = new LoudGreeter ('Hello')
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Brian")).toEqual("Hello, Brian!!!!!");
});

});