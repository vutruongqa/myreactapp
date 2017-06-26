var React = require('react');

//var About = React.createClass({
//    render: function(){
//        return (
//            <h1>About component</h1>
//        );
//    }
//});


var About = (props) => {
        return (
            <div>
                <h1>About component</h1>
                <p>Welcome the About page</p>
            </div>
            
        );
};

module.exports = About;