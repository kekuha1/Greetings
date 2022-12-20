import { JavaScriptGreeter } from "./JavaScriptGreeter";

describe("JavaScript_greeter and name tests", () => {
  test("greeting with default parameter", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Brian")).toBe("console.log(\'Hello, Brian!\')");
  });

  test("Hello Brian = console.log name", () => {
    const greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Brian")).toBe("console.log(\'Hello, Brian!\')");
  });
});
