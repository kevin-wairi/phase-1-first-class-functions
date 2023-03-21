function receivesAFunction(spy){
  
  return spy();
}

function returnsANamedFunction(fn){
  return (function fn(){
    console.log('hi')
  });
}

function returnsAnAnonymousFunction(){
  return function(){
    console.log('hi')
  };
}
// receivesAFunction(spy);

// function spy(){
//   console.group('Hi')
// }