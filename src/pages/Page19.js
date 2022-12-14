import bar_graph from "../image/sub-image/page-18/bar-graph.png";

export default function Page() {
  return (
    <div className="image-container page 19 pr">
      <div className="page-absolute">19 / 36</div>
      <div className="page 18">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="title-container">
              <div className="top-line"></div>
              <div className="flc jcw">
                <h4 className="main-title">Summary 전사 조직문화 진단 결과</h4>
                <h5 className="main-title">전사 조직문화</h5>
              </div>
              <hr className="bottom-line" />
            </div>

            <div className="w-100 h1207">
              <div className="mt50">
                <ul>
                  <li>
                    홍길동님이 소속된 00부의 전사 조직문화 만족도는 평균 3.5으로
                    전사 평균 대비 높은 수준입니다.
                  </li>
                  <li>
                    가장 높은 점수가 도출된 5가지는 고객지향, 조건적몰입,
                    소속감, 분위기, 협업입니다.
                  </li>
                  <li>가장 낮은 점수가 도출된 3가지는 HR,보상, 인력입니다.</li>
                </ul>
                <div className="info mt20">
                  <span className="material-symbols-outlined">arrow_right</span>
                  회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5 미만인 경우
                  “낮은“ 수준으로 표현하였습니다.
                </div>
              </div>
              <div className="mt20">
                <table>
                  <tbody className="bt">
                    <tr className="tc header">
                      <td className="br" rowSpan="2">
                        영역
                      </td>
                      <td colSpan="4">평균</td>
                    </tr>
                    <tr className="tc header">
                      <td className="bt br" style={{ width: "15%" }}>
                        전사
                      </td>
                      <td className="bt br" style={{ width: "15%" }}>
                        부분/사업부
                      </td>
                      <td className="bt" style={{ width: "15%" }}>
                        본부
                      </td>
                      <td className="bt" style={{ width: "15%" }}>
                        부서/센터
                      </td>
                    </tr>
                    <tr className="tc bt emphasize">
                      <td>합계</td>
                      <td>3.3</td>
                      <td>3.5</td>
                      <td>3.5</td>
                      <td>3.5</td>
                    </tr>
                    <tr className="tc">
                      <td className="fwb br header">
                        직원경험
                        <br />
                        (Experience)
                      </td>
                      <td className="bb">3.3</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                    </tr>

                    <tr className="tc">
                      <td className="fwb br header">
                        효과성
                        <br />
                        (Effectiveness)
                      </td>
                      <td className="bb">3.3</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                    </tr>

                    <tr className="tc">
                      <td className="fwb br header">
                        직원몰입
                        <br />
                        (Engagement)
                      </td>
                      <td className="bb">3.3</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                      <td className="bb">3.5</td>
                    </tr>
                  </tbody>
                </table>
                <div className="info mt20">
                  <span className="material-symbols-outlined">arrow_right</span>
                  익명성 보장을 위하여 전사 조직문화 결과 분석에서 사업부/센터
                  단위는 생략하였습니다.
                </div>
              </div>
              <div className="text-container mt50">
                <h5 className="mb20">
                  전사 조직문화 - 리더십 역량 부하점수 간 관계 설명력
                </h5>
              </div>
              <img style={{ width: 900 }} src={bar_graph} alt="bar_graph" />
              <div className="info mt20">
                <span className="material-symbols-outlined">arrow_right</span>
                항목별 상세 진단문항은 4페이지를 참고
              </div>
              <div className="mt20">
                <ul>
                  <li>
                    위 그래프는 전사 조직문화 점수와 리더십 역량 점수 간의
                    관계(설명력)를 분석한 그래프로 설명력이 0.2 이상인 경우
                    리더십 역량이 전사 조직문화에 미치는 영향이 높음을
                    의미합니다.
                  </li>
                  <li>
                    부하가 평가한 리더십 역량은 리더가 직접 운영하는 영역(평가,
                    조직, 프로세스, 인력)과 리더와의 상호작용에서 경험할 수 있는
                    영역(직무만족, 소속감, 소통)에 영향을 미치는 것으로
                    나타났습니다.
                  </li>
                  <li>
                    따라서 리더십 역량이 전사 조직문화 체감에 기여할 수 있으며,
                    좋지 못한 리더십으로 인해 구성원들이 부정적으로 조직문화를
                    체감할 수 있음을 의미합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
