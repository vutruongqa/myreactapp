var React = require('react');
var {Link} = require('react-router');

//var Examples = React.createClass({
//    render: function(){
//        return (
//            <h1>Examples component</h1>
//        );
//    }
//});

var Examples = (props) => {
    return (
            <div>
                <h1 className="text-center">Examples component!</h1>
            <p>Here are few examples to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Philadenphia'>Philadenphia, PA</Link>                    
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
            </div>
        )
};

module.exports = Examples;