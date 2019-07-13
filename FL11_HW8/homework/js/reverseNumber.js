function reverseNumber (num) {
    let remNum = num;
    let revNum = 0;
    let lastNum;
    while (remNum>0) {
        lastNum = remNum % 10;
        revNum = revNum * 10 + lastNum;
        remNum = Math.floor(remNum/10);
    }
    return revNum;
}
  
console.log(reverseNumber(24156));