
export default function getSelectionSortAnimations (array) {
    
    const animationsArray = []

    for(let i = 0; i < array.length-1; i++){
        let minIndex = i;


        for(let j = i+1; j < array.length; j++){

            animationsArray.push([j,minIndex]);
            animationsArray.push([j,minIndex]);
            animationsArray.push([j,array[j]])
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }

        let min = array[minIndex]

        animationsArray.push([i,i+1]);
        animationsArray.push([i,i+1]);
        animationsArray.push([i,min])

        let tmp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = tmp;

    }

    let n = array.length;
    animationsArray.push([n-2,n-1]);
    animationsArray.push([n-2,n-1]);
    animationsArray.push([n-1,array[n-1]]);
    return animationsArray;
};


