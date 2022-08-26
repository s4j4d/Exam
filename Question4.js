function quera(m,array){
    array.sort((a,b)=>{
        if(a[0]/a[1]>b[0]/b[1]) return -1
        else if(a[0]/a[1]<b[0]/b[1]) return 1
        else 0
    })
    // console.log(array);
    let numberOfDays = 0;
    let tempM = 0
    let pay,revenue;
    while(tempM <= m){
        numberOfDays ++
        for(let i=1;i<=array.length;i++){
            pay = array.slice(0,i).reduce((total,currentValue) =>{
                return currentValue[1]+total
            },0)
            revenue = array.slice(0,i).reduce((total,currentValue) =>{
                return currentValue[0]+total
            },0)
            tempM = numberOfDays*revenue - pay
            if(tempM>=m)break
        }
    }
console.log(numberOfDays);
    
}


quera(5,[[1,8],[3,12],[4,17],[10,100]])