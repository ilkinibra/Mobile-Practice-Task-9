function countTrue(arr) {
    return arr.filter(item => item === true).length;
  }
  
  // Nümunələr
  console.log(countTrue([true, false, false, true, false]));
  console.log(countTrue([true, true, true, false, false, true])); 
  