

function anagram(str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length){
        return false
    }
    str1.split('').forEach(value => {
        if(str2.split('').includes(value)){
            str2 = str2.replace(value,'')
        }        
    });
    if(!str2.length){return true}
    else{return false}
}
console.log( anagram('salam','salas'));