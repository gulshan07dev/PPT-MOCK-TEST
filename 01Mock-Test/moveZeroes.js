function moveZeroes(nums) {
    let no_of_zero = 0;
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            no_of_zero++;
        } else {
            ans.push(nums[i]);
        }
    }
    
    // Append zeros at the end
    for (let i = 0; i < no_of_zero; i++) {
        ans.push(0);
    }
    
    // Modify the original array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i];
    }
    
    return nums; // or return ans; if you prefer the modified array
}