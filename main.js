const date= new Date();
const day=date.getDay();
let dayname='';
const daydiv=document.querySelector(".flexitem__day");
const datediv=document.querySelector(".flexitem__date");

//A hét napjának előállítása és beírása
const daytodiv=() => {
switch (day) {
case 0: dayname='vasárnap';
case 1: dayname='hétfő';
case 2: dayname='kedd';
case 3: dayname='szerda';
case 4: dayname='csütörtök';
case 5: dayname='péntek';
case 6: dayname='szombat';
daydiv.innerHTML=dayname;
datediv.innerHTML=`${(date.getDate()) ? "0"+date.getDate() :
  date.getDate()}-${(date.getMonth()<10) ?"0"+date.getMonth() :
  date.getMonth()}-${date.getFullYear()}`;
};
}



console.log();
daytodiv();

