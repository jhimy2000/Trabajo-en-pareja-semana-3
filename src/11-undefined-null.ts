(()=>{
  // let myNumber:number=undefined;
  // let myString:string=null;

  let myNull:null=null;
  let myUndefined:undefined=undefined;

  let myNumber:number|null=null;
  myNumber=10;

  let myString:string|undefined=undefined;
  myString='as';
  function hi(name:string|null){
    let helloo='hola ';
    if (name) {
      helloo+=name;
    }else{
      helloo+='nobody';
    }
    console.log(helloo);
  }

  hi('jhimy');
    hi('null');
})();
