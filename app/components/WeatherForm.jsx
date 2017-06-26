var React = require('react')

var WeatherForm = React.createClass({
    
   onFormSubmit: function(e){
        e.preventDefault();
        var inputLocation = this.refs.location.value;
        if(inputLocation.length > 0){
            this.refs.location.value ='';
            this.props.onSearch(inputLocation);
        }     
   },    
   render: function(){
       return(
           <div>
               <form onSubmit={this.onFormSubmit}>
                   <input type="search" ref="location" placeholder="Search weather by city"/> 
                   <button className="hollow button expanded">Get Weather</button>
               </form>
           </div>
       );
    } 
});

module.exports = WeatherForm;