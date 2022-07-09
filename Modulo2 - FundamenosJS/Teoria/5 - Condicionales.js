// If - Else
if (false) {        // logical condition
    console.log("case true")               
} else {                                
    console.log("case false")           
}

if(false){
}else if(true){
    console.log("ok")
}else{
    console.log("ok")
}

//Switch
switch (new Date().getDay()) {      // input is current day
case 6:                         // if (day == 6)
	text = "Saturday";          
	break;
case 0:                         // if (day == 0)
	text = "Sunday";
	break;
default:                        // else...
	text = "Whatever";
} 