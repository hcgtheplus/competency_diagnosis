export default function Page() {
  return (
    <div className="image-containe page 24 pr">
      <div className="page-absolute">24 / 36</div>
      <div className="page 23">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="title-container">
              <div className="top-line"></div>
              <h4 className="main-title">소속별 조직문화 진단</h4>
              <hr className="bottom-line" />
              <div className="w-100 mt50">
                <div className="text-container">
                  <h5>총평</h5>
                  <ul className="flex fc mt10">
                    <li>
                      홍길동님이 속한 조직의 지배적인 조직문화는 공동체형이며,
                      NH투자증권 전사 조직문화에 해당 하는 공동체형/성과중시형
                      중 하나에 해당합니다.
                    </li>
                    <li>
                      홍길동님의 리더십 스타일은 조정자로, 속한 조직의 지배적인
                      조직문화와 적합한 스타일인 촉진 자/조언자와 다릅니다.
                    </li>
                    <li>
                      홍길동님이 속한 조직에서 가장 높은 점수가 도출된 조직문화
                      진단 영역 3가지는 수평적 소통, 조직에 대한 자부심, 동료
                      협업입니다.
                    </li>
                    <li>
                      홍길동님이 속한 조직에서 가장 낮은 점수가 도출된 조직문화
                      진단 영역 3가지는 조직장에 의한 동기부여, 업무성과 중시,
                      업무효율성입니다.
                    </li>
                  </ul>
                </div>
                <div className="text-container">
                  <div className="flc">
                    <div className="text-container row mt40">
                      <h5 className="mr10">소속별 조직문화</h5>
                      <p>(소속 조직의 조직문화 유형 특성)</p>
                    </div>
                  </div>
                  <div className="page-23-container">
                    <div className="item-container flex">
                      <div className="right-section">
                        <div className="page-23-chart-info">
                          <div className="flex ac mt10">
                            <div className="bar-blue mr8"></div>
                            <p>나의 리더십 스타일</p>
                          </div>
                          <div className="flex ac mt10">
                            <div className="bar-yellow mr8"></div>
                            <p>우리 부서 조직문화 유형&적합 리더십 스타일</p>
                          </div>
                        </div>
                        <div className="mt50" style={{ width: "100%" }}>
                          <div
                            class="leadership-style flc jcs fc"
                            style={{ marginTop: "50px" }}
                          >
                            <div class="fwb f18 mb15">유연성/자율성</div>
                            <div class="flc">
                              <div
                                class="fwb f18 wmvkr mr15"
                                style={{ letterSpacing: "-1.5px" }}
                              >
                                내부지향성
                              </div>
                              <div
                                class="flc fc"
                                style={{ position: "relative" }}
                              >
                                <div class="flc">
                                  <div className="emphasizeOC block2"></div>
                                  <div class="fwb block small active mr5 mb5">
                                    공동체형
                                    <div class="triangle f11 small section1">
                                      촉진자
                                    </div>
                                    <div class="triangle f11 small section2">
                                      조언자
                                    </div>
                                  </div>
                                  <div class="flex jce fwb block small mb5">
                                    혁신중시형
                                    <div class="triangle f11 small section3">
                                      개혁자
                                    </div>
                                    <div class="triangle f11 small section4">
                                      중재자
                                    </div>
                                  </div>
                                </div>
                                <div class="flc">
                                  <div class="flex afe fwb block small mr5">
                                    위계질서형
                                    <div class="triangle f11 small section5">
                                      감시자
                                    </div>
                                    <div class="triangle f11 small section6 active">
                                      조정자
                                    </div>
                                  </div>
                                  <div class="flex jce afe fwb block small">
                                    성과중시형
                                    <div class="triangle f11 small section7">
                                      감독자
                                    </div>
                                    <div class="triangle f11 small section8">
                                      성취자
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="fwb f18 wmvkr ml15"
                                style={{ letterSpacing: "-1.5px" }}
                              >
                                외부지향성
                              </div>
                            </div>
                            <div class="fwb f18 mt15">안정성</div>
                          </div>
                        </div>
                      </div>
                      <div className="left-section">
                        <div className="page-23-chart-info">
                          <div className="flex ac mt10">
                            <div className="bar-blue mr8"></div>
                            <p>
                              나의 리더십 스타일(본인 총점 중 가장 점수가 높은
                              스타일)
                            </p>
                          </div>
                          <div className="flex mt10">
                            <div className="bar-yellow mr8"></div>
                            <p>
                              우리 부서 조직문화 유형 & 적합 리더십 스타일
                              <br />
                              (총점이 가장 높은 조직문화 유형 및 연계되는 리더십
                              스타일)
                            </p>
                          </div>
                          <div className="mt30">
                            <table>
                              <tbody className="bt">
                                <tr className="tc header">
                                  <td className="br">조직문화 유형</td>
                                  <td className="br">총점</td>
                                  <td className="br">전사</td>
                                  <td className="br">연계 리더십 스타일</td>
                                  <td className="br">총점</td>
                                  <td
                                    className="br"
                                    style={{ borderRight: "none" }}
                                  >
                                    전사
                                  </td>
                                </tr>
                                <tr>
                                  <td className="bt yello-bg" rowSpan="2">
                                    공동체형
                                  </td>
                                  <td className="bt yello-bg fwb" rowSpan="2">
                                    3.5
                                  </td>
                                  <td className="bt yello-bg" rowSpan="2">
                                    3.7
                                  </td>
                                  <td className="bt yello-bg">조언자</td>
                                  <td className="bt yello-bg fwb">4.13</td>
                                  <td className="bt yello-bg ">3.84</td>
                                </tr>
                                <tr>
                                  <td className="bt yello-bg">촉진자</td>
                                  <td className="bt yello-bg fwb">4.17</td>
                                  <td className="bt yello-bg">3.83</td>
                                </tr>
                                <tr>
                                  <td className="bt" rowSpan="2">
                                    위계질서형
                                  </td>
                                  <td className="bt fwb" rowSpan="2">
                                    3.5
                                  </td>
                                  <td className="bt" rowSpan="2">
                                    3.5
                                  </td>
                                  <td className="bt">감시자</td>
                                  <td className="bt fwb">4.25</td>
                                  <td className="bt">3.94</td>
                                </tr>
                                <tr>
                                  <td className="bt blue-bg">조정자</td>
                                  <td className="bt blue-bg fwb">4.27</td>
                                  <td className="bt blue-bg">3.90</td>
                                </tr>
                                <tr>
                                  <td className="bt" rowSpan="2">
                                    성과중시형
                                  </td>
                                  <td className="bt fwb" rowSpan="2">
                                    3.3
                                  </td>
                                  <td className="bt" rowSpan="2">
                                    3.7
                                  </td>
                                  <td className="bt">감독자</td>
                                  <td className="bt fwb">4.15</td>
                                  <td className="bt">3.93</td>
                                </tr>
                                <tr>
                                  <td className="bt">성취자</td>
                                  <td className="bt fwb">4.07</td>
                                  <td className="bt">3.92</td>
                                </tr>
                                <tr>
                                  <td
                                    className="bt"
                                    rowSpan="2"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    혁신중시형
                                  </td>
                                  <td
                                    className="bt fwb"
                                    rowSpan="2"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    3.4
                                  </td>
                                  <td
                                    className="bt"
                                    rowSpan="2"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    3.4
                                  </td>
                                  <td className="bt">중재자</td>
                                  <td className="bt fwb">4.02</td>
                                  <td className="bt">3.94</td>
                                </tr>
                                <tr>
                                  <td
                                    className="bt"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    개혁자
                                  </td>
                                  <td
                                    className="bt fwb"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    4.15
                                  </td>
                                  <td
                                    className="bt"
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    3.93
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="flex fc mt30">
                      <li>
                        홍길동 님이 소속된 00부의 지배적인 조직문화는
                        공동체형이며, 이에 적합한 리더십 스타일은
                        조언자/촉진자형입니다.
                      </li>
                      <li>
                        귀하가 특징적으로 발휘하는 리더십 스타일은 조정자형이며,
                        이는 위계질서형 조직문화에 적합한 스타일입니다.
                      </li>
                      <li>
                        현재 소속 조직의 조직문화에 적합한 리더십 스타일을
                        발현하기 위한 노력 혹은 현재 소속 조직의 조직문화 유형을
                        변화시키려는 노력이 <br />
                        리더십 스타일과 조직문화 간 시너지를 증가시키는 데
                        도움이 될 수 있습니다.
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
