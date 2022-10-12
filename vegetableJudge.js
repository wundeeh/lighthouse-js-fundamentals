const judgeVegetable = function(vegetables, metric) {
  var max = 0, position = 0, i = 0;
 
  for(i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric]> max) {
      max = vegetables[i][metric];
      position = i;
    }
  }
  return vegetables[position].submitter;
}