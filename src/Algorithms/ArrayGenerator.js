
export default function generator () {

    const array = [];
    let limit;

    if(window.innerWidth <= 500 && window.innerWidth > 400){
        limit = 66;
    }

    if(window.innerWidth <= 400){
        limit = 30
    }
    
    else{
        limit = window.innerWidth/7;
    }

    for(let i = 0; i < limit ; i++){
        let val = Math.floor(Math.random() * (650-5+1) + 5); 
        array.push(val);
    }
    return array;
};


