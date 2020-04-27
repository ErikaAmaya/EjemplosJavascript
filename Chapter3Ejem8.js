const age = 30;

if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block:', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block;',age);
    }
}

console.log('outiside code block', age, name, test);

//segundo ejemplo utilizando la estructura switch para evaluar cada caso diferente

//const grade = 'C';

//switch (grade){
  //  case 'A':
      //  console.log('you got an A!');
      //  break;
       // case 'B':
       // console.log('you got an B!');
       // break;
       // case 'C':
       // console.log('you got an C!');
       // break;
       // case 'D':
       // console.log('you got an D!');
       // break;
       // case 'E':
       // console.log('you got an E!');
       // break;
       // default:
         //   console.log('not a valid grade');
//}

