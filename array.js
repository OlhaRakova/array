
let aa = Array();
aa[0]= 2;
aa[1]= 3;
aa[2]= 4;
aa[3]= 5;
aa[4]= 4;
aa[5]= 3;
aa[6]= 2;
aa[7]= 1;
aa[8]= 5;
aa[9]= 6;

console.log(aa[0] + " " + aa[1] + " " + aa[2] + " " + aa[3] + " " + aa[4]+" " + aa[5] + " " +aa[6] + " " + aa[7] + " " + aa[8] + " " + aa[9]);
let bb = Array();
bb[0]= 2;
bb[1]= 2*bb[0];
bb[2]= 2*bb[1];
bb[3]= 2*bb[2];
bb[4]= 2*bb[3];
bb[5]= 2*bb[4];
bb[6]= 2*bb[5];
bb[7]= 2*bb[6];
bb[8]= 2*bb[7];

console.log(bb[0] + " " + bb[1] + " " + bb[2] + " " + bb[3] + " " + bb[4]+" " + bb[5] + " " +bb[6] + " " + bb[7] + " " + bb[8]);


let nn=Array();
let res = "";
for(let i=0;i<9;i++){
nn[i]=Math.pow(2, i+1);
res+=nn[i]+" ";
}
console.log(res);

bb[0]=Math.floor(Math.random());
bb[1]= 2*bb[0];
bb[2]= 1+bb[1];
bb[3]= bb[0]*bb[1];
bb[4]= bb[1]*bb[3];

console.log(bb[0] + " " + bb[1] + " " + bb[2] + " " + bb[3] + " " + bb[4]);

    let rr = Array();
    for (let i = 0; i <= 5; i++) {
     rr[i] = parseFloat((Math.random() * 50).toFixed(2));
    }
    let str = '';
        for (let i = 0; i <= 5; i++) {
         str += rr[i] + ' ';
        }
    document.getElementById('result1_1').innerHTML = str;
    let sum = 0;
    let n = 0;
    for (let i = 0; i < rr.length; i++) {
        sum += rr[i];
         n += 1;
        }
    let avg = sum / n;
    document.getElementById('result1_2').innerHTML = avg;

    let ll = Array();
let sum_2=0;
let str_2 = '';
pp=prompt("Введите количество значений в слове, чтобы потом я посчитал бувкы а ");
for (let i = 0; i < pp; i++) {
    ll[i] = prompt("Введите " + (i+1) + "-й элемент массива");
    str_2 += ll[i] + ' ';
    if(ll[i]=='а'){ 
        sum_2+=1;
    }
}

document.getElementById('result2_1').innerHTML = str_2;
document.getElementById('result2_2').innerHTML = sum_2;
let xx = Array();
let str_3 = '';
let sum_3=0;
for (let i = 0; i < 10; i++) {
    xx[i] = Math.floor(Math.random() * 2);
    if(xx[i]==0){
        xx[i]="Ложь";
    }
    else{
        xx[i]="Истина";
        sum_3+=1;
    }
    str_3 += xx[i] + ' ';
}

document.getElementById('result3_1').innerHTML = str_3;

if(sum_3>5){
    result="Больше 'Истина'";
}
else if(sum_3<5){
    result="Больше 'Ложь'";
}
else{
    result="Количество равное";
}
document.getElementById('result3_2').innerHTML = result;

