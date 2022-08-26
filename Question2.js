
function smallestGcd(range){
    let number = range
    for(let i=range;i>=1;i--){
        if(number%i){   
            for(let j=2;j<=range;j++){
                temp = number*j
                if(temp%j ==0){
                    number *=j
                    break
                }}
    }
}console.log(number);
}
smallestGcd(20)