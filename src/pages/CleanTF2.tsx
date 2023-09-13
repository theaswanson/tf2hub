import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import CompareImg1Normal from "/img/cleantf2/1-normal.jpg";
import CompareImg1Flat from "/img/cleantf2/1-flat.jpg";
import CompareImg2Normal from "/img/cleantf2/2-normal.jpg";
import CompareImg2Flat from "/img/cleantf2/2-flat.jpg";
import CompareImg3Normal from "/img/cleantf2/3-normal.jpg";
import CompareImg3Flat from "/img/cleantf2/3-flat.jpg";

import "./CleanTF2.scss";

function CleanTF2() {
  return (
    <div className="clean-tf2">
      <div className="welcome">
        <h1 className="title">CleanTF2</h1>
        <div
          className="text"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>A mod that provides a cleaner look.</div>
          <div>
            <a href="https://github.com/theaswanson/CleanTF2/releases">
              Download
            </a>
          </div>
          <div>
            <a href="https://github.com/theaswanson/CleanTF2" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="image-compare">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={CompareImg1Normal} />}
          itemTwo={<ReactCompareSliderImage src={CompareImg1Flat} />}
        />
      </div>
      <div className="image-compare">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={CompareImg2Normal} />}
          itemTwo={<ReactCompareSliderImage src={CompareImg2Flat} />}
        />
      </div>
      <div className="image-compare">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={CompareImg3Normal} />}
          itemTwo={<ReactCompareSliderImage src={CompareImg3Flat} />}
        />
      </div>
    </div>
  );
}

export default CleanTF2;
