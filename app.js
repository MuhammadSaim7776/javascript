// // chapter no 1
// // q1
// alert("welcome to my web page");
// // q2
// alert("Error!Please enter the valid password");
// // q3
// alert("welcome to js land...\nHappy coding");
// // q4
// alert("Welcome to JS Land")
// alert("Happy Coding!\nprevent this message from creating additional dialogues")
// // chapter no 2
// // q1
// var username;
// // q2
// var myname="Saim Zahir"
// // q3(a)
// var message="";
// // q3(b)
// message="Hello World";
// // q3(c)
// alert(message);
// // q4
// var name="Saim Zahir";
// var age="20";
// var qualification="BSCS/CERTIFIED WEB DEVELOPER"
// alert("The name of student is "+name);
// alert("The age of student is "+age);
// alert("The qualification of student is "+qualification)
// // q5
// var x="PIZZA";
// var arr=" ";

// for(var i=5;i>0;i--){
//     for(var j=0;j<i;j++){
//     arr[i,j]=x[j];
//     }
// }
// alert(arr);
// // q6
// var email=" ";
// email="saimzahir7776@gmail.com"
// alert("My Email is  "+ email);
// // q7
// var book=" ";
// book="A Smarter Way To Learn JAVA SCRIPT";
// alert("I am trying to learn from the book  "+ book);
// // q8
// document.write("Yeah! I can write HTML content through JavaScript </br>")
// // q9
// alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")
// // chapter no 3
// // q1
// var age="";
// age=20;
// alert("I am "+ age +" years old");
// // q2
// var visit="14";
// alert("You have visited this page "+visit+" times");
// // q3
// var birthyear="1999";
// document.write("My birth year is "+birthyear+"</br>datatype of my declared variable is number</br>")
// // q4
// var visitorname="Saim Zahir";
// var product="T-Shirt"
// var quantity="5";
// document.write(visitorname+" ordered "+quantity+" "+product+" on XYZ clothing</br>")
// // chapter no 4
// // q1
// var a,b,c;
// // q2
// // var rose,UserName,MyVar,a,b;
// // var My name, /bb,User response etc;
// // chapter no 5
// // qno1
// var val1="3";
// var val2="2";
// var sum=(+val1)+(+val2);
// document.write(val1 + "+" + val2 + "=" + sum) ;
// document.write("</br>");
// // qno2
// var val1="3";
// var val2="2";
// var sub=(+val1)-(+val2);
// document.write(val1 + "-" + val2 + "=" + sub);
// document.write("</br>");
// var mul=(+val1)*(+val2);
// document.write(val1 + "*" + val2 + "=" + mul);
// document.write("</br>");
// var div=(+val1)/(+val2);
// document.write(val1 + "/" + val2 + "=" + div);
// document.write("</br>");
// var mod=(+val1)%(+val2);
// document.write(val1 + "%" + val2 + "=" + mod);
// document.write("</br>");
// // qno3
// var number;
// document.write("Value of variable after decleration is " + number);
// document.write("</br>");
// number=5;
// document.write("Initial value is " + number);
// document.write("</br>");
// ++number;
// document.write("Value of variable after increment is " + number);
// document.write("</br>");
// number=(+number)+7;
// document.write("Value of variable after addition is " + number);
// document.write("</br>");
// --number;
// document.write("Value of variable after decriment is " + number);
// document.write("</br>");
// document.write("Remainder is " + (+number)%3);
// document.write("</br>");
// // qno4
// var price=600;
// document.write("Total cost to buy 5 tickets to a movie is " + (+price)*5 +"PKR")
// document.write("</br>");
// // qno5
// document.write("Table of 4")
// document.write("</br>");
// for(var i=1;i<=10;i++)
// {
//     document.write("4 * " + i + " = " + 4*i);
//     document.write("</br>");
// }
// // qno6
// var celcius=25;
// var f= (celcius*9/5)+32;
// document.write(celcius + " C is " + f);
// document.write("</br>");
// var faranheight=70;
// var c= (faranheight - 32)*5/9;
// document.write(faranheight + " F is " + c);
// document.write("</br>");
// // qno10
// var num=10;
// var result=(((num+5)*10)/2);
// document.write("result is "+result);
// document.write("</br>");
// // chapter no 6-9(qno2) 
// var a=2,b=1;
// var result=--a - --b + ++b + b--;
// // --a=1
// // --b=0
// // --a - --b=1
// // ++b=1
// // --a - --b + ++b=2      
// // b--=1
// // --a - --b + ++b + b--
// // 1   - 0   + 1   + 1 =3 
// document.write("The value of a is " + a);
// document.write("</br>");
// document.write("The value of b is " + b);
// document.write("</br>");
// document.write("The result is " + result);
// document.write("</br>");
// // qno3
// var useranme=prompt("Enter your name");
// alert("Welcome "+useranme);
// // qno4
// // qno5
// var table_number=prompt("Enter the number of which you want to get table",5);
// for(var i=1;i<=10;i++){
// document.write(table_number + " * " + i + " = " + table_number*i);
// document.write("</br>");
// // chapter no 9-11(qno1)
// var city_name=prompt("Enter the name of your city");
// if(city_name=="karachi" || city_name=="Karachi" || city_name=="KARACHI"){
//     alert("Welcome to the city of lights");
// }
// qno2
// var gender=prompt("Enter your gender");
// if(gender=="male"||gender=="Male"||gender=="MALE"){
//      alert("Welcome sir!");
// }
// else if(gender=="female"||gender=="Female"||gender=="FEMALE"){
//     alert("Welcome Ma'am!");
// }
// qno3
// var color=prompt("Enter the color that you usually see in traffic signals");
// if(color=="yellow"||color=="Yellow"||color=="YELLOW"){
//     alert("Yellow color means ready to move")
// }
// else if(color=="red"||color=="Red"||color=="RED"){
//     alert("Red color means must stop")
// }
// else if(color=="green"||color=="Green"||color=="GREEN"){
//     alert("Green color means move now")
// }
// else{
//     alert("You have entered wrong color name");
// }
// // qno4
// var fuel=prompt("Enter the remaining feul present in your car");
// if(fuel<0.25){
//     alert("Please refill your fuel");
// }
// else{
//     alert("okk....!")
// }
// qno5(a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // alert message is displayed
// // qno5(b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // alert message is not displayed
// // qno5(c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
//  if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// // alert message is  displayed two conditions are truei.e. 2 and 4.
// // qno5(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // alert message is displayed.
// // qno5(e)
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// // alert message is displayed.
// // qno5(f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// alert message is displayed.
// qno7
// var org_number=1;
// var guessed_number=prompt("Guess a number between 1 and 10</br>come on! its fun");
// if(guessed_number==org_number){
//     alert("Bingo!Correct answer")
// }
// else if(guessed_number==(+org_number)+1){
//     alert("Close enough to correct the answer but not correct")
// }
// else{
//     alert("Wrong answer");
// }
// qno8
// var numb=prompt("Enter the number you want to check whether it is divisible by 3 or not");
// if(numb%3==0){
//     alert("Your entered number is divisible by 3");
// }
// else{
//     alert("Your entered number is not divisible by 3");
// }
// // qno9
// var numb=prompt("Enter the number you want to check whether it is even or odd");
// if(numb%2==0){
//     alert("Your entered number is even");
// }
// else{
//     alert("Your entered number is odd");
// }
// // qno10
// var temprature=prompt("Enter the temperature in celcius");
// if(temprature>40)
// {
//     alert("It is too hot outside");
// }
// else if(temprature>30)
// {
//     alert("The waether today is normal");
// }
// else if(temprature>20)
// {
//     alert("The waether today is cool");
// }
// else if(temprature>10)
// {
//     alert("OMG!The waether today is so cool");
// }
// else{
//     alert("wrong input");
// }
// // qno11
// var numb1=prompt("Enter the first number in calculator");
// var numb2=prompt("Enter the second number in calculator");
// var operator=prompt("Enter the operation you want to perform");
// if(operator==="+")
// {
//     alert(numb1 + " + " + numb2 + " = " + (numb1+numb2));
// }
// else if(operator=="-")
// {
//     alert(numb1 + " - " + numb2 + " = " + (numb1-numb2));
// }
// else if(operator=="*")
// {
//     alert(numb1 + " * " + numb2 + " = " + (numb1*numb2));
// }
// else if(operator=="/")
// {
//     alert(numb1 + " / " + numb2 + " = " + (numb1/numb2));
// }
// else if(operator=="%")
// {
//     alert(numb1 + " % " + numb2 + " = " + (numb1%numb2));
// }
// else{
//     alert("you have entered wrong operator");
// }
// // chapter no 12-12(qno1)
// var x=prompt("Enter the ASCII code and ill tell ul whether it is upper case or lower case");
// if(x>=65&&x<=90){
//     alert("Your entered lettr is upper case");
// }
// else if(x>=97&&x<=122){
//     alert("Your entered lettr is lower case");
// }
// else{
//     alert("Your entered number doesnot exist in ASCII")
// }
// // qno2
// var number1st=prompt("Enter the first number you want to compare");
// var number2nd=prompt("Enter the second number you want to compare");
// if(number1st===number2nd){
//     alert("Your entered numbers are equal");
// }
// else if(number1st>number2nd){
//     alert("Your entered  first number is greater than second");
// }
// else {
//     alert("Your entered  second number is greater than first");
// }
// // qno3
// var integer=prompt("Enter the integer you want to check whether it is negative or possitive");
// if(integer==0)
// {
//     alert("Your entered integer is 0");
// }
// else if(integer>0)
// {
//     alert("Your entered integer is possitive");
// }
// else{
//     alert("Your entered integer is negative");
// }
// // qno4
// var str=prompt("Enter the alphabet");
// if(str=="a"||str=="e"||str=="i"||str=="o"||str=="u"||str=="A"||str=="E"||str=="I"||str=="O"||str=="U"){
//     alert("True");
// }
// else{
//     alert("False"); 
// }
// // qno5
// var password=prompt("Enter password you want to set");
// if(password=""){
//     password=prompt("Enter your password you want to set");   
// }
// var passcode=prompt("Enter your password to confirm");

