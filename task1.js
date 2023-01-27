
    function task1(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    var a= task1(1,5);

    var b= task1(1,5);

    if(a<b){
        console.log(a +" is less than "+ b);
    }
    else if(a>b){
        console.log(a+" is greater than "+ b)
    }
    else{
        console.log(a+ " is equal to " +b);
    }