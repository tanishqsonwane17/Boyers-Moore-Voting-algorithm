let arr = [2,2,1,1,1,2,2];
let count = 1;
let ans = arr[0];

for(let i = 0; i<arr.length; i++){
    if(count==0){
        ans = arr[i]
    }
    if(arr[i]==ans){
        count++
    }
    else{
        count --
    }
}
console.log(ans)