// if(passcode===password){
//     alert("Correc!You have entered correct answer")
// }
// else{
//     alert("Wrong Password. please try again")
// }
// qno6
// var greeting="";
// var hour = 13;
// if (hour < 18) { 
//       greeting = "Good day";
// }
// else {
//      greeting = "Good evening";
// }
// alert (greeting);
// // now it is working
// // qno7
// var time=prompt("Enter time in 24 hour format");
// if(time>=0000&&time<1200){
//     alert("Good Morning");
// }
// else if(time>=1700&&time<2100){
//     alert("Good Afternoon");
// }
// else if(time>=1200&&time<1700){
//     alert("Good Evening");
// }
// else if(time>=2100&&time<2359){
//     alert("Good Night");
// }
// else{
//     alert("Incorrect input");
// }
// chapter no 14-16
// qno1
// var students_names=[];
// // qno2
// var student_names=new array;
// // qno3
// var str_array=[];
// str_array=["Cat","Dog","Frog"];
// // qno4
// var num_array=[];
// num_array=[1,2,3,4,5];
// // qno5
// var bool_array=[];
// bool_array=[0,1];
// // qno6
// var mixed_array=[];
// mixed_array=[0,"chair","a",70];
// qno9
// var colors=["Blue","Red","Green","Black","white"];
// document.write("The available colors in array are </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// var addcolor=prompt("Enter the color you want to add in the begining of array");
// colors.unshift(addcolor);
// document.write("The array after adding to start is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// var addcolor=prompt("Enter the color you want to add at the end of array");
// colors.push(addcolor);
// document.write("The array after adding to end is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// colors.unshift("Violet","Dark Green");
// document.write("The array after adding two more colors in start is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// colors.shift();
// document.write("The array after deleting a color from start is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// colors.pop();
// document.write("The array after deleting color from end is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// var index=prompt("Enter the index of array at which you want to add color");
// addcolor=prompt("Enter the color you want to add at the disired index");
// colors.splice(index,0,addcolor);
// document.write("The array after adding color at given index is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
// index=prompt("Enter the index from which you start to delete colors");
// var n=prompt("Enter the number of index you want to delete");
// colors.splice(index,n);
// document.write("The array after deleting from desired place is </br>");
// for(var i=0;i<colors.length;i++){
//     document.write(colors[i]);
//     document.write("</br>")
// }
//qno10
// var score=[320,230,480,120];
// document.write("Your current array is as follow</br></br>")
// for(var i=0;i<score.length;i++){
//     document.write(score[i]);
//     document.write("</br>");
// }
// for(var i=0;i<(score.length-1); i++){
//      var loc=i;
//      for(var j=i+1;j<score.length;j++){
//          if(score[i]>score[j]);
//          loc=j;
//      }
//      var temp=score[loc];
//      score[loc]=score[i];
//      score[i]=score[temp];
// }
// document.write("Your sorted array is as follow</br></br>")
// for(var i=0;i<score.length;i++){
//     document.write(score[i]);
//     document.write("</br>");
// } wrong answer;
// qno11
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selected_cities=cities.slice(2, 5);
// document.write("<strong>Cities List</strong></br>")
// for(var i=0;i<cities.length;i++){
//     document.write(cities[i]);
//     document.write("</br>");
// }
// document.write("<strong>Selected Cities List</strong></br>");
// for(var i=0;i<selected_cities.length;i++){
//     document.write(selected_cities[i]);
//     document.write("</br>");
// }
//qno12
var arr=["This","is","my","cat"];
document.write("<strong>ARRAY</strong></br>");
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" , ");
}
document.write("</br>");
document.write("<strong>STRING</strong></br>");
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" ");
}
document.write("</br>");
// qno13,14
var arr=[];
    arr[0]="keyboard";
    arr[1]="mouse";
    arr[2]="printer";
    arr[3]="moniter";
