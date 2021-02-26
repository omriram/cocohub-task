import React, { Component } from "react";
import "animate.css";
import "./picture.scss";

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "loading",
    };
  }

  onImageLoading = () => {
    this.setState({ imageStatus: "loaded" });
  };

  render() {
    const { pictureUrl, onClickImage } = this.props;
    const { imageStatus } = this.state;
    let styles = "picture__img";
    if (imageStatus === "loaded") {
      styles = "picture__img show-picture";
    }
    return (
      <div className="picture">
        <img
          src={pictureUrl}
          alt="picture"
          className={styles}
          onClick={() => onClickImage(pictureUrl)}
          onLoad={this.onImageLoading}
          loading="lazy"
        />
        {imageStatus === "loading" && (
          <span className="picture__loading">loading...</span>
        )}
      </div>
    );
  }
}

export default Picture;
