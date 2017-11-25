/* eslint-disable */
class Heap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    // Inserts the given value in the heap
    // Calls bubbleUp in order to put the newly-inserted element in the right place in the heap
    insert(val) {
        this.storage.push(val);
        this.size++
        for (let index = Math.floor((this.size -1)/2); index >= 0; index--) {
            this.bubbleUp(index);
        }
        return this;
    }
    // Deletes the element located at the front of the heap (the max if a max heap, or a min if a min heap)
    // Calls siftDown in order to reorganize the heap with a new max/min
    // In some specifications, this method is also called `poll`
    delete() {
        let deleted = this.storage.splice(0,1);
        this.size--;
        for (let index = Math.floor((this.size -1)/2); index >= 0; index--) {
            this.siftDown(index);
        }
        return deleted[0];
    }
    // Returns the maximum value in the heap in constant time
    getMax() {
        return this.storage[0];
    }
    // Returns the size of the heap
    getSize() {
        return this.size;
    }
    // Returns the storage array
    getStorage() {
        return this.storage;
    }
    // Moves the element at the specified index "up" by swapping it with its parent 
    // if its parent value is less than the value located at the input index
    // This method is only used by the heap itself in order to maintain the heap property
    bubbleUp(index) {
        const arr = this.storage;
        let max;
        if (!arr[2*index+2] && !arr[2*index+1]) return arr;
        if (arr[2*index+2]) {
            max = Math.max(arr[index],arr[2*index+1],arr[2*index+2]);
        } else {
            max = Math.max(arr[index],arr[2*index+1]);
        }
        if(arr[2*index+1] === max) {
            arr[2*index+1] = arr[index];
            arr[index] = max;
        } if (arr[2*index+2] === max) {
            arr[2*index+2] = arr[index];
            arr[index] = max;
        }
        return arr;
    }
    // First grabs the indices of this element's children and determines which of the children are larger
    // If the larger of the child elements is larger than the parent, the child element is swapped with the parent
    // This method is only used by the heap itself in order to maintain the heap property
    siftDown(index) {
        const arr = this.storage;
        let max;
        if (!arr[2*index+2] && !arr[2*index+1]) return arr;
        if (arr[2*index+2]) {
            max = Math.max(arr[index],arr[2*index+1],arr[2*index+2]);
        } else {
            max = Math.max(arr[index],arr[2*index+1]);
        }
        if(arr[2*index+1] === max) {
            arr[2*index+1] = arr[index];
            arr[index] = max;
        } if (arr[2*index+2] === max) {
            arr[2*index+2] = arr[index];
            arr[index] = max;
        }
        return arr;
    }
}


module.exports = Heap;