document.write("Devices:"+arr  +" </br>");
document.write("Last in first out </br>");
document.write("out:</br>"+arr[3]  +" </br>");
document.write("out:</br>"+arr[2]  +" </br>");
document.write("out:</br>"+arr[1]  +" </br>");
document.write("out:</br>"+arr[0]  +" </br>");
document.write("First in first out </br>");
document.write("Last in first out </br>");
document.write("out:</br>"+arr[0]  +" </br>");
document.write("out:</br>"+arr[1]  +" </br>");
document.write("out:</br>"+arr[2]  +" </br>");
document.write("out:</br>"+arr[3]  +" </br>");
// qno15
var ar=["Apple" ,"Samsung", "Motorola", "Nokia", "Sony & Haier"]
document.write("<select><option>phone menufacturers</option><option>"+ar[0]+"</option><option>"+ar[1]+"</option><option>"+ar[2]+"</option><option>"+ar[3]+"</option><options>"+ar[4]+"</options></select>");
document.write("</br>");
// chapter no 17-20
// qno1
// var arr = [
//     ["ahmed", 19],
//     ["junaid", 20]
// ];
// qno2
var a = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (var i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        document.write(a[i][j]+" ");
    }
     document.write("</br>");
}
// qno3
for(var i=0;i<=10;i++){
    document.write(i+"</br>")
}
// qno4
var x=prompt("enter the number of which you want to perform table");
var y=prompt("enter the length of table");
for(var i=1 ;i<=y ; i++){
    document.write(x+" * "+ i + " = "+ x*i+ "</br>");
}































