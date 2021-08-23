const {fromCelcius, fromReamur,  fromFarenheit} = require("./Konversi");

test("test cel to rea", () => {
  expect(fromCelcius('rea',1)).toBe(0.8);

});test("test far to cel", () => {;
  expect(fromFarenheit('cel',32)).toBe(0);

});test("test rea to cel", () => {
  expect(fromReamur('cel',1)).toBe(1.25);
});
