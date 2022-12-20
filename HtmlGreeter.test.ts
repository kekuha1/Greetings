import { HtmlGreeter} from "./HtmlGreeter"

describe ("Html Greeter Test", () => {
test ("Hello and Brian is <h1>Hello,Brian</h1>", ()=> {
    let newHtmlGreeter = new HtmlGreeter ("Hello", "h1");
    expect(newHtmlGreeter.greet("Brian")).toBe("<h1>Hello, Brian!</h1>");

});
test('greeter with custom parameter h3', () => {
    const greeter = new HtmlGreeter('Hello', "h3");
    expect(greeter.greet('Brian')).toBe('<h3>Hello, Brian!</h3>');
});

test ("Hello and Default", ()=> {
    let newHtmlGreeter = new HtmlGreeter ("Hello");
    expect(newHtmlGreeter.greet("Brian")).toBe("<h1>Hello, Brian!</h1>");

});

})
