const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x));
input.shift();
const L = input.length;
const dir = [
  [-1,0],
  [0,1],
  [1,0],
  [0,-1],
]

const answer = [];

for(let h = 0; h<=100; h++){
let safe = 0;
const map = JSON.parse(JSON.stringify(input))
for(let i = 0; i< L; i++){
  for(let j = 0; j<L; j++){
    if(map[i][j]>h){
      safe++;
      map[i][j]=0;
      let q = [[i,j]];
      while(q.length>0){
        const [r,c]= q.shift();
        dir.forEach(v=>{
          const x = v[0];
          const y = v[1];
          if(x+r>=0 && x+r<L && y+c>=0 && y+c<L && map[x+r][y+c]>h){
            map[x+r][y+c]=h;
            q.push([x+r,y+c])
          }
        })
      }
    }
  }
}

answer.push(safe)
}

console.log(Math.max(...answer))
