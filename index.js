// code your solution here
function saturdayFun(activity){
    if ( typeof activity === 'string'){
    return `This Saturday, I want to ${activity}!`;
} else {
    return 'This Saturday, I want to roller-skate!';
}
}
console.log(saturdayFun("run and go to Church"));



const mondayWork = function(work) {
    if (typeof work === "string") {
        return `This Monday, I will ${work}.`; 
    } else {
        return 'This Monday, I will go to the office.';
    }
};

console.log(mondayWork("go to Maandamano"));

//function wrapAdjective(parameter, adjective) {
   // const innerFunction = function(){
       // if (parameter === "%"){
         //   return `You are ${parameter}${adjective}${parameter}`;
       // } else{
       //     return `You are ${parameter}${adjective}${parameter}`;
       // }
   // }
   // return innerFunction(parameter, adjective);
   // }
//console.log(wrapAdjective("*", "a good athlete"));


// function wrapAdjective(parameter, adjective) {
//     if (parameter === "*") {
//         return function(){
//              `You are ${parameter}${adjective}${parameter}!`;
//         }
//         } else if (parameter === "||") {
//             return `You are ${parameter}${adjective}${parameter}!`;
//         } else {
//             // Default behavior if parameter is neither '*' nor '||'
//             return `You are ${parameter}${adjective}${parameter}`;
//         }
//     }

// wrapAdjective();
// console.log(wrapAdjective("*", "a good athlete"));

function wrapAdjective(parameter) {
    if (parameter === "*") {
        return function(adjective) {
            return `You are ${parameter}${adjective}${parameter}!`;
        };
    } else if (parameter === "||") {
        return function(adjective) {
            return `You are ${parameter}${adjective}${parameter}!`;
        };
    } else {
        return `You are ${parameter}${adjective}${parameter}`;
    }
}

wrapAdjective();
console.log(wrapAdjective("*", "a good athlete"));

//const highlightWithStars = wrapAdjective("*", "a good athlete");
//const highlightWithBars = wrapAdjective("||", "a good athlete");

//console.log(highlightWithStars()); // Output: *a good athlete*
//console.log(highlightWithBars()); // Output: ||a good athlete||


