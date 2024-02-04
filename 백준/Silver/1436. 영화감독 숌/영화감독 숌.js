const N = +require('fs').readFileSync('dev/stdin').toString();
let [n, c1, c2] = [1, 0, undefined];
let d, t;

if(N === 1) { console.log("666"); process.exit(0) }
while(n !== N){
    c1++; n++;

    d = 0; t = c1;
    while(t % 10 === 6 && d < 3){
        t = Math.floor(t * 0.1);
        d++;
    }
    if(d === 0){
        c2 = undefined;
    }else if(d >= 1){
        c2 = 0;
        while(n !== N && (c2 < Math.pow(10, d) - 1)){
            c2++; n++;
        }
    }
}

if(c2 === undefined){
    console.log(c1 + "666");
}else {
    c2 = c2.toString();
    console.log(c1 + "666".slice(0, 3 - d) + new Array(d - c2.length + 1).join('0') + c2);
}
//1등코드 테스트