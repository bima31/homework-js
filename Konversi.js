class Konversi {
  constructor() {
    console.log("konversi");
}
  static fromCelcius(to, input) {
    if (to === "cel") return input;
    if (to === "rea") return (4 / 5) * input;
    if (to === "far") return (9 / 5) * input + 32;
  }
  static fromReamur(to, input) {
    if (to === "rea") return input;
    if (to === "cel") return (5 / 4) * input;
    if (to === "far") return (9 / 4) * input + 32;

  }
  static fromFarenheit(to, input) {
    if (to === "far") return input;
    if (to === "cel") return (5 / 9) * (input - 32);
    if (to === "rea") return (4 / 9) * (input - 32);

  }
}

exports.fromCelcius = (to, input) => {
  return Konversi.fromCelcius(to, input);
};
exports.fromReamur = (to, input) => {
  return Konversi.fromReamur(to, input);
};
exports.fromFarenheit = (to, input) => {
  return Konversi.fromFarenheit(to, input);
};
