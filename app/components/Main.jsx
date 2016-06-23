var React = require('react');
var Navbar = require('Navbar');
var About = require('About');
var Weather = require('Weather');
var Examples = require('Examples');

var Main = (props) => {
  return (
    <div>
      <Navbar/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Navbar/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });
