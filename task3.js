
function task3(min,max){
    for(var i=min; i< max;i++ ){
        var a=[];
        if(i%2==0){
            for(var i=min; i<max; i++){
                a.push(i);
            }
        }
        else {
            for(var i=min;i<max;i++){
                a.push(i);
            }
        }
        return a;

    }
}
console.log(task3(3,7));