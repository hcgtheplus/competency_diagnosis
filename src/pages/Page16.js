import page_15_sub_image_1 from "../image/sub-image/page-15/page-15-sub-image-1.png";

export default function Page({ data, organization, position }) {
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
      immersion: data[15].F.toFixed(1),
    },
  };

  const relation = {
    team: {
      superior: data[19].E.toFixed(1),
      colleague: data[20].E.toFixed(1),
      junior: data[21].E.toFixed(1),
      preference: data[22].E.toFixed(1),
    },
    company: {
      superior: data[19].F.toFixed(1),
      colleague: data[20].F.toFixed(1),
      junior: data[21].F.toFixed(1),
      preference: data[22].F.toFixed(1),
    },
  };

  return (
    <div class="image-container page 16 pr">
      <div class="page-absolute">16 / 39</div>
      <div class="page 15">
        <div class="need-data-container">
          <div class="for-margin">
            <div class="user-info">
              <div class="sub-title">소속:</div>
              <div class="department">{organization}</div>

              <div class="sub-title">직책:</div>

              <div class="user-name">{position}</div>
            </div>

            <div class="title-container">
              <div class="top-line"></div>
              <div>
                <div class="flex ab sb">
                  <h4 class="main-title">Summary 부서 조직문화 진단 결과</h4>
                  <div class="flc">
                    <div>{data[0].Column6}</div>
                  </div>
                </div>

                <hr class="bottom-line" />
              </div>

              <div class="flex mt20 mb30">
                <div class="flex mt50">
                  <div class="flc fc">
                    <div class="page-15-image">
                      <img
                        style={{ width: 250 }}
                        src={page_15_sub_image_1}
                        alt="page_15_sub_image_1"
                      />
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
                          <div class="flc fc" style={{ position: "relative" }}>
                            <div class="flc">
                              <div className="emphasize block2"></div>
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
                </div>

                <div class="flex jcs mt50 ml30">
                  <div>
                    <div class="page-15-main-title">
                      부서 조직문화 특징과 적합한 리더십 스타일
                    </div>
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
                    <div class="info mt20">
                      <span class="material-symbols-outlined">arrow_right</span>
                      역량에 관한 상세사항은 12페이지에 서술되어 있습니다.
                    </div>

                    <table class="page-15-table mt50">
                      <tr class="tc header">
                        <td colspan="3">조언자</td>
                      </tr>
                      <tr>
                        <td class="tc">경력비전제시</td>
                        <td class="tc">코칭/피드백</td>
                      </tr>
                      <tr>
                        <td class="tc">동기부여</td>
                        <td class="tc">다양성존중</td>
                      </tr>
                      <tr>
                        <td class="tc">경청/의사소통</td>
                        <td class="tc">인간 관계 형성/지원</td>
                      </tr>
                    </table>
                    <table class="page-15-table mt50">
                      <tr class="tc header">
                        <td colspan="3">촉진자</td>
                      </tr>
                      <tr>
                        <td class="tc">동기부여</td>
                        <td class="tc">상호이해</td>
                      </tr>
                      <tr>
                        <td class="tc">문제해결지원</td>
                        <td class="tc">갈등관리</td>
                      </tr>
                      <tr>
                        <td class="tc">경청/의사소통</td>
                        <td class="tc">인간적 관계 형성/지원</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <div class="text-container">
                  <div class="mb30">
                    <div class="main-sub-title mb10">
                      부서 조직문화 진단 영역 결과
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

                  <div class="page-16-data-image flex">
                    <div class="page-16-grape-item">
                      <div class="h130 al-end">
                        <div class="flc mb10">
                          <div class="page-16-legend"></div>
                          <div>{data[8].Column6}</div>
                        </div>
                        <div class="flc">
                          <div class="page-16-legend sec"></div>
                          <div>우리 회사</div>
                        </div>
                        <div>
                          <div class="page-16-legend-title">조직 문화</div>
                        </div>
                        <div class="top-line mt30"></div>
                      </div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(culture.team.working) * 10}%`,
                          }}
                        >
                          {culture.team.working}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${Number(culture.company.working) * 10}%`,
                          }}
                        >
                          {culture.company.working}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${
                              Number(culture.team.communication) * 10
                            }%`,
                          }}
                        >
                          {culture.team.communication}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.communication) * 10
                            }%`,
                          }}
                        >
                          {culture.company.communication}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${
                              Number(culture.team.satisfaction) * 10
                            }%`,
                          }}
                        >
                          {culture.team.satisfaction}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.satisfaction) * 10
                            }%`,
                          }}
                        >
                          {culture.company.satisfaction}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(culture.team.immersion) * 10}%`,
                          }}
                        >
                          {culture.team.immersion}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(culture.company.immersion) * 10
                            }%`,
                          }}
                        >
                          {culture.company.immersion}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>
                  </div>

                  <div class="flex mb10 page-16-grape-label-bottom">
                    <div>일하는 방식</div>
                    <div>커뮤니케이션</div>
                    <div>조직 만족</div>
                    <div>업무 몰입</div>
                  </div>

                  <div class="page-16-data-image flex">
                    <div class="page-16-grape-item">
                      <div class="h130 al-end">
                        <div>
                          <div class="page-16-legend-title sec">조직內관계</div>
                        </div>
                        <div class="top-line mt30"></div>
                      </div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.superior) * 10}%`,
                          }}
                        >
                          {relation.team.superior}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.superior) * 10
                            }%`,
                          }}
                        >
                          {relation.company.superior}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.colleague) * 10}%`,
                          }}
                        >
                          {relation.team.colleague}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.colleague) * 10
                            }%`,
                          }}
                        >
                          {relation.company.colleague}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.junior) * 10}%`,
                          }}
                        >
                          {relation.team.junior}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${Number(relation.company.junior) * 10}%`,
                          }}
                        >
                          {relation.company.junior}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>

                    <div class="page-16-grape-item">
                      <div class="flex jcs h160 al-end">
                        <div
                          class="page-16-our-department mr10"
                          style={{
                            height: `${Number(relation.team.preference) * 10}%`,
                          }}
                        >
                          {relation.team.preference}
                        </div>
                        <div
                          class="page-16-our-department company"
                          style={{
                            height: `${
                              Number(relation.company.preference) * 10
                            }%`,
                          }}
                        >
                          {relation.company.preference}
                        </div>
                      </div>
                      <div class="top-line"></div>
                    </div>
                  </div>

                  <div class="flex page-16-grape-label-bottom sec">
                    <div>상사</div>
                    <div>동료</div>
                    <div>후배</div>
                    <div>우리 부서 선호도</div>
                  </div>

                  <div class="info mt20">
                    <span class="material-symbols-outlined">arrow_right</span>
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
