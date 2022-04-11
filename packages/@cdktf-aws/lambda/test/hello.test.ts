import { Foo } from '../src';

test('hello', () => {
  expect(new Foo().sayHello()).toBe('hello, world!');
});
