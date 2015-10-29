// import Segment from './segment';
// import FluxEventEmitter from  'flux'

class SegmentsStore extends FluxEventEmitter {
  
  constructor() {
    this.segments = {};
  }

  bindActions (actions) {
    this.on(actions.saveSegment, this.onSaveSegment);
    this.on(actions.deleteSegment, this.onDeleteSegment);
  }

  onSaveSegment (segmentProperties) {
    // Instantiates a new object of type Segment with a unique id
    var segment = new Segment(segmentProperties);
    this.segments[segment.id] = segment;
    this.emit('change', segment);
    $.post('/segments', segment)
      .done(() => {
        this.emit('saveSegment:success', segment);
      })
      .fail((err) => {
        this.emit('saveSegment:error', err);
      });
    this.emit('saveSegment', segment);
  }

  onDeleteSegment (s) {
    // Code goes here...
  }

  getState () {
    return this.segments;
  }

  getCount () {
    return Object.keys(this.getState()).length;
  }

}
