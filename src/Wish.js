import React,{Component} from 'react';


class Wish extends Component {
     state = { }
    
    render() { 
        let currentDate = new Date();
        currentDate = currentDate.getHours()
        let greet = "";
        const cssStyle = {};


        if(currentDate >= 1 && currentDate < 12){
            greet = "Good Morning";
            cssStyle.color = "green";
        } else if (currentDate >= 12 && currentDate < 7){
            greet = "Good Evening";
            cssStyle.color = "orange";
        } else {
            greet = "Good Night";
            cssStyle.color = "blue";
        }

        return ( 
        <div> 
            <h1>Hello sir,<span style={cssStyle}> {greet} ! </span> </h1>
        </div>
            
         );
    }
}
 
export default Wish;
