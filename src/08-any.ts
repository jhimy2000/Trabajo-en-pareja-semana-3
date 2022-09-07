(()=>{
  let myDynamicVar:any;
  myDynamicVar=100;
  myDynamicVar=null;
  myDynamicVar='hola xD';
  myDynamicVar=[];
  myDynamicVar={};

  myDynamicVar='Hola';
  const rta=(myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar=1554;
  const rta2=(<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
