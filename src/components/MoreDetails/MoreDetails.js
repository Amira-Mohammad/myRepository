import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './MoreDetails.css';
class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedID: null,
      MoreDetails: [
        {
          id: "1",
          lessonIcon: "",
          NoOfLessons: "19 LESSONS",
          exclusiveIcon: "",
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "LESSON HINT of SIMONE BILES",
          exclusiveHint: "Exclusive hint of SIMONE BILES ",
          src:"../../images/SIMONE BILES.jpg",
          altText: 'first author',
          ImgSource:""
        },
        {
          id: "2",
          lessonIcon: "",
          NoOfLessons: "17 LESSONS",
          exclusiveIcon: "",
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "LESSON HINT of MASSIMO BOTTURA",
          exclusiveHint: "Exclusive hint of MASSIMO BOTTURA",
          src:"../../images/MASSIMO BOTTURA.jpg",
          altText: 'second author',
          ImgSource:""
        },
        {
          id: "3",
          lessonIcon: "",
          NoOfLessons: "13 LESSONS",
          exclusiveIcon: "LESSON HINT of WOLFGANG PUCK",
          exclusivePercentage: "100% EXCLUSIVE",
          lessonHint: "500$",
          exclusiveHint: "Exclusive hint of WOLFGANG PUCK",
          src:"../../images/WOLFGANG PUCK.jpg",
          altText: 'third author',
          ImgSource:""
        }
      ],
      selectedItem: {}
    }
  }

  componentDidMount() {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    let selectedItem = this.state.MoreDetails.find((item) => item.id == id)
    this.setState({
      selectedID: id,
      selectedItem: selectedItem
    })
  }

  render() {
    let { selectedItem } = this.state;
    return (
      
      <div className="MoreDetails">
      <div className="writerImage" ></div>

      <div className="MoreDetail" >
        <div className="camera">
          <i>icon</i><br />
          <div className="lessonNo">{selectedItem.NoOfLessons}</div>
          <div className="lessonHint">{selectedItem.lessonHint}</div>
        </div>


        <div className="cup">
        <i>icon</i><br />
          <div className="exclusivePercentage">{selectedItem.exclusivePercentage}</div>
          <div className="exclusiveHint">{selectedItem.exclusiveHint}</div>
        </div>


        <div className="getstarted">
          <div>Get started now</div><br />
          <Button color="danger" size="lg" block> GET STARTED </Button>
          <div className="price" >Price</div>
          <div className="or">OR</div>
          <div className="buttons">
            <Button className="button1" color="secondary" size="lg" > SINGLE CLASS </Button>{" "}
            <Button className="button2" color="danger" size="lg" > GIFT </Button>
          </div>
        </div>
        </div>

      </div>
    )

  }

}

export default MoreDetails;

