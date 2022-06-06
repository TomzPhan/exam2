
function find_square_number(n){
    let flag = 0;

    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
            flag = 1;
            break; 
        }
        i++;
    }

    return flag;
}

let n= prompt(" nhap mot so n: ");
    
let i = 0, check=0, result ="";
while ( i < n){
    check = find_square_number(i);
    if( check == 1 ) result += i + " ";
    ++i;
}
console.log(result); 
