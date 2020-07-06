import { main } from '../src'

test("should run test", () => {
    main();
})

test("should return 1", () => {
    const ans = main();
    expect(ans).toBe(1);
})