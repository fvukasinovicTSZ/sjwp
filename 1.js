// niz od 10 brojeva (bubble sort)

let arr = [5, 3, 8, 4, 2, 1, 7, 6, 10, 9];

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - 1; j++) {

        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);