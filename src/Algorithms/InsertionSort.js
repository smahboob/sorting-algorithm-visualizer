
export default function getInsertionSortAnimations (array) {

    const animationsArray = []
    let n = array.length; 
    let swapped = false;

    for (let i = 1; i < n; i++) { 

        let key = array[i]; 
        let j = i - 1;

        if(array[j] < key){
            animationsArray.push([j,i]);
            animationsArray.push([j,i]);
            animationsArray.push([j,array[j]]);
            swapped = false;
        }

        else{
            swapped = true;

            while (j >= 0 && array[j] > key) {

                animationsArray.push([j,i])
                animationsArray.push([j,i])
                animationsArray.push([j+1,array[j]])
                array[j + 1] = array[j];
                j = j - 1; 
    
            }

        }

        array[j + 1] = key;
        
        if(swapped){
            animationsArray.push([j+1,j+2])
            animationsArray.push([j+1,j+2])
            animationsArray.push([j+1,key])
        }

    }

    return animationsArray;
};

