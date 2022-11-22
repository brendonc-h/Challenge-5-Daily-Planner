$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
      // get values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // save the items into the local storage
      localStorage.setItem(time, value);
  
      // Notification that item was saved to localStorage by adding class 'show'
      $('.notification').addClass('show');
  
    });
  
    function hourUpdater() {
      // get current number of hours for the day
      var currentHour = moment().hours();
  
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data stored in the localStorage
    $('#hour-8 .description').val(localStorage.getItem('hour-8'))
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
  
