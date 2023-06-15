function xTimes(string, times) {
  for (let i = 0; i < times; i += 1) {
    console.log(' '.repeat(i) + string);
  }
}

xTimes('The Flintstones Rock!', 10);