export default function Page({ data, leadershipStyle }) {
  //조직문화 유형 , 총점 : total, 전사 : entire
  const organizationalCultureType = {
    community: {
      total: data[16].E.toFixed(1),
      entire: data[16].F.toFixed(1),
      조언자: { total: data[22].E.toFixed(2), entire: data[22].F.toFixed(2) },
      촉진자: { total: data[23].E.toFixed(2), entire: data[23].F.toFixed(2) },
    },
    hierarchy: {
      total: data[17].E.toFixed(1),
      entire: data[17].F.toFixed(1),
      감시자: { total: data[24].E.toFixed(2), entire: data[24].F.toFixed(2) },
      조정자: { total: data[25].E.toFixed(2), entire: data[25].F.toFixed(2) },
    },
    performanceOriented: {
      total: data[18].E.toFixed(1),
      entire: data[18].F.toFixed(1),
      감독자: { total: data[26].E.toFixed(2), entire: data[26].F.toFixed(2) },
      성취자: { total: data[27].E.toFixed(2), entire: data[27].F.toFixed(2) },
    },
    focusOnInnovation: {
      total: data[19].E.toFixed(1),
      entire: data[19].F.toFixed(1),
      중재자: { total: data[28].E.toFixed(2), entire: data[28].F.toFixed(2) },
      개혁자: { total: data[29].E.toFixed(2), entire: data[29].F.toFixed(2) },
    },
  };

  //데이터 추가되면 props로 대체해야함
  const 조직문화유형 = "혁신중시형";

  const 번호 = (() => {
    switch (조직문화유형) {
      case "공동체형":
        return 1;
      case "혁신중시형":
        return 2;
      case "위계질서형":
        return 3;
      case "성과중시형":
        return 4;
      default:
        return -1;
    }
  })();

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
                    {data[0].Column6.trim() && (
                      <li>{data[0].Column6.trim()}</li>
                    )}
                    {data[1].Column6.trim() && (
                      <li>{data[1].Column6.trim()}</li>
                    )}
                    {data[2].Column6.trim() && (
                      <li>{data[2].Column6.trim()}</li>
                    )}
                    {data[3].Column6.trim() && (
                      <li>{data[3].Column6.trim()}</li>
                    )}
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
                            {data[5].Column6.trim() && (
                              <p>{data[5].Column6.trim()}</p>
                            )}
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
                                  <div
                                    className={`emphasizeOC block${번호}`}
                                  ></div>
                                  <div class="fwb block small mr5 mb5">
                                    공동체형
                                    <div
                                      class={`triangle f11 small section1 ${
                                        leadershipStyle === "촉진자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      촉진자
                                    </div>
                                    <div
                                      class={`triangle f11 small section2 ${
                                        leadershipStyle === "조언자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      조언자
                                    </div>
                                  </div>
                                  <div class="flex jce fwb block small mb5">
                                    혁신중시형
                                    <div
                                      class={`triangle f11 small section3 ${
                                        leadershipStyle === "개혁자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      개혁자
                                    </div>
                                    <div
                                      class={`triangle f11 small section4 ${
                                        leadershipStyle === "중재자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      중재자
                                    </div>
                                  </div>
                                </div>
                                <div class="flc">
                                  <div class="flex afe fwb block small mr5">
                                    위계질서형
                                    <div
                                      class={`triangle f11 small section5 ${
                                        leadershipStyle === "감시자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      감시자
                                    </div>
                                    <div
                                      class={`triangle f11 small section6 ${
                                        leadershipStyle === "조정자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      조정자
                                    </div>
                                  </div>
                                  <div class="flex jce afe fwb block small">
                                    성과중시형
                                    <div
                                      class={`triangle f11 small section7 ${
                                        leadershipStyle === "감독자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      감독자
                                    </div>
                                    <div
                                      class={`triangle f11 small section8 ${
                                        leadershipStyle === "성취자"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
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
                            {data[10].Column6.trim() && (
                              <p>{data[10].Column6.trim()}</p>
                            )}
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
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    공동체형
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    {organizationalCultureType.community.total}
                                  </td>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan="2"
                                  >
                                    {organizationalCultureType.community.entire}
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "조언자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    조언자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "조언자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.community.조언자
                                        .total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "조언자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.community.조언자
                                        .entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "촉진자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    촉진자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "촉진자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.community.촉진자
                                        .total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "촉진자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "공동체형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.community.촉진자
                                        .entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    위계질서형
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    {organizationalCultureType.hierarchy.total}
                                  </td>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    {organizationalCultureType.hierarchy.entire}
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "감시자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    감시자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "감시자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.hierarchy.감시자
                                        .total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "감시자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.hierarchy.감시자
                                        .entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "조정자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    조정자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "조정자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.hierarchy.조정자
                                        .total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "조정자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "위계질서형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType.hierarchy.조정자
                                        .entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    성과중시형
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.entire
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "감독자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    감독자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "감독자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.감독자.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "감독자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.감독자.entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "성취자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    성취자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "성취자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.성취자.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "성취자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "성과중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .performanceOriented.성취자.entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    혁신중시형
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    rowSpan={2}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.entire
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "중재자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    중재자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "중재자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.중재자.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "중재자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.중재자.entire
                                    }
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "개혁자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    개혁자
                                  </td>
                                  <td
                                    className={`bt fwb ${
                                      leadershipStyle === "개혁자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.개혁자.total
                                    }
                                  </td>
                                  <td
                                    className={`bt ${
                                      leadershipStyle === "개혁자"
                                        ? "blue-bg"
                                        : 조직문화유형 === "혁신중시형"
                                        ? "yello-bg"
                                        : ""
                                    }`}
                                    style={{
                                      borderBottom: "1px solid #eaeaec",
                                    }}
                                  >
                                    {
                                      organizationalCultureType
                                        .focusOnInnovation.개혁자.entire
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="flex fc mt30">
                      {data[30].Column6.trim() && (
                        <li>{data[30].Column6.trim()}</li>
                      )}
                      {data[31].Column6.trim() && (
                        <li>{data[31].Column6.trim()}</li>
                      )}
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
