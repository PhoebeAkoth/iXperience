console.log('Fibonacci Series:');

let first = 0 , second = 1,nextNumber;

for(let i=1; i <=10 ;i++){
    console.log(first)
    nextNumber = first + second;
    first = second;
    second = nextNumber;
}