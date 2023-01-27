//Task 1
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

//Task2
    function task2(min,max){
        for(var i=min; i< max;i++ ){
            if(i%2==0){
                for(var i=min; i<max; i++){
                    return i;
                }
            }
            else {
                for(var i=min;i<max;i++){
                    return i;
                }
            }
            
    
        }
    }
    console.log(task2(3,7));
    //Task 3
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
    //Task 4
    function task4(string) {
        return string === string.split("").reverse().join("");
      }
      
      console.log(task4("ingirumimusnocteetconsumimurigni"));