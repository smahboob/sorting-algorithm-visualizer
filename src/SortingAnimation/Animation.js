
const PRIMARY_COLOR = 'yellow';
const SECONDARY_COLOR = 'darkred';
const ANIMATION_SPEED_MS = 3;

export default async function performAnimation (array) {

      const animations = await array;

      for (let i = 0; i < animations.length; i++) {
  
          const arrayBars = document.getElementsByClassName('bar');
          const isColorChange = (i % 3 !== 2)
  
          if (isColorChange) {
              const [barOneIdx, barTwoIdx] = await animations[i];
              const barOneStyle = await arrayBars[barOneIdx].style;
              const barTwoStyle = await arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              helper(barOneStyle,barTwoStyle,color,i)
          }
          
          else {
              const [barOneIdx, newHeight] = await animations[i];
              const barOneStyle = await arrayBars[barOneIdx].style;
              secondHelper(barOneStyle,newHeight,i)
          } 
      }
};

function helper(barOneStyle,barTwoStyle,color,i){
  setTimeout(() => { 
    barOneStyle.backgroundColor = color;
    barTwoStyle.backgroundColor = color;
  }, i * ANIMATION_SPEED_MS);
}

function secondHelper(barOneStyle,newHeight,i){
  setTimeout(() => { 
    barOneStyle.height = `${newHeight}px`;
  }, i * ANIMATION_SPEED_MS);
}