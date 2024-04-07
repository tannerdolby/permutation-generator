// O(N! * N) time | O(N! * N) space
export default function getPermutations(array) {
    let permutations = [];
    getPermutationsHelper(0, array, permutations);
    return permutations;
}

function getPermutationsHelper(i, array, permutations) {
    if (i == array.length-1) {
        permutations.push(Array.from(array));
    } else {
        for (let j=i; j < array.length; j++) {
            swap(array, i, j)
            getPermutationsHelper(i+1, array, permutations);
            swap(array, i, j)
        }
    }
}

function swap(array, i , j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
