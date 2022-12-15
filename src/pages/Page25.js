export default function Page({ data }) {
  // 부서 E 사업부 F
  const 업무및의사소통방식 = {
    업무효율성: { 부서: data[3].E.toFixed(1), 사업부: data[3].F.toFixed(1) },
    커뮤니케이션: { 부서: data[4].E.toFixed(1), 사업부: data[4].F.toFixed(1) },
    소통기회: { 부서: data[5].E.toFixed(1), 사업부: data[5].F.toFixed(1) },
    수평적소통: { 부서: data[6].E.toFixed(1), 사업부: data[6].F.toFixed(1) },
  };

  const 조직외관계 = {
    상사: {
      신뢰존중: { 부서: data[13].E.toFixed(1), 사업부: data[13].F.toFixed(1) },
      협업: { 부서: data[14].E.toFixed(1), 사업부: data[14].F.toFixed(1) },
    },
    동료: {
      신뢰존중: { 부서: data[15].E.toFixed(1), 사업부: data[15].F.toFixed(1) },
      협업: { 부서: data[16].E.toFixed(1), 사업부: data[16].F.toFixed(1) },
    },
    후배: {
      신뢰존중: { 부서: data[17].E.toFixed(1), 사업부: data[17].F.toFixed(1) },
      협업: { 부서: data[18].E.toFixed(1), 사업부: data[18].F.toFixed(1) },
    },
    종합: { 부서: data[19].E.toFixed(1), 사업부: data[19].F.toFixed(1) },
  };

  const 조건만족 = {
    조직장에의한동기부여: {
      부서: data[30].E.toFixed(1),
      사업부: data[30].F.toFixed(1),
    },
    조직에대한자부심: {
      부서: data[31].E.toFixed(1),
      사업부: data[31].F.toFixed(1),
    },
  };

  const 업무몰입 = {
    업무주도성: {
      부서: data[32].E.toFixed(1),
      사업부: data[32].F.toFixed(1),
    },
    업무를통한성장: {
      부서: data[33].E.toFixed(1),
      사업부: data[33].F.toFixed(1),
    },
  };

  return (
    <div className="image-container page 25 pr">
      <div className="page-absolute">25 / 36</div>
      <div className="page 24">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="text-container">
              <div className="title-container">
                <div className="top-line"></div>
                <div className="flc jcw">
                  <h4 className="main-title">소속별 조직문화 진단</h4>
                </div>
                <hr className="bottom-line" />
              </div>
            </div>
            <div className="w-100 mt50">
              <div className="page-24-container">
                <div className="text-container row">
                  <div className="flex" style={{ alignItems: "flex-end" }}>
                    <h5 className="mr10">업무 및 의사소통 방식</h5>
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
                <div className="title-container">
                  <div className="hug-graph">
                    <div className="w-100">
                      <div className="flex ac jcs w-100">
                        <div className="flex ac jcs w-100">
                          <div className="page-graph-line-left"></div>
                          <div>
                            <div className="graph-title">
                              {data[8].Column6.split("\r\n")[0]}
                            </div>
                            <div className="graph-body-txt">
                              {data[8].Column6.split("\r\n")[1]}
                            </div>
                          </div>
                          <div className="page-graph-line-right"></div>
                        </div>
                        <div className="flex ac jcs w-100">
                          <div className="page-graph-line-left"></div>
                          <div>
                            <div className="graph-title">
                              {data[10].Column6.split("\r\n")[0]}
                            </div>
                            <div className="graph-body-txt">
                              {data[10].Column6.split("\r\n")[1]}
                            </div>
                          </div>
                          <div className="page-graph-line-right"></div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.업무효율성.부서) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.업무효율성.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.업무효율성.사업부) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.업무효율성.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.커뮤니케이션.부서) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.커뮤니케이션.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(
                                    업무및의사소통방식.커뮤니케이션.사업부
                                  ) * 20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.커뮤니케이션.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.소통기회.부서) * 20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.소통기회.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.소통기회.사업부) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.소통기회.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.수평적소통.부서) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.수평적소통.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(업무및의사소통방식.수평적소통.사업부) *
                                  20
                                }%`,
                              }}
                            >
                              {업무및의사소통방식.수평적소통.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                      </div>
                      <div className="flex afs jcs mt10">
                        <div className="ac jcs w-100">
                          <div className="graph-title">업무 효율성</div>
                          <div className="graph-body-txt">
                            조직장의 업무 효율성
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">커뮤니케이션</div>
                          <div className="graph-body-txt">
                            관행, 격식보다 효율과 성과중시
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">소통 기회</div>
                          <div className="graph-body-txt">
                            조직장의 소통 기회 마련
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">수평적 소통</div>
                          <div className="graph-body-txt">
                            조직장과의 수평적 소통
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <div className="hug-graph">
                    <div className="w-100">
                      <div className="flex ac jcs w-100">
                        <div className="flex ac jcs w-100">
                          <div className="page-graph-line-left"></div>
                          <div>
                            <div className="graph-title">
                              {data[21].Column6.split("\r\n")[0]}
                            </div>
                            <div className="graph-body-txt">
                              {data[21].Column6.split("\r\n")[1]}
                            </div>
                          </div>
                          <div className="page-graph-line-right"></div>
                        </div>
                        <div className="flex ac jcs w-100">
                          <div className="page-graph-line-left"></div>
                          <div>
                            <div className="graph-title">
                              {data[23].Column6.split("\r\n")[0]}
                            </div>
                            <div className="graph-body-txt">
                              {data[23].Column6.split("\r\n")[1]}
                            </div>
                          </div>
                          <div className="page-graph-line-right"></div>
                        </div>
                        <div className="flex ac jcs w-100">
                          <div className="page-graph-line-left"></div>
                          <div>
                            <div className="graph-title">
                              {data[25].Column6.split("\r\n")[0]}
                            </div>
                            <div className="graph-body-txt">
                              {data[25].Column6.split("\r\n")[1]}
                            </div>
                          </div>
                          <div className="page-graph-line-right"></div>
                        </div>
                        <div className="w-50">
                          <div className="graph-title">
                            {data[27].Column6.split("\r\n")[0]}
                          </div>
                          <div className="graph-body-txt">
                            {data[27].Column6.split("\r\n")[1]}
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.상사.신뢰존중.부서) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.상사.신뢰존중.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.상사.신뢰존중.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.상사.신뢰존중.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.상사.협업.부서) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.상사.협업.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.상사.협업.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.상사.협업.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.동료.신뢰존중.부서) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.동료.신뢰존중.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.동료.신뢰존중.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.동료.신뢰존중.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.동료.협업.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.동료.협업.사업부}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.동료.협업.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.동료.협업.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.후배.신뢰존중.부서) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.후배.신뢰존중.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.후배.신뢰존중.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.후배.신뢰존중.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${
                                  Number(조직외관계.후배.협업.부서) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.후배.협업.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.후배.협업.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.후배.협업.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                        <div className="page-18-grape-item page-25">
                          <div className="flex jcs h160 al-end">
                            <div
                              className="page-18-our-department mr10"
                              style={{
                                height: `${Number(조직외관계.종합.부서) * 20}%`,
                              }}
                            >
                              {조직외관계.종합.부서}
                            </div>
                            <div
                              className="page-18-our-department company"
                              style={{
                                height: `${
                                  Number(조직외관계.종합.사업부) * 20
                                }%`,
                              }}
                            >
                              {조직외관계.종합.사업부}
                            </div>
                          </div>
                          <div className="top-line"></div>
                        </div>
                      </div>
                      <div className="flex afs jcs mt10">
                        <div className="ac jcs w-100">
                          <div className="graph-title">신뢰/존중</div>
                          <div className="graph-body-txt">
                            상사 역량 신뢰 및 의지
                            <br />
                            (후배 관점)
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">협업</div>
                          <div className="graph-body-txt">
                            상호 간 협업 수준
                            <br />
                            (후배 관점)
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">신뢰/존중</div>
                          <div className="graph-body-txt">
                            동료 역량
                            <br />
                            신뢰 및 의지
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">협업</div>
                          <div className="graph-body-txt">
                            상호 간 협업 수준
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">신뢰/존중</div>
                          <div className="graph-body-txt">
                            나에 대한 후배의 <br />
                            신뢰 및 의지
                            <br />
                            (상사 관점)
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">협업</div>
                          <div className="graph-body-txt">
                            상호 간 협업 수준
                            <br />
                            (상사 관점)
                          </div>
                        </div>
                        <div className="ac jcs w-100">
                          <div className="graph-title">우리 부서 선호도</div>
                          <div className="graph-body-txt">
                            우리 부서로의
                            <br />
                            이동 희망
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-container row mt40 w-100">
                    <div className="mr20 w-100">
                      <div
                        className="flex mb10"
                        style={{ alignItems: "flex-end" }}
                      >
                        <h5 className="mr10">조건 만족</h5>
                        <p style={{ minWidth: "max-content" }}>
                          (조직/조직장에 대한 만족도)
                        </p>
                      </div>
                      <div className="hug-graph">
                        <div className="w-100">
                          <div className="flex ac jcs w-100">
                            <div className="flex ac jcs w-100">
                              <div className="page-graph-line-left"></div>
                              <div>
                                <div className="graph-title">
                                  {data[34].Column6.split("\r\n")[0]}
                                </div>
                                <div className="graph-body-txt">
                                  {data[34].Column6.split("\r\n")[1]}
                                </div>
                              </div>
                              <div className="page-graph-line-right"></div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="page-18-grape-item page-25">
                              <div className="flex jcs h160 al-end">
                                <div
                                  className="page-18-our-department mr10"
                                  style={{
                                    height: `${
                                      Number(
                                        조건만족.조직장에의한동기부여.부서
                                      ) * 20
                                    }%`,
                                  }}
                                >
                                  {조건만족.조직장에의한동기부여.부서}
                                </div>
                                <div
                                  className="page-18-our-department company"
                                  style={{
                                    height: `${
                                      Number(
                                        조건만족.조직장에의한동기부여.사업부
                                      ) * 20
                                    }%`,
                                  }}
                                >
                                  {조건만족.조직장에의한동기부여.사업부}
                                </div>
                              </div>
                              <div className="top-line"></div>
                            </div>
                            <div className="page-18-grape-item page-25">
                              <div className="flex jcs h160 al-end">
                                <div
                                  className="page-18-our-department mr10"
                                  style={{
                                    height: `${
                                      Number(조건만족.조직에대한자부심.부서) *
                                      20
                                    }%`,
                                  }}
                                >
                                  {조건만족.조직에대한자부심.부서}
                                </div>
                                <div
                                  className="page-18-our-department company"
                                  style={{
                                    height: `${
                                      Number(조건만족.조직에대한자부심.사업부) *
                                      20
                                    }%`,
                                  }}
                                >
                                  {조건만족.조직에대한자부심.사업부}
                                </div>
                              </div>
                              <div className="top-line"></div>
                            </div>
                          </div>
                          <div className="flex afs jcs mt10">
                            <div className="ac jcs w-100">
                              <div className="graph-title">
                                조직장에 의한 동기부여
                              </div>
                              <div className="graph-body-txt">
                                구성원을 동기부여하는 수준
                              </div>
                            </div>
                            <div className="ac jcs w-100">
                              <div className="graph-title">
                                조직에 대한 자부심
                              </div>
                              <div className="graph-body-txt">
                                조직에 갖는 자부심 수준
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <div
                        className="flex mb10"
                        style={{ alignItems: "flex-end" }}
                      >
                        <h5 className="mr10">업무 몰입</h5>
                        <p style={{ minWidth: "maxContent" }}>
                          (업무에 대한 몰입도)
                        </p>
                      </div>
                      <div className="hug-graph">
                        <div className="w-100">
                          <div className="flex ac jcs w-100">
                            <div className="flex ac jcs w-100">
                              <div className="page-graph-line-left"></div>
                              <div>
                                <div className="graph-title">
                                  {data[36].Column6.split("\r\n")[0]}
                                </div>
                                <div className="graph-body-txt">
                                  {data[36].Column6.split("\r\n")[1]}
                                </div>
                              </div>
                              <div className="page-graph-line-right"></div>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="page-18-grape-item page-25">
                              <div className="flex jcs h160 al-end">
                                <div
                                  className="page-18-our-department mr10"
                                  style={{
                                    height: `${
                                      Number(업무몰입.업무주도성.부서) * 20
                                    }%`,
                                  }}
                                >
                                  {업무몰입.업무주도성.부서}
                                </div>
                                <div
                                  className="page-18-our-department company"
                                  style={{
                                    height: `${
                                      Number(업무몰입.업무주도성.사업부) * 20
                                    }%`,
                                  }}
                                >
                                  {업무몰입.업무주도성.사업부}
                                </div>
                              </div>
                              <div className="top-line"></div>
                            </div>
                            <div className="page-18-grape-item page-25">
                              <div className="flex jcs h160 al-end">
                                <div
                                  className="page-18-our-department mr10"
                                  style={{
                                    height: `${
                                      Number(업무몰입.업무를통한성장.부서) * 20
                                    }%`,
                                  }}
                                >
                                  {업무몰입.업무를통한성장.부서}
                                </div>
                                <div
                                  className="page-18-our-department company"
                                  style={{
                                    height: `${
                                      Number(업무몰입.업무를통한성장.사업부) *
                                      20
                                    }%`,
                                  }}
                                >
                                  {업무몰입.업무를통한성장.사업부}
                                </div>
                              </div>
                              <div className="top-line"></div>
                            </div>
                          </div>
                          <div className="flex afs jcs mt10">
                            <div className="ac jcs w-100">
                              <div className="graph-title">업무 주도성</div>
                              <div className="graph-body-txt">
                                권한위임 수준 및 자발성
                              </div>
                            </div>
                            <div className="ac jcs w-100">
                              <div className="graph-title">
                                업무를 통한 성장
                              </div>
                              <div className="graph-body-txt">
                                업무 역량 성장 체감 수준
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
