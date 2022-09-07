(()=>{
  let isEnable=true;
  //isEnable='as';
  isEnable=false;

  let isNew:boolean=false;
  console.log('isNew',isNew);
  isNew=true;
  console.log('isNew',isNew);

  const random=Math.random();//genera un numero aleatorio entre 0 y 1 con DECIMALES
  console.log('rondom',random);
  isNew=random>=0.5? true:false;
  console.log('isNew',isNew);

  const myBoolean:boolean=true;
})();
