const os=document.getElementById('os');

console.log(os);


function display(txt){
if(txt == 'Areaofsquare'){
   Areaofsquare();
}
else if(txt == 'Square'){
    Square();
}
else if (txt == 'Cube'){
    Cube();
}
else if (txt == 'Diagonal'){
    Diagonal();
}
else
{
    os.value+=txt;
    console.log(os.value);
}
}
function Clear(){
    os.value='';
}

function del()
{
 os.value = os.value.slice(0,-1);
}

function calulator()
{
    os.value = eval(os.value);
}

function Areaofsquare()
{
   let a = parseFloat(os.value);
   let res = a*a;
   os.value = res;
}

function Square()
{
   let a = parseFloat(os.value);
   let res = a*a;
   os.value = res;
}

function Cube()
{
   let a = parseFloat(os.value);
   let res = a*a*a;
   os.value = res;
}

function Diagonal(){
    let a = parseFloat(os.value);
   let res = Math.sqrt(2) * a;
   os.value = res;
}