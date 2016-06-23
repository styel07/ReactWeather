var React = require('react');

var WeatherMessage = ({temp,location}) => {
  return (
    <h4>It is {temp} in {location}</h4>
  );
}

module.exports = WeatherMessage;

// var WeatherMessage = React.createClass({
//
//   render: function() {
//     var {temp,location} = this.props;
//
//     return (
//       <h4>It is {temp} in {location}</h4>
//     );
//   }
// });
