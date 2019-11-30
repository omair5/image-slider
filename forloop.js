
var my_courses=[]
for (var x=1;x<=5;x++){
    var user_input=prompt("ENTER YOUR COURSE"+x );
    my_courses.push(user_input)
}

console.log(my_courses)

for (y in my_courses){
    var changes=prompt("DO YOU WANT TO CHANGE THE COURSE",my_courses[y]);
    if (my_courses[y]!==changes){
        my_courses.splice(y,1,changes)
    }
    else{
        console.log("there is no chnage")
    }
}
console.log(my_courses)
