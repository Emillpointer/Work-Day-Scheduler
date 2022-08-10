var timeDisplayEl = $('#currentDay');

function displayTime() {
    var todaysDate = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(todaysDate);
  }
  displayTime()
  
  function timeUpdate() {
    var rightNow = moment().hours();
    $('.timeblocks').each(function(){
      var thisHour = parseInt($(this).attr("id").split('-')[-1])
      if(thisHour < rightNow){
        $(this).addClass('past')
      }else if(thisHour === rightNow){
        $(this).removeClass('past')
        $(this).addClass('present')

      }else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    });
  }
timeUpdate();
var container = $('.container');

console.log(container.attr('data-time'));

//getItem setItem
//var for the value of description box