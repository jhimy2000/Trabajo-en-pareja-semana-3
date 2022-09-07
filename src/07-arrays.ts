(()=>{
  let prices=[1,2,2,1,1,212];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);


  let prices02=[1,2,2,1,1,212, 'hola'];
  //prices.push(true);
  prices02.push(121212);
  prices02.push('jhimy');

  let products=['chau',true];
  products.push(false);

  let mixed:(number|string|boolean|Object)[]=['hola jhimy',true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});//objeto
  mixed.push([]);//pero tambien array, no no se puede prevver errores

  let numbers=[1,2,1,2,5,7,848];
  numbers.map(item=>item*2)

})();
