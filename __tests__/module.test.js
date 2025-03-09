const person = require('../module.js');
describe("Singleton Function", () => {
  const me = new person("ae7", 36);
  const bis = new person("ae10", 37);
  test("object equality", () => {
    expect(me).toBe(bis)
    expect(me.name).toEqual(bis.name)
  });
  test("deep equality",()=>{
    expect(me.age).toEqual(bis.age)
  })
});
