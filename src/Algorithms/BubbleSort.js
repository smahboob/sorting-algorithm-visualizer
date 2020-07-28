
export default function getBuubleSortAnimations (array) {
    
    const animationsArray = []
    let len = array.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1; j++) {

            animationsArray.push([j,j+1]);
            animationsArray.push([j,j+1]);

            if (array[j] > array[j + 1]) {
                animationsArray.push([j, array[j+1]])
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            else{
                animationsArray.push([j, array[j]])
            }

        }

        animationsArray.push([len-2,len-1])
        animationsArray.push([len-2,len-1])
        animationsArray.push([len-1, array[len-1]])
    }

    return animationsArray;
};


