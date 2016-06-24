var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Try out these locations</p>
      <ol>
        <li>
          <Link to="/?location=San Francisco">San Francisco</Link>
        </li>
        <li>
          <Link to="/?location=London">London</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
