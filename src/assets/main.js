$(function() {

  // your code will go here
   $.ajax({
    url: 'https://www.codeschool.com/users/2467134.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var $completedCourses = response.courses.completed;
      $.each($completedCourses, function(index, value) {
          var course = $('<div class="course" />');
          console.log(value);
          var courseTitle = $('<h3 />').text(value.title);
          course.append(courseTitle);
          course.append($('<img />').attr('src', value.badge));
          course.append($('<a />')
          .attr(
              {
                  href: value.url,
                  target: '_blank'
              })
              .addClass('btn btn-primary')
              .text('See Course'));
          $('#badges').append(course);
      });
    }
  });


});
