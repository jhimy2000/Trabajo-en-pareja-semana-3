(()=>{
  //forma inferida
  let productPrice=100;
  productPrice=12;
  console.log('productPrice',productPrice);

  //forma explicita
  let customerAge:number=28;
  customerAge=customerAge+1;
  console.log('customerAge',customerAge);

  let productInStock:number=11;
  console.log('productInStock',productInStock);
  if(productInStock>10)
  {
    console.log('is greater')
  }

  let discount=parseInt('123');//recibe un string/ retorna un entero
  console.log('discount',discount);
  if (discount<=200) {
    console.log('apply');
  }else{
    console.log('not apply');
  }

  let hex=0xfff;//0x exadecimal
  console.log('hex',hex);
  let bin=0b1010;//0b binario
  console.log('bin',bin);
})();
