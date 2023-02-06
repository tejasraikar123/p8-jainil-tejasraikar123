//Input 1: A = [1, 2, 3, 4, -10]
//Output 1: 10 
//Explanation 1: The subarray [1, 2, 3, 4] has 
//the maximum possible sum of 10.
//Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
//Output 2: 6 Explanation 2: The subarray [4,-1,2,1] 
//has the maximum possible sum of 6.

function maxSubArraySum(arr,size)
{
    let max_ending_here =0, max_so_far = Number.MIN_VALUE;
    for(let i = 0; i < size; i ++){
        if(arr[i] <= max_ending_here + arr[i]) {
            max_ending_here += arr[i];
        }

        //else start max subarray from current element 
else{
    max_ending_here = arr[i];
}
if(max_ending_here > max_so_far){
    max_so_far = max_ending_here;
}
}
return max_so_far;
    }

    var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
    console.log("Maximum contiguous sum is",
                   maxSubArraySum(a, a.length));