import page_25_image_01 from "../image/sub-image/page-27/page-25-image-01.png";
import page_25_image_02 from "../image/sub-image/page-27/page-25-image-02.png";

export default function Page({ data }) {
  const 강점텍스트 = data[0].Column6.split("\n");
  const 미흡텍스트 = data[0].Column9.split("\n");
  return (
    <div className="image-container page 26 pr">
      <div className="page-absolute">26 / 36</div>
      <div className="page 25">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="title-container">
              <div className="top-line"></div>
              <div className="top-line"></div>
              <div className="flex ab sb">
                <h4 className="main-title">주관식 응답</h4>
              </div>
              <hr className="bottom-line" />
              <div className="w-100 pt30">
                <h5 className="mb10">리더십 진단</h5>
                <div className="page-25-container">
                  <div className="left-section">
                    <h5 className="mt30">강점</h5>
                    <img src={page_25_image_01} alt="page_25_image_01" />
                    <ul className="mt10">
                      {강점텍스트.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="right-section">
                    <h5 className="mt30">미흡한 점</h5>
                    <img src={page_25_image_02} alt="page_25_image_02" />
                    <ul className="mt10">
                      {미흡텍스트.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
