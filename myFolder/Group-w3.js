console.log('Gangnnem');
// 1.
function groupWtres(){
    console.log('Hello World');
}
groupWtres();

// 2.
function highFive (number){
    for (let i = 0; i < number; i++){
        console.log('Hello World');
    }
}
highFive(10)
highFive(12)

// 3.
function kToF(tempK) {
    return ((tempK - 273.15) * 9) / 5 + 32;
  }
  console.log(kToF(25));

function catsPlus(num){
    if(num > 1){
        return true;
    } else if(num < 1){
        return false;
    }
}
console.log(catsPlus(-45));

// 4.
function numIntake( num ){
    if (num === 0){
        return 'Sunday';
    } else if (num === 1){
        return 'Monday';
    } else if (num === 2){
        return 'Tuesday';
    } else if (num === 3){
        return 'Wednesday';
    } else if (num === 4){
        return 'Thursday';
    } else if (num === 5){
        return 'Friday';
    } else if (num === 6){
        return 'Saturday';
    }
}

console.log(numIntake(5));

// 5.
function getDayOfWeek(){
    const today  = new Date('October 23, 2022');
    const day1 = today.getDay();
    return numIntake(day1)
    }
    console.log(getDayOfWeek())
// 6.
let count = 0;
function callCounter(){
    count++;
    console.log(count);
}
callCounter();
callCounter();
callCounter();
callCounter();

// 7.
function countStringInArray(array,string) {
    let counter=0
    for(let i=0;i<array.length;i++) {
        if(array[i]===string){
            counter++;
        }
    }return counter;
}
//test
console.log(countStringInArray([1,2,3,4,5,6,5,4,3,2,3,3,3,3,3,3,],3));
