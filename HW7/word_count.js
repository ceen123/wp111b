function countWords(list) {
  var countMap = {};

  for (var i = 0; i < list.length; i++) {
    var word = list[i];
    if (countMap[word]) {
      countMap[word] += 1;
    } else {
      countMap[word] = 1;
    }
  }

  return countMap;
}

var list = ['a', 'dog', 'chase', 'a', 'cat'];
var cmap = countWords(list);
console.log(cmap);
