import page_25_image_01 from "../image/sub-image/page-27/page-25-image-01.png";
import page_25_image_02 from "../image/sub-image/page-27/page-25-image-02.png";

export default function Page() {
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
                      <li>
                        포용력 있게 합리적으로 팀원을 관리/지휘하며, 조직의
                        이익을 위해 최선을 다함
                      </li>
                      <li>
                        일상적인 의사소통 시 부서원과 격의 없이 소통하여 부서에
                        업무 외적으로 불필요한 긴장감을 조성하지 않음
                      </li>
                      <li>모든 점에서 최고의 리더이신 것 같음.</li>
                      <li>축적된 업무 경험과 수평적 사고를 보유함</li>
                      <li>온화하고 부드러운 리더십을 보유함</li>
                    </ul>
                  </div>
                  <div className="right-section">
                    <h5 className="mt30">미흡한 점</h5>
                    <img src={page_25_image_02} alt="page_25_image_02" />
                    <ul className="mt10">
                      <li>
                        업무 시 의사결정기준이 하급자 눈에 명확히 보이지 않아
                        참고하거나 배우기 어렵고, 부서원들 사이에 같은 업무라도
                        실무자에 따라 부서장 챌린지가 다르다는 불만이 있음
                      </li>
                      <li>
                        기존 조직의 관성으로 상급자에 대하여 위축되거나 격식을
                        의식하시는듯한데, 편하게 의사소통하면 좋을듯함
                      </li>
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
