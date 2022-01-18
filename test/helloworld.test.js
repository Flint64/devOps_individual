import sayHello from '../utils/helloworld.test.mjs';
import assert from 'assert';

it ("Should say 'Hello there!'", () => {
    const hello = sayHello();

    assert.equal(hello, "Hello there!");
});

// it("Should say Hello there!", ()=> {
//     const hello = sayHellomp ();

//     assert(hello).toBe("Hello there!");
// });