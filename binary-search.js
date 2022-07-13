function linearSearch (arr, target) {

  // Can you solve this in one line?
  //return arr.indexOf(target);

  // return arr.reduce(
  //   (targetIndex, element, index) => {
  //     if (element === target) {
  //       return index;
  //     } else {
  //       return targetIndex;
  //     }
  //   }, -1
  // );

  for (let i = 0; i < arr.length; i++) {if (arr[i] === target) {return i}} return -1;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (hi >= low && low <= hi) {

    // Find the midpoint between high and low indices
     let mid = Math.floor((hi + low) / 2);

    // Compare the target value to the midpoint value
    if (arr[mid] === target) {
      // If the target equals the midpoint...
      // Return the midpoint index
      return mid;
    }

    if (arr[mid] < target) {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      low = mid + 1;
    }

    if (arr[mid] > target){
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;

}


module.exports = [linearSearch, binarySearch]
