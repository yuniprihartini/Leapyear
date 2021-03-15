function LeapYear(inputYear){
if(((inputYear%4==0)&&(inputYear%100==0))||(inputYear%400==0)){
    console.log(inputYear," is a Leap Year")
}else{
    console.log(inputYear," isn't a Leap Year")
}
}
LeapYear(1999)
LeapYear(2000)