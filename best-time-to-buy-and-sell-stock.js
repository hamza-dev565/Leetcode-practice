/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let startPointer = 0
  let nextPointer = 1
  const totalLength = prices.length
  let totalProfit = 0

  while(nextPointer < totalLength){
    const diff = prices[nextPointer] - prices[startPointer]
    console.log('this is diff', diff,'nextPointer',prices[nextPointer],'startPointer',prices[startPointer], totalLength)
    if(diff > 0){
      totalProfit += diff
      startPointer = nextPointer + 1
      nextPointer = nextPointer + 2
    }
    else{
      startPointer++
      nextPointer++
    }
  }
  return totalProfit
};




console.log(maxProfit([7,6,4,3,1]))
