var currentSegmentsCount;

$('.save-button').on('click', function (ev) {
  // Increment Sidebar
  var $sidebarItem1 = $('.sidebar-item').eq(1);
  currentSegmentsCount = parseInt($sidebarItem1.text());
  currentSegmentsCount++;
  $sidebarItem1.text(currentSegmentsCount);

  // Display notification
  $.notify({
    message: 'You have saved a segment!'
  });

  // Tell server that the segment has changed
  $.post('/segments', { segments: { segmentData } });
});
