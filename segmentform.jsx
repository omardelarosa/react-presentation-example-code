// Action Collector + Dispatcher
var actions       = require('./action_dispatcher');

var segmentForm = React.createClass({
  
  handleSave: function (ev) {
    // enqueue a new Action with the dispatcher
    actions.saveSegment(this.state.segment);
    
    // clear form
    this.setState({ 
      segment: null 
    });
  },

  render: function () {
    return (
      <form>
        <input onChange={this.handleChange } value={this.state.segment} />
        <button onClick={ this.handleSave }>Save</button>
      </form>
    );
  }
});

module.exports = segmentForm;
