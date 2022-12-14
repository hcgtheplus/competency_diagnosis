import first_section_chart_img from "../image/sub-image/page-26/first-section-chart-img.png";
import second_section_chart_img from "../image/sub-image/page-26/second-section-chart-img.png";
import third_section_chart_img01 from "../image/sub-image/page-26/third-section-chart-img01.png";
import third_section_chart_img02 from "../image/sub-image/page-26/third-section-chart-img02.png";

export default function Page() {
  return (
    <div className="image-container page 25 pr">
      <div className="page-absolute">25 / 36</div>
      <div className="page 24">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="text-container mt30">
              <div className="title-container">
                <div className="top-line"></div>
                <div className="flc jcw">
                  <h4 className="main-title">소속별 조직문화 진단</h4>
                </div>
                <hr className="bottom-line" />
              </div>
            </div>
            <div className="w-100 pt30">
              <div className="page-24-container">
                <div className="text-container row">
                  <div className="flex" style={{ alignItems: "flex-end" }}>
                    <h5 className="mr10">
                      업무 및 의사소통 방식
                    </h5>
                    <p style={{ minWidth: "max-content" }}>
                      (일하는 방식 및 커뮤니케이션 방식)
                    </p>
                  </div>
                  <div className="combine-label">
                    <div className="mr20 flex">
                      <div className="bar-yellow"></div>
                      <p>우리 부서</p>
                    </div>

                    <div className="bar-blue"></div>
                    <p>우리 사업부</p>
                  </div>
                </div>
                <div className="page-15-image mt20">
                  <img
                    style={{ width: "100%" }}
                    src={first_section_chart_img}
                    alt="first_section_chart_img"
                  />
                </div>
                <div
                  className="text-container row mt40"
                  style={{ alignItems: "flex-end" }}
                >
                  <h5 className="mr10">조직內관계</h5>
                  <p className="ml">
                    (조직內상사, 동료, 후배와의 신뢰, 팀워크 등 부서內관계에
                    대한 건강도)
                  </p>
                </div>
                <div className="page-15-image mt20">
                  <img
                    style={{ width: "100%" }}
                    src={second_section_chart_img}
                    alt="second_section_chart_img"
                  />
                </div>
                <div className="text-container row ">
                  <div className="third-area-left">
                    <div
                      className="flex mt40"
                      style={{ alignItems: "flex-end" }}
                    >
                      <h5 className="mr10">조직만족</h5>
                      <p>(조직/조직장에 대한 만족도)</p>
                    </div>
                    <div className="page-15-image mt20">
                      <img
                        style={{ width: "100%" }}
                        src={third_section_chart_img01}
                        alt="third_section_chart_img01"
                      />
                    </div>
                  </div>
                  <div className="third-area-right">
                    <div
                      className="flex mt40"
                      style={{ alignItems: "flex-end" }}
                    >
                      <h5 className="mr10">업무 몰입</h5>
                      <p>(업무에 대한 몰입도)</p>
                    </div>
                    <div className="page-15-image mt20">
                      <img
                        style={{ width: "100%" }}
                        src={third_section_chart_img02}
                        alt="third_section_chart_img02"
                      />
                    </div>
                  </div>
                </div>
                <div className="info mt40">
                  <span className="material-symbols-outlined">arrow_right</span>
                  리포트 내 모든 결과값은 소수점 둘째 자리에서 반올림 처리한
                  값입니다. 단, 본인 소속 조직 점수와 전사 평균 간 점수가
                  ±0.5점을 초과한 문항 및 Top/Bottom 3 문항 선정은 반올림
                  처리하지 않은 값을 기준으로 하였습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
