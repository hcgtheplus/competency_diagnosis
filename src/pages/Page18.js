import page_17_sub_image_1 from "../image/sub-image/page-17/page-17-sub-image-1.png";
import page_17_sub_image_2 from "../image/sub-image/page-17/page-17-sub-image-2.png";
import page_17_sub_image_3 from "../image/sub-image/page-17/page-17-sub-image-3.png";

export default function Page() {
  return (
    <div className="image-container page 18 pr">
      <div className="page-absolute">18 / 36</div>
      <div className="page 17">
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
              <div>
                <div className="flex ab sb">
                  <h4 className="main-title">Summary 리더십 진단 결과</h4>
                  <div className="flc">
                    <div>나의 리더십 역량</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              <div>
                <div className="text-container">
                  <div className="mt30">
                    <div className="mb20">
                      <ul>
                        <li>
                          홍길동님의 Leading Business, Building Trust, Managing
                          Organization 역할은 모두 회사 內 유사한 수준입니다.
                        </li>
                        <li>
                          귀하는 NH투자증권의 모든 역량에 대해 회사 평균 대비
                          유사한 수준의 역량을 보유하고 있습니다.
                        </li>
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5 미만인
                        경우 “낮은“ 수준으로 표현하였습니다.
                      </div>
                    </div>
                  </div>

                  <img
                    className="w-100"
                    src={page_17_sub_image_1}
                    alt="page_17_sub_image_1"
                  />

                  <img
                    className="w-100"
                    src={page_17_sub_image_2}
                    alt="page_17_sub_image_2"
                  />

                  <img
                    className="w-100"
                    src={page_17_sub_image_3}
                    alt="page_17_sub_image_3"
                  />

                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    리포트 내 모든 결과값은 소수점 둘째 자리에서 반올림 처리한
                    값입니다. 단, 본인점수와 전사 평균 간 점수가 ±0.5점을 초과한
                    역량 선정은 반올림 처리하지 않은 값을 기준으로 하였습니다.
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
