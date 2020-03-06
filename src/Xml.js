import React, {Component} from 'react';
import axios from 'axios';
import '/Sample.xml'


class Xml extends Component {
constructor(props){
  super();
  this.state = {val:null}
}

componentDidMount()
    
{

axios.get('/Sample.xml')
.then(response => {
console.log(response);
this.setState({val:response.data});

});


}


render()
{
  return(
<div>
sd
</div>

  )
}

}


export default Xml;