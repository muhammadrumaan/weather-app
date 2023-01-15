const objtest=document.querySelectorAll("select");
let result=document.querySelector(".result");
result.innerHTML="";
let gpa_val=0;
const objcred={
    'antn':3,
    'digi':3,
    'mpmc':3,
    'cse':3,
    'profel':3,
    'pom':3,
    'mpmclab':2,
    'digilab':2,
    'sumint':2
};
const objcredpoint={
    'O':10,
    'A+':9,
    'A':8,
    'B+':7,
    'B':6,
    'RA':0
};
function CalculateGpa(objtest,objcred,objcredpoint) {
    gpa_val=0;
    Array.from(objtest).forEach((select)=>{
        let name=select.name;
        let grade=select.value;
        gpa_val+=(objcred[name]*objcredpoint[grade]);
    })
    gpa_val/=24;
    gpa_val=gpa_val.toFixed(2);
    if(gpa_val>8){
        result.innerHTML="<h1>Your GPA is "+gpa_val+" &#128525;</h1>";
    }else if(gpa_val>7 && gpa_val<=8){
        result.innerHTML="<h1>Your GPA is "+gpa_val+" &#128522;</h1>";
    }else{
        result.innerHTML="<h1>Your GPA is "+gpa_val+" &#128533;</h1>";
    }
   setTimeout(()=>{
    window.scrollTo(0,document.body.scrollHeight);
   },500);
    
}


