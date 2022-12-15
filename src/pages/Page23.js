export default function Page({ data }) {
  const leaderShipRiskObject = {
    개선이시급함값: {
      복종강요형: Math.round(Number(data[1].E) * 100),
      책임전가형: Math.round(Number(data[1].F) * 100),
      의사결정회피형: Math.round(Number(data[1].Column9) * 100),
      현실안주형: Math.round(Number(data[1].H) * 100),
      파벌형성형: Math.round(Number(data[1].I) * 100),
      소통장애형: Math.round(Number(data[1].J) * 100),
      비관형: Math.round(Number(data[1].K) * 100),
      변덕형: Math.round(Number(data[1].L) * 100),
    },
    가끔주의가필요함값: {
      복종강요형: Math.round(Number(data[2].E) * 100),
      책임전가형: Math.round(Number(data[2].F) * 100),
      의사결정회피형: Math.round(Number(data[2].Column9) * 100),
      현실안주형: Math.round(Number(data[2].H) * 100),
      파벌형성형: Math.round(Number(data[2].I) * 100),
      소통장애형: Math.round(Number(data[2].J) * 100),
      비관형: Math.round(Number(data[2].K) * 100),
      변덕형: Math.round(Number(data[2].L) * 100),
    },
    거의문제없음값: {
      복종강요형: Math.round(Number(data[3].E) * 100),
      책임전가형: Math.round(Number(data[3].F) * 100),
      의사결정회피형: Math.round(Number(data[3].Column9) * 100),
      현실안주형: Math.round(Number(data[3].H) * 100),
      파벌형성형: Math.round(Number(data[3].I) * 100),
      소통장애형: Math.round(Number(data[3].J) * 100),
      비관형: Math.round(Number(data[3].K) * 100),
      변덕형: Math.round(Number(data[3].L) * 100),
    },
    경계필요유형텍스트: data[5].Column6,
    주의필요유형텍스트: data[6].Column6,
  };
  return (
    <div className="image-container page 23 pr">
      <div className="page-absolute">23 / 36</div>
      <div className="page 22">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="title-container">
              <div className="top-line"></div>
              <div className="flc jcw">
                <h4 className="main-title">리더십 위험유형</h4>
              </div>
              <hr className="bottom-line" />
            </div>
            <div className="w-100 h1207">
              <div className="text-container row ac mt50">
                <h5>리더십 위험유형별 수준</h5>
                <div className="combine-label">
                  <div className="bar-purple"></div>
                  <p className="mr20">개선이 시급함</p>
                  <div className="bar-blue"></div>
                  <p className="mr20">가끔 주의가 필요함</p>
                  <div className="bar-blue light"></div>
                  <p className="mr20">거의 문제 없음</p>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="page-22-line-container">
                  <div className="vertical-line"></div>
                  <div className="vertical-text">50%</div>
                </div>
                <div className="page-22-bar-graph-three-type">
                  <div className="item-row w-100 mb10">
                    <div className="categories-header">팀 관리</div>
                    <div className="w-100">
                      <div className="flex w-100 mb2">
                        <div className="type-header">복종 강요형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.복종강요형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.복종강요형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.복종강요형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.복종강요형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.복종강요형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.복종강요형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.복종강요형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.복종강요형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.복종강요형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">책임 전가형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.책임전가형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.책임전가형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.책임전가형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.책임전가형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.책임전가형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.책임전가형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.책임전가형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.책임전가형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.책임전가형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-row w-100 mb10">
                    <div className="categories-header">비즈니스</div>
                    <div className="w-100">
                      <div className="flex w-100 mb2">
                        <div className="type-header">의사결정회피형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.의사결정회피형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.의사결정회피형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.의사결정회피형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값
                            .의사결정회피형 > 0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.의사결정회피형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.의사결정회피형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.의사결정회피형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.의사결정회피형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.의사결정회피형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex w-100 mb2">
                        <div className="type-header">현실안주형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.현실안주형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.현실안주형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.현실안주형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.현실안주형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.현실안주형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.현실안주형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.현실안주형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.현실안주형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.현실안주형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-row w-100 mb10">
                    <div className="categories-header">대인관계</div>
                    <div className="w-100">
                      <div className="flex w-100 mb2">
                        <div className="type-header">파벌형성형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.파벌형성형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.파벌형성형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.파벌형성형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.파벌형성형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.파벌형성형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.파벌형성형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.파벌형성형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.파벌형성형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.파벌형성형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">소통장애형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.소통장애형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.소통장애형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.소통장애형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.소통장애형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.소통장애형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.소통장애형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.소통장애형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.소통장애형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.소통장애형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-row w-100 mb10">
                    <div className="categories-header">자기조절</div>
                    <div className="w-100">
                      <div className="flex w-100 mb2">
                        <div className="type-header">비관형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.비관형 > 0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.비관형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.비관형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.비관형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.비관형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.비관형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.비관형 > 0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.비관형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.비관형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">변덕형</div>
                        <div className="flex w-100">
                          {leaderShipRiskObject.개선이시급함값.변덕형 > 0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.개선이시급함값.변덕형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph urgent">
                                {`${leaderShipRiskObject.개선이시급함값.변덕형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.가끔주의가필요함값.변덕형 >
                            0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.가끔주의가필요함값.변덕형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph sometimes">
                                {`${leaderShipRiskObject.가끔주의가필요함값.변덕형}%`}
                              </div>
                            </div>
                          )}
                          {leaderShipRiskObject.거의문제없음값.변덕형 > 0 && (
                            <div
                              style={{
                                width: `${leaderShipRiskObject.거의문제없음값.변덕형}%`,
                                minWidth: 60,
                              }}
                            >
                              <div className="bar-graph no-problem">
                                {`${leaderShipRiskObject.거의문제없음값.변덕형}%`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <img style={{width:930px;" src="image/sub-image/page-22/bar-graph-table.png" alt=""/> --> */}
              <div className="info mt20">
                <span className="material-symbols-outlined">arrow_right</span>
                상기 그래프는 N/O(관찰 기회 없음)를 제외한 결과입니다.
              </div>
              <div className="text-container mt50">
                <div className="personal-result-title mb20">
                  경계가 필요한 유형
                </div>
                <ul>
                  <li>
                    각 리더십 위험 유형에서‘개선이 시급함’을 응답한 건수가
                    전체의 50% 이상인 유형을 의미합니다.
                  </li>
                  <li>{leaderShipRiskObject.경계필요유형텍스트}</li>
                </ul>
              </div>
              <div className="text-container mt50">
                <div className="personal-result-title mb20">
                  주의가 필요한 유형
                </div>
                <ul>
                  <li>
                    각 리더십 위험 유형에서‘가끔 주의가 필요함’과‘개선이
                    시급함’을 응답한 건수의 합이 전체의 50% 이상인 유형을
                    의미합니다.
                  </li>
                  <li>{leaderShipRiskObject.주의필요유형텍스트}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
