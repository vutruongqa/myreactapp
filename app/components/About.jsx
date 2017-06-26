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
                <h1 className="text-center">About</h1>
                <p>This is a weather page build on React. I have built this for complete react application web course</p>
                <p>Here are some of the tool i use</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react" target="_blank">React</a> This is javascript framework used
                    </li>
                    <li>
                        <a href="https://openweathermap.org" target="_blank">Open Weather Map</a> I used it to search weather data for city name
                    </li>
                </ul>
            </div>
            
        );
};

module.exports = About;