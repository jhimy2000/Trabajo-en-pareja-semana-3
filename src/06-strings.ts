(()=>{
  let productTitle='My amazing product';
  // productTitle=10;
  // productTitle=null;
  productTitle='My amazing product changed';
  console.log('productTitle',productTitle);

  const productDescription="I'm bla bla bla bla bla s asass";
  console.log('productDescription',productDescription);

  let productPrice=100;
  let isNew:boolean=false;

  const summary=`
  title:${productTitle}
  description:${productDescription}
  price:${productPrice}
  isNew:${isNew}
  `;
  console.log(summary);

  const myString:string='perros'

})();
