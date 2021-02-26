import React, { Component } from "react";
import PictureList from "./components/pictureList/pictureList";
import Picture from "./components/picture/picture";
import "./App.scss";
import "./components/picture/picture.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pictureList: [],
      showSelectedPicture: false,
      selectedPicture: "",
    };
  }
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((pictureListData) => {
        this.setState({ pictureList: pictureListData });
      })
      .catch((err) => console.log(err));
  }

  onClickImage = (imageUrl = "") => {
    this.setState({
      showSelectedPicture: !this.state.showSelectedPicture,
      selectedPicture: imageUrl,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showSelectedPicture && (
          <div className="selected-picture" onClick={this.onClickImage}>
            <div className="selected-picture__frame">
              <Picture
                pictureUrl={this.state.selectedPicture}
                onClickImage={this.onClickImage}
              />
            </div>
          </div>
        )}
        <PictureList
          pictureList={this.state.pictureList ? this.state.pictureList : null}
          onClickImage={this.onClickImage}
        />
      </div>
    );
  }
}

export default App;
