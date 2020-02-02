const checkForName = import('./checkForName');
test('test that name included results alert', () => {
    expect(checkForName("Picard")).toBe(alert("Welcome, Captain!"));
  });
