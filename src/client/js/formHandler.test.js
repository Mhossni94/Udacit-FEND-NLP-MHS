//npm install --save-dev jest
//add to Package.json
// {
//     "scripts": {
//       "test": "jest"
//     }
// }
//run npm run test

const handleSubmit = import('./handleSubmit');
test('test that UI changed', () => {
    expect(handleSubmit(event)).toBe(defined);
  });
