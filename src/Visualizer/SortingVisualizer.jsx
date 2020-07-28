import React from 'react'
import './SortingVisualizer.css'
import getBuubleSortAnimations from '../Algorithms/BubbleSort'
import getSelectionSortAnimations from '../Algorithms/SelectionSort'
import getInsertionSortAnimations from '../Algorithms/InsertionSort'
import getMergeSortAnimations from '../Algorithms/MergeSort'
import generator from '../Algorithms/ArrayGenerator'
import removeButton from '../Algorithms/RemoveButtons'
import performAnimation from '../SortingAnimation/Animation'
const PRIMARY_COLOR = 'yellow';

export default class SortingVisualizer extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            array:[],
        }
    }

    componentDidMount(){
        this.generateNewArray();
        window.addEventListener("resize", this.generateNewArray.bind(this));
    }

    generateNewArray = () => {
        let arr = generator();
        this.setState({
            array:arr
        })
    }

    bubbleSort = () => {
        console.log("called bubble sort")
        removeButton();
        const animations = getBuubleSortAnimations(this.state.array);
        performAnimation(animations).then(document.querySelector('#clear').disabled = false)
        
    }

    selectionSort = () => {
        console.log("called selection sort")
        removeButton();
        const animations = getSelectionSortAnimations(this.state.array);
        performAnimation(animations).then(document.querySelector('#clear').disabled = false)
    }

    insertionSort = () => {
        console.log("called insertion sort")
        removeButton();
        const animations = getInsertionSortAnimations(this.state.array);
        performAnimation(animations).then(document.querySelector('#clear').disabled = false)

    }

    mergeSort = () => {
        removeButton();
        const animations = getMergeSortAnimations(this.state.array);
        performAnimation(animations).then(document.querySelector('#clear').disabled = false)

    }

    clear = () => {
        window.location.reload(false); 
        return false;
    }

  render() {
    
    return (

        <div className = "TotalContainer">
            <h2 className = "heading" >ALGORITHM VISUALIZER</h2>

            <div className = "mainContainer">
                <div className = "arrayContainer">

                    {this.state.array.map((val,idx) => (
                        <div 
                            className = "bar" 
                            key = {idx} 
                            style = {{
                                backgroundColor: PRIMARY_COLOR,
                                height: `${val}px`
                            }}> 
                        </div>
                    ))}
                    
                </div>

                <div className = "btnContainer">
                    <h2 className = "btnh2"> Sorting Algorithm Visualizer</h2>
                    <button id = "newArray" className = "btn" onClick = {this.generateNewArray} >Generate New Array</button>
                    <button id = "bubble" className = "btn" onClick = {this.bubbleSort}  >Bubble Sort</button>
                    <button id = "selection" className = "btn" onClick = {this.selectionSort}  >Selection Sort</button>
                    <button id = "insertion" className = "btn" onClick = {this.insertionSort}  >Insertion Sort</button>
                    <button id = "merge" className = "btn" onClick = {this.mergeSort}  >Merge Sort</button>
                    <button id = "clear" className = "btn" onClick = {this.clear}  >Clear</button>
                    <p>
                    <h2 className = "complexity"> Time Complexity</h2>

                    <table className = "tableDetails">
                        <tr>
                            <th>Algorithm</th>
                            <th>Best Case</th>
                            <th>Worst Case</th>
                        </tr>
                        <tr>
                            <td>Bubble Sort</td>
                            <td>O(n^2)</td>
                            <td>O(n^2)</td>
                        </tr>
                        <tr>
                            <td>Selection Sort</td>
                            <td>O(n^2)</td>
                            <td>O(n^2)</td>
                        </tr>
                        <tr>
                            <td>Insertion Sort</td>
                            <td>O(n^2)</td>
                            <td>O(n^2)</td>
                        </tr>
                        <tr>
                            <td>Merge Sort</td>
                            <td>O(n log(n))</td>
                            <td>O(n log(n))</td>
                        </tr>
                    </table>
                    </p>
                </div>
            </div>
        </div>
    )
  }
}
