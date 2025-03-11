const Person = require('../module.js');
describe("Singleton Function", () => {
  const me = new Person("ae7", 36);
  const bis =new Person("ae10", 37);
  test("object equality", () => {
    expect(me).toStrictEqual(bis)
    expect(me).toBe(bis)
    expect(me.name).toEqual("ae10")
  });
  test("deep equality",()=>{
    expect(me.age).toEqual(bis.age)
    expect(me.name).toEqual(bis.name)
  })
});
