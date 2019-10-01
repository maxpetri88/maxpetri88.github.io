// Task 1 document.write("Where is my JS code?");
// Task 2 window.alert(5+6);
//window.alert('5+6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
/* Task 3
const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);
*/

// A prompt box is used to prompt users to input a value before entering a page.
/*user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
*/

/* Task 4
const x = 22;
const y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33);
*/
/* Task 5
document.writeln("<button onclick='condition()'>Conditional Test</button>")

function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay!");
  }
  else
  {
    document.writeln("You chose Cancel!");
  }
}
*/
function welcome()
{
  let a = "Please enter you name.";
  let b = "Type your name here.";

  //A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a,b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

document.write(welcome());
