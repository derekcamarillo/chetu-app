export async function* InsertionSort(array, swap, highlight, markSort){
    for(let i = 0; i<array.length; i++){
        let keyIndex = i;
        for(let j = i-1; j>=0; j--){
            yield await highlight([keyIndex, j]);
            if(array[j] > array[keyIndex]){
                yield await swap(j, keyIndex);
                keyIndex = j;
            }
            else{
                yield;
                break;
            }
        }
    markSort(i);
    yield;
    }
}