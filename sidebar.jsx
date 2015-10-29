// Storage Hash + EventEmitter
var segmentsStore = require('./segments_store');

var sidebar = React.createClass({
  
  getInitialState: function  () {
    return {
      segmentsCount: segmentsStore.getCount()
    };
  },

  componentDidMount: function () {
    // Subscribe to the segmentsStore updates
    segmentsStore.on('saveSegment:success', (s) => {
      // Set the state of this component on each change
      this.setState({ segmentsCount: segmentsStore.getCount() });
    });

    segmentsStore.on('saveSegment', (s) => {
      $.notify({ message: 'Saving segment...' });
    });

    segmentsStore.on('saveSegment:error', (err) => {
      $.notify({ message: err.message });
      // Note the absence of a .setState call
    });
  },

  render: function () {
    return (
      <ul>
        <li>Segments: { this.state.segmentsCount }</li>
        <li>Vendors</li>
        <li>Feeds</li>
      </ul>
    );
  }
});

module.exports = sidebar;
