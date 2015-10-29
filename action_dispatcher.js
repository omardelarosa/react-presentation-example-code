var store  = require('./segments_store');

var Actions = {

  saveSegment: function (segmentProperties) {
    store.dispatch('SAVE_SEGMENT', segmentProperties);
  },

  deleteSegment: function (segmentProperties) {
    store.dispatch('DELETE_SEGMENT', segmentProperties);
  }

};

module.exports = store.bindActions(Actions);
