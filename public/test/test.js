var assert = chai.assert;

suite('Pruebas', function(){
  test('Suma', function(){
    obj = transformacion_pl0(pl0.parse("VAR x; x = 5 + 2 ."))
    assert.equal(obj[1].right, "7")
  });

  test('Resta', function(){
    obj = transformacion_pl0(pl0.parse("VAR x; x = 5 - 2 ."))
    assert.equal(obj[1].right, "3")
  });

});