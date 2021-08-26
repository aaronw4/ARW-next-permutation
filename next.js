var nextPermutation = function(nums) {
    let pointer = nums.length - 2

    while (pointer >= 0) {
        let tempArr = []

        for (i = pointer + 1; i < nums.length; i++) {
            if (nums[i] > nums[pointer]) {
                tempArr.push(i)
            }
        }

        if (tempArr.length === 1) {
            let copy = [...nums]
            nums[pointer] = copy[tempArr[0]]
            nums[tempArr[0]] = copy[pointer]

            let secondPart = nums.slice(pointer + 1, nums.length)
            secondPart.sort((a,b) => a-b)
            pointer++
            index2 = 0

            while (pointer < nums.length) {
                nums[pointer] = secondPart[index2]
                index2++
                pointer++
            }

            return nums
        }

        if (tempArr.length > 1) {
            let copy = [...nums]
            let index = tempArr[0]

            for (i = 1; i < tempArr.length; i++) {
                if (nums[tempArr[i]] < nums[index]) {
                    index = tempArr[i]
                }
            }

            nums[pointer] = copy[index]
            nums[index] = copy[pointer]
            
            let secondPart = nums.slice(pointer + 1, nums.length)
            secondPart.sort((a,b) => a-b)
            pointer++
            index2 = 0

            while (pointer < nums.length) {
                nums[pointer] = secondPart[index2]
                index2++
                pointer++
            }

            return nums
        }

        pointer--
    }

    return nums.sort((a,b) => a-b)
};

console.log(nextPermutation([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]))