function countedLoops(n){

  // Loop control variable is initialized
  count = 0;

  // Loop control variable is tested
  while(count < 4){
    console.log('Hello');

    // Loop control variable is altered
    count = count + 1;
  }

  console.log('Goodbye!');
  
}

countedLoops(4);