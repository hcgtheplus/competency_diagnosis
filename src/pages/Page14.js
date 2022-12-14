import page_13_sub_image from "../image/sub-image/page-13/page-13-sub-image.png";
import page_13_sub_image_4 from "../image/sub-image/page-13/page-13-sub-image-4.png";
import page_13_sub_image_2 from "../image/sub-image/page-13/page-13-sub-image-2.png";
import page_13_sub_image_3 from "../image/sub-image/page-13/page-13-sub-image-3.png";


export default function Page() {
  return (
    <div className="image-container page 14 pr">
      <div className="page-absolute">14 / 36</div>
      <div className="page 13">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="user-info">
              <div className="sub-title">소속:</div>
              <div className="department">미래 전략 기획부</div>

              <div className="sub-title">직책:</div>
              <div className="duty">부장</div>

              <div className="user-name">홍길동</div>
            </div>

            <div className="title-container">
              <div className="top-line"></div>
              <h4 className="main-title">Summary 리더십 유형</h4>
              <hr className="bottom-line" />
            </div>

            <div className="w-100 flex h1207">
              <div className="w-50 h-100 flex jcs left-container mt50">
                <div className="flc fc">
                  <div className="page-13-sub-image-1">
                    <img
                      style={{ width: 370 }}
                      src={page_13_sub_image}
                      alt="page_13_sub_image"
                    />
                  </div>

                  <div className="p0-27 mt50">
                    <div className="pr-title">나의 리더십 유형</div>

                    <div className="text-container">
                      <div className="mb30 mt30">
                        <div className="flc jcs">
                          <img
                            className="w250px"
                            src={page_13_sub_image_2}
                            alt="page_13_sub_image_2"
                          />
                        </div>
                        <div className="main-sub-title mb10">특징</div>
                        <ul>
                          <li>
                            구성원들의 정서적인 측면(지지행동)과 업무 목표
                            달성(지시행동)에 모두 집중하는 유형입니다.
                          </li>
                        </ul>
                      </div>

                      <div className="mb30">
                        <div className="main-sub-title mb10">강점</div>
                        <ul>
                          <li>
                            직원을 인격적으로 존중하고, 긴밀한 유대관계
                            형성합니다.
                          </li>
                        </ul>
                        <ul>
                          <li>
                            적절한 지시, 통제, 업무권한 위임을 통해 성과를
                            달성합니다.
                          </li>
                        </ul>
                      </div>

                      <div className="mb30">
                        <div className="main-sub-title mb10">주의할 점</div>
                        <ul>
                          <li>
                            직원들의 직무 발단 단계에 따른 지시행동&지지행동의
                            비중 조절이 필요합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-50 h-100 flex jcs mt50">
                <div className="flc fc">
                  <div className="page-13-sub-image-1">
                    <img
                      style={{ width: 370 }}
                      src={page_13_sub_image_4}
                      alt="page_13_sub_image_4"
                    />
                  </div>

                  <div className="p0-27 mt50">
                    <div className="pr-title">나의 리더십 스타일</div>

                    <div className="text-container">
                      <div className="mb30 mt30">
                        <div className="flc jcs">
                          <img
                            className="w250px"
                            src={page_13_sub_image_3}
                            alt="page_13_sub_image_3"
                          />
                        </div>
                        <div className="main-sub-title mb10">특징</div>
                        <ul>
                          <li>
                            구체적인 계획 하에 조직을 안정적으로 운영하며,
                            발생가능한 갈등을 최소화합니다.
                          </li>
                        </ul>
                      </div>

                      <div className="mb30">
                        <div className="main-sub-title mb10">강점</div>
                        <ul>
                          <li>과업 배분 및 분쟁 조정 능력이 뛰어납니다.</li>
                          <li>
                            목표 설정 및 달성 과정에서의 조정능력이 뛰어납니다.
                          </li>
                        </ul>
                        <ul>
                          <li>
                            적절한 지시, 통제, 업무권한 위임을 통해 성과를
                            달성합니다.
                          </li>
                        </ul>
                      </div>

                      <div className="mb30">
                        <div className="main-sub-title mb10">주의할 점</div>
                        <ul>
                          <li>변화에 대한 수용 및 적응이 필요합니다.</li>
                        </ul>
                      </div>
                    </div>
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