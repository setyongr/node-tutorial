let a = "Tes";

module.exports = {
  key: "Val",
  date: new Date(),
  setA: (x) => {
    a = x;
  },
  getA: () => a
}