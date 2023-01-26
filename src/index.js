module.exports = function reverse(nums) {
    let string = '';
    nums = nums.toString();
    let i = 1;
    while (i < (nums.length + 1)) {
        string = string + nums[nums.length - i];
        i++;
    }

    if (string[string.length - 1] === '-') {
        let string1 = ''
        i = 0;
        while (i < nums.length - 1) {
            string1 = string1 + string[i];
            i++;
        }
        return +string1;
    } else {
        return +string;
    }

}