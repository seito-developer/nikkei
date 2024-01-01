const findMax = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    console.log(max);
}

// 使用例
findMax([12, 6, 25, 8, 17]);