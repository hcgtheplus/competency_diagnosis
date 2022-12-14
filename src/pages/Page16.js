import page_13_공동체형_성과중시형_혁신중시형 from "../image/sub-image/page-13/division-culture/page-13-gong-sung-hyuck.jpg"; // gong-sung-hyuck
import page_13_공동체형_성과중시형 from "../image/sub-image/page-13/division-culture/page-13-gong-sung.jpg"; // gong-sung
import page_13_공동체형_혁신중시형 from "../image/sub-image/page-13/division-culture/page-13-gong-hyuck.jpg"; // gong-hyuck
import page_13_공동체형 from "../image/sub-image/page-13/division-culture/page-13-gong.jpg"; // gong

import page_13_성과중시형_위계질서형 from "../image/sub-image/page-13/division-culture/page-13-sung-we.jpg"; // sung-we
import page_13_성과중시형_혁신중시형 from "../image/sub-image/page-13/division-culture/page-13-sung-hyuck.jpg"; // sung-hyuck
import page_13_성과중시형 from "../image/sub-image/page-13/division-culture/page-13-sung.jpg"; // sung
import page_13_위계질서형 from "../image/sub-image/page-13/division-culture/page-13-we.jpg"; // we
import page_13_혁신중시형 from "../image/sub-image/page-13/division-culture/page-13-hyuck.jpg"; // hyuck

