module.exports = function check(str, bracketsConfig) {
    let newArr = str.split("");
    let newArrLength = newArr.length;
    let stackArr = [];
      for (let i = 0; i < newArrLength; i++) {
        stackArr.push(newArr[i]);
          if (stackArr.length > 1) {
              let sample = stackArr.slice(-2)
                  for (let j = 0; j < bracketsConfig.length; j++) {
                      if (JSON.stringify(sample) === JSON.stringify(bracketsConfig[j])) {
                          stackArr.splice(-2);
                      }
                  }
          }
      }
    return stackArr.length === 0 ? true : false;
  }