var assert = chai.assert;

suite('Pruebas', function(){
  test('Suma', function(){
    obj = pl0.parse("VAR x; x = 5 + 2 .")
    assert.equal(obj.right, "7")
  });

  test('Resta', function(){
    obj = transformacion_pl0(pl0.parse("VAR x; x = 5 - 2 ."))
    assert.equal(obj[1].right, "3")
  });

   test('Multiplicación', function(){
    obj = transformacion_pl0(pl0.parse("VAR x;x = 5 * 2 ."))
    assert.equal(obj[1].right, "10") 
  });

  test('División', function(){
    obj = transformacion_pl0(pl0.parse("VAR x;x = 10 / 2 ."))
    assert.equal(obj[1].right, "5")
  });

  test('Paréntesis', function(){
    obj = transformacion_pl0(pl0.parse("VAR x;x = (5+2) * 2 ."))
    assert.equal(obj[1].right, "14")
  });

  test('Precedencia', function(){
    obj = transformacion_pl0(pl0.parse("VAR x;x = 5+2*2 ."))
    assert.equal(obj[1].right, "9")
  });

  test('Comparación', function(){
    obj = transformacion_pl0(pl0.parse("VAR x,y;IF x == 5 THEN y = 2 ."))
    assert.equal(obj[1].condition.type, "==")
  });

  test('IF, IFELSE', function(){
    obj = transformacion_pl0(pl0.parse("VAR x,y;IF x == 5 THEN y = 2."))
    assert.equal(obj[1].type, "IF")

    obj = transformacion_pl0(pl0.parse("VAR x,y;IF x == 5 THEN y = 2 ELSE y = 3."))
    assert.equal(obj[1].type, "IFELSE")
  });

  test('Sintáxis', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("x = 5")); }, /Expecting 'Punto'/);
  });
});