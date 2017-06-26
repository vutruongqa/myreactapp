var React = require('react');

//var WeatherMessage = React.createClass({
//    render: function(){
//        var {temp,location} = this.props;
//        return (
//            <h1>It's {temp} in {location}.</h1>
//        );
//    }
//});

var WeatherMessage = (props) => {
    return (
            <h4 className="text-center">It's {props.temp} &#176;C in {props.location}.</h4>
        )
};

module.exports = WeatherMessage;