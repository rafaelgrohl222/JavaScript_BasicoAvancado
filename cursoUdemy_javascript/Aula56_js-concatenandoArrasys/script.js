/**
 * Concatenando Arrays (concat)
 */
 console.log('<---Arrays (concat)--->');
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = nums1.concat(nums2,[7, 8, 9],'Luiz');//nums1 concatenando com nums2
console.log(nums3);

console.log('');//espaço

//... rest -> spread (espalha)
console.log('<---... rest -> spread (espalha)--->');
const nums4 = [...nums1, ...nums2];
console.log(nums4);