const {fromCelcius, fromReamur,  fromFarenheit} = require("./Konversi");

test("test cel to rea", () => {
  expect(fromCelcius('rea',1)).toBe(0.8);
  expect(fromReamur('cel',1)).toBe(1.25);
  expect(fromFarenheit('cel',32)).toBe(0);
});
