var separate_time = function(time){
  var sec   = ((time / 1000) % 60);
  var min   = ((time / 1000 / 60) % 60);
  var hours = ((time / 1000 / 60 / 60) % 24);
  var days  = ( time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var update = function(){
  var now = new Date();
  var target = new Date(2020,7,24,0,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
  document.getElementById('countdown').textContent =
    '東京オリンピックまであと'
    counter[3] + '日' +
    counter[2] + '時' +
    counter[1] + '分' +
    counter[0] + '秒' ;
  refresh();
}

var refresh= function(){
  setTimeout(update, 1000);
}
update();
