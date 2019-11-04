import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import './Details.css';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  

  render() {
    return (
      <div className="Details">

        {this.props.dataLists.map((item, index) => {
          if (this.props.id == index) {
            return (
              <ul key={index}>
                <li className="writerName">{item.writerName}</li>
                <li className="Spcialization" >{item.Spcialization}</li>
                <li className="hint" >{item.hint}</li>
                <li className="price" >{item.price}/month (billed annually)</li>
                <Button color="danger" size="lg" > GET STARTED </Button>
              </ul>
            )
          }
        })}

      </div>
    );

  }

}

export default Details;

/* Details component
<div>Author</div>
<div>Title</div>
<div>Description</div>
<div>Price</div> */