class medianFinder{
  constructor(){
    this.arr = []
  }

  addNum(num) {
    this.arr.push(num)
  }

  findMedian() {
    // if it is odd use the middle number as the median
    // middleNum = this.arr.length / 2
    const middleNum = this.arr.length / 2

    if (this.arr.length % 2 !== 0) {
        return middleNum
    } else {
        // [2, 4, 3, 5]
        // (4 + 3) / 2
        // len = 4
        // 4 / 2
        const secondMiddleNum = this.arr.length / 2
        const secondNum = this.arr[secondMiddleNum]
        const firstNum = this.arr[secondMiddleNum - 1]
        return ((firstNum + secondNum) / 2)
    }
  }
}

const med = new medianFinder()
med.addNum(2)
med.addNum(4)
med.addNum(3)
med.addNum(5)
console.log(med.findMedian())