export default function Page({
  data,
  organization,
  name,
  position,
  keyword,
  needType,
}) {
  const culture = {
    team: {
      working: data[13].E.toFixed(1),
      communication: data[14].E.toFixed(1),
      satisfaction: data[15].E.toFixed(1),
      immersion: data[16].E.toFixed(1),
    },
    company: {
      working: data[13].F.toFixed(1),
      communication: data[14].F.toFixed(1),
      satisfaction: data[15].F.toFixed(1),
      immersion: data[16].F.toFixed(1),
    },
  };

  const relation = {
    team: {
      superior: data[19].E.toFixed(1),
      colleague: data[20].E.toFixed(1),
      junior: data[21].E?.toFixed(1) || 0,
      preference: data[22].E && data[22].E.toFixed(1),
    },
    company: {
      superior: data[19].F.toFixed(1),
      colleague: data[20].F.toFixed(1),
      junior: data[21].F.toFixed(1) || 0,
      preference: data[22].F && data[22].F.toFixed(1),
    },
  };

  const orgCultureType = needType.orgCultureType
    .split(",")
    .map((type) => type.trim());

  const leadershipStyle = needType.leadershipStyle
    .split(",")
    .map((type) => type.trim());

  const count = Object.keys(needType).filter((type) =>
    type.includes("needType")
  ).length;

  const divisionCultureImage = (() => {
    switch (true) {
      case orgCultureType.some((type) => type === "공동체형") &&
        orgCultureType.some((type) => type === "성과중시형") &&
        orgCultureType.some((type) => type === "혁신중시형"):
        return page_13_공동체형_성과중시형_혁신중시형;
      case orgCultureType.some((type) => type === "성과중시형") &&
        orgCultureType.some((type) => type === "공동체형"):
        return page_13_공동체형_성과중시형;
      case orgCultureType.some((type) => type === "공동체형") &&
        orgCultureType.some((type) => type === "혁신중시형"):
        return page_13_공동체형_혁신중시형;
      case orgCultureType.some((type) => type === "위계질서형") &&
        orgCultureType.some((type) => type === "성과중시형"):
        return page_13_성과중시형_위계질서형;
      case orgCultureType.some((type) => type === "혁신중시형") &&
        orgCultureType.some((type) => type === "성과중시형"):
        return page_13_성과중시형_혁신중시형;
      case orgCultureType.some((type) => type === "공동체형"):
        return page_13_공동체형;
      case orgCultureType.some((type) => type === "성과중시형"):
        return page_13_성과중시형;
      case orgCultureType.some((type) => type === "위계질서형"):
        return page_13_위계질서형;
      case orgCultureType.some((type) => type === "혁신중시형"):
        return page_13_혁신중시형;
      default:
        return null;
    }
  })();

  return (
    <div className="image-container page 16 pr">
      <div className="page-absolute">16 / 39</div>
      <div className="page 15">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="user-info">
              <div className="sub-title">소속:</div>
              <div className="department">{organization}</div>

              <div className="sub-title">직책:</div>
              <div className="duty">{position}</div>

              <div className="user-name">{name}</div>
            </div>

            <div className="title-container">
              <div className="top-line"></div>
              <div>
                <div className="flex ab sb">
                  <h4 className="main-title">
                    Summary 소속별 조직문화 진단 결과
                  </h4>
                  <div className="flc">
                    <div>{data[0].Column6}</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              <div className="text-container mt20 mb30">
                <div className="main-sub-title mb10">
                  소속별 조직문화 특징과 적합한 리더십 스타일
                </div>
                <div className="flex">
                  <div className="flex">
                    <div className="flc fc">
                      <div className="page-15-image">
                        <img
                          style={{ width: 250, marginTop: 35 }}
                          src={divisionCultureImage}
                          alt="test"
                        />
                        <div
                          className="leadership-style flc jcs fc"
                          style={{ marginTop: "50px" }}
                        >
                          <div className="fwb f18 mb15">유연성/자율성</div>
                          <div className="flc">
                            <div
                              className="fwb f18 wmvkr mr15"
                              style={{ letterSpacing: "-1.5px" }}
                            >
                              내부지향성
                            </div>
                            <div
                              className="flc fc"
                              style={{ position: "relative" }}
                            >
                              <div className="flc">
                                <div
                                  className={`${
                                    orgCultureType.some(
                                      (type) => type === "공동체형"
                                    )
                                      ? "emphasize"
                                      : ""
                                  }  block1`}
                                ></div>
                                <div className="fwb block small active mr5 mb5">
                                  공동체형
                                  <div
                                    className={`triangle f11 small section1 ${
                                      leadershipStyle.some(
                                        (style) => style === "촉진자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    촉진자
                                  </div>
                                  <div
                                    className={`triangle f11 small section2 ${
                                      leadershipStyle.some(
                                        (style) => style === "조언자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    조언자
                                  </div>
                                </div>
                                <div
                                  className={`${
                                    orgCultureType.some(
                                      (type) => type === "혁신중시형"
                                    )
                                      ? "emphasize"
                                      : ""
                                  }  block2`}
                                ></div>
                                <div className="flex jce fwb block small mb5">
                                  혁신중시형
                                  <div
                                    className={`triangle f11 small section3 ${
                                      leadershipStyle.some(
                                        (style) => style === "개혁자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    개혁자
                                  </div>
                                  <div
                                    className={`triangle f11 small section4 ${
                                      leadershipStyle.some(
                                        (style) => style === "중재자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    중재자
                                  </div>
                                </div>
                              </div>
                              <div className="flc">
                                <div
                                  className={`${
                                    orgCultureType.some(
                                      (type) => type === "위계질서형"
                                    )
                                      ? "emphasize"
                                      : ""
                                  }  block3`}
                                ></div>
                                <div className="flex afe fwb block small mr5 ">
                                  위계질서형
                                  <div
                                    className={`triangle f11 small section5 ${
                                      leadershipStyle.some(
                                        (style) => style === "감시자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    감시자
                                  </div>
                                  <div
                                    className={`triangle f11 small section6 ${
                                      leadershipStyle.some(
                                        (style) => style === "조정자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    조정자
                                  </div>
                                </div>
                                <div
                                  className={`${
                                    orgCultureType.some(
                                      (type) => type === "성과중시형"
                                    )
                                      ? "emphasize"
                                      : ""
                                  }  block4`}
                                ></div>
                                <div className="flex jce afe fwb block small">
                                  성과중시형
                                  <div
                                    className={`triangle f11 small section7 ${
                                      leadershipStyle.some(
                                        (style) => style === "감독자"
                                      )
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    감독자
                                  </div>
                                  <div
                                    className={`triangle f11 small section8 ${
                                      leadershipStyle.some(
                                        (style) => style === "성취자"
                                      )
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
                              className="fwb f18 wmvkr ml15"
                              style={{ letterSpacing: "-1.5px" }}
                            >
                              외부지향성
                            </div>
                          </div>
                          <div className="fwb f18 mt15">안정성</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex jcs mt25 ml30">
                    <div>
                      <ul>
                        {data[5].Column6.trim() && (
                          <li>{data[5].Column6.trim()}</li>
                        )}
                        {data[6].Column6.trim() && (
                          <li>{data[6].Column6.trim()}</li>
                        )}
                        {data[7].Column6.trim() && (
                          <li>{data[7].Column6.trim()}</li>
                        )}
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        역량에 관한 상세사항은 12페이지에 서술되어 있습니다.
                      </div>
                      <div className="page-15-table-container">
                        {[1, 2, 3, 4, 5, 6].map((num) => {
                          const item = needType[`needType${num}`];

                          if (!item) {
                            return null;
                          }

                          const type = keyword.find((k) => k.type === item);

                          return (
                            <table
                              key={`needType${num}`}
                              className={`page-15-table ${
                                count === 1 ? "count-one" : ""
                              } ${count === 2 ? "count-two" : ""} ${
                                count === 3 ? "count-thr" : ""
                              } ${count === 4 ? "count-four" : ""} ${
                                count === 5 ? "count-five" : ""
                              } ${count === 6 ? "count-six" : ""}`}
                            >
                              <tbody>
                                <tr className="tc header">
                                  <td colSpan={3}>{item}</td>
                                </tr>
                                <tr>
                                  <td className="tc">{type.keyword1}</td>
                                  <td className="tc">{type.keyword2}</td>
                                </tr>
                                <tr>
                                  <td className="tc">{type.keyword3}</td>
                                  <td className="tc">{type.keyword4}</td>
                                </tr>
                                <tr>
                                  <td className="tc">{type.keyword5}</td>
                                  <td className="tc">{type.keyword6}</td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-container">
                  <div className="mb30">
                    <div className="main-sub-title mb10">
                      소속별 조직문화 진단 영역결과
                    </div>
                    <ul>
                      {data[9].Column6.trim() && (
                        <li>{data[9].Column6.trim()}</li>
                      )}
                      {data[10].Column6.trim() && (
                        <li>{data[10].Column6.trim()}</li>
                      )}
                    </ul>
                  </div>

                  <div className="page-16-data-image flex">
                    <div className="page-16-grape-item">
                      <div className="h130 al-end">
                        <div style={{ height: 160 }}>
                          <div className="flc" style={{ marginBottom: "9px" }}>
                            <div className="page-16-legend"></div>
                            <div>{data[8].Column6}</div>
                          </div>
                          <div className="flc">
                            <div className="page-16-legend sec"></div>
                            <div>우리 회사</div>
                          </div>
                          <div>
                            <div className="page-16-legend-title">
                              조직 문화
                            </div>
                          </div>
                        </div>
                        <div className="top-line"></div>
                      </div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(culture.team.working) * 20}%`,
                          }}
                        >
                          {culture.team.working}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${Number(culture.company.working) * 20}%`,
                          }}
                        >
                          {culture.company.working}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${
                              Number(culture.team.communication) * 20
                            }%`,
                          }}
                        >
                          {culture.team.communication}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.communication) * 20
                            }%`,
                          }}
                        >
                          {culture.company.communication}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${
                              Number(culture.team.satisfaction) * 20
                            }%`,
                          }}
                        >
                          {culture.team.satisfaction}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.satisfaction) * 20
                            }%`,
                          }}
                        >
                          {culture.company.satisfaction}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(culture.team.immersion) * 20}%`,
                          }}
                        >
                          {culture.team.immersion}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.immersion) * 20
                            }%`,
                          }}
                        >
                          {culture.company.immersion}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>
                  </div>

                  <div className="flex mb10 page-16-grape-label-bottom">
                    <div>일하는 방식</div>
                    <div>커뮤니케이션</div>
                    <div>조직 만족</div>
                    <div>업무 몰입</div>
                  </div>

                  <div className="page-16-data-image flex">
                    <div className="page-16-grape-item">
                      <div style={{ height: 160, paddingTop: 97 }}>
                        <div className="page-16-legend-title sec">
                          조직內관계
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.superior) * 20}%`,
                          }}
                        >
                          {relation.team.superior}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.superior) * 20
                            }%`,
                          }}
                        >
                          {relation.company.superior}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.colleague) * 20}%`,
                          }}
                        >
                          {relation.team.colleague}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.colleague) * 20
                            }%`,
                          }}
                        >
                          {relation.company.colleague}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.junior) * 20}%`,
                          }}
                        >
                          {relation.team.junior}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${Number(relation.company.junior) * 20}%`,
                          }}
                        >
                          {relation.company.junior}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>

                    <div className="page-16-grape-item">
                      <div className="flex jcs h160 al-end">
                        <div
                          className="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.preference) * 20}%`,
                          }}
                        >
                          {relation.team.preference}
                        </div>
                        <div
                          className="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.preference) * 20
                            }%`,
                          }}
                        >
                          {relation.company.preference}
                        </div>
                      </div>
                      <div className="top-line"></div>
                    </div>
                  </div>

                  <div className="flex page-16-grape-label-bottom sec">
                    <div>상사</div>
                    <div>동료</div>
                    <div>후배</div>
                    <div>우리 부서 선호도</div>
                  </div>

                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    조직문화 유형, 연계 리더십 스타일, Top/Bottom 3 문항 선정은
                    반올림 처리하지 않은 값을 기준으로 하였습니다.
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
