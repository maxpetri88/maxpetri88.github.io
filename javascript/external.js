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
var webmaps =
[
  ["The Historical Marker Database",
  "https://www.hmdb.org/",
  "The purpose is to educate the public about local, regional, and global history that occurred based on the historical markers placed across the globe.The user experience is very basic. It looks as though it was created 15 years ago under web 1.0, the homepage shows latest information, topics of interest, and top 10 visited markers. The landing page is nice, but I would prefer an immediate map localized on your location with nearby markers."
  ],
  ["Coastal Resource Management Viewer",
  "https://cgis.glo.texas.gov/rmc/index.html",
  "The purpose is to aid in development or mineral exploration activities of areas along the Texas coast, certain areas can be developed or not, based on rights of way, dredging, and/or ecological sensitivity. The GIS functionality can query locations by search bar or point and click. Users can also query specific tracts based on Resource Management Code (RMC) that is representative of i.e. Senstive Areas, DA – No Dredging, or OH – Drilling in Deep Water; searching by waterbody and tract; or drawing an area. The authors use ESRI and it shows much more customizability and smooth UX. The authors allow drawing, measuring, printing, creating a report, or turning individual RMC layers on and off."
  ]
];

function welcome()
{
  let a = "Please enter you name.";
  let b = "Type your name here.";

  //A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a,b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {if (column < 2) {document.write("<tr>");
}
  else {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

function areacalculator()
{

  var length,   // first string entered by user
  	width,   // second string entered by user
  	number1,           // first number to add
  	number2,           // second number to add
  	times;                 // multiplication of number1 and number2
  	// read in first number from user as a string
  	length = window.prompt("Enter first integer", "1" );
  	// read in second number from user as a string
  	width = window.prompt( "Enter second integer", "1" );
  	// convert numbers from strings to integers
  	number1 = Number(length);
  	number2 = Number( width );
  	// multiply the numbers
  	times = number1 * number2;
  	// display the results
  	document.writeln( "<H1>The area of your rectangle is " + times + "</H1>" );

}
