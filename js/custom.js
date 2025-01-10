$(function() {
    var repeat = 1;var ch = 0;var item = 0;var items = $('#caption li').length;var time = 200;var delay = 100;var wait = 2000;var eraseTime = 100;
    $('#showCaption').css('width', ($('#caption').width() + 20));
    function tickInterval() { if(item < items) {var text = $('#caption li:eq(' + item + ')').text();
            type(text, function() {erase(function() {item++;ch = 0;time = 200;tickInterval();});});
        } else {if(repeat == 1) {ch = 0;item = 0;tickInterval();}}}
    function type(text, callback) {
        $('#showCaption').html(text.substr(0, ch++));if(ch <= text.length) {setTimeout(function() {type(text, callback);}, delay);
        } else {setTimeout(callback, wait);}}
    function erase(callback) {if(ch > 0) {$('#showCaption').html($('#caption li:eq(' + item + ')').text().substr(0, ch--));setTimeout(function() {
                erase(callback);}, eraseTime);} else {callback();}}
    var tick = setTimeout(tickInterval, time);
});