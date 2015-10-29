var segments = [
  segment1
];

var vendors = [
  vendor1
];

var segment2 = new Segment();
var vendor2 = new Vendor();

$.post('/segments', segment2, (res) => {
  segments.push(segment2);
});

$.post('/vendors', vendor2, (res) => {
  segments.push(vendor2);
});

$.get('/vendors', (res) => {
  // update client-side state with server
  segments = res.segments;
});

$.get('/segments', (res) => {
  // update client-side state with server
  vendors = res.vendors;
});
