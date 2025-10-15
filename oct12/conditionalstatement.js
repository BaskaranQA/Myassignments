let browserName='Chrome'
if (browserName==="Chrome") {
    console.log('Launching Chrome browser...')
}
else(
 
    console.log("Launching default browser...")
)


let testType ="df"
switch(testType)
{
    case 'smoke':
console.log("Running Smoke Tests...")
break;
case'sanity':
console.log("Running sanity Tests...")
break;
case'regression':
console.log("Running regression Tests...")
break;
case'sanity':   
console.log("Running sanity Tests...")
break;
default:
console.log("Running Default Smoke Tests...")
}