export default function Page() {
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
                <div className="main-bold-title">리더십 위험유형별 수준</div>
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
                          <div style={{ width: "29%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">29%</div>
                          </div>
                          <div style={{ width: "71%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">71%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">책임 전가형</div>
                        <div className="flex w-100">
                          <div style={{ width: "100%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">100%</div>
                          </div>
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
                          <div style={{ width: "29%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">29%</div>
                          </div>
                          <div style={{ width: "71%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">71%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-100 mb2">
                        <div className="type-header">현실안주형</div>
                        <div className="flex w-100">
                          <div style={{ width: "29%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">29%</div>
                          </div>
                          <div style={{ width: "71%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">71%</div>
                          </div>
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
                          <div style={{ width: "15%", minWidth: 60 }}>
                            <div className="bar-graph urgent">15%</div>
                          </div>
                          <div style={{ width: "14%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">14%</div>
                          </div>
                          <div style={{ width: "71%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">71%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">소통장애형</div>
                        <div className="flex w-100">
                          <div style={{ width: "14%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">14%</div>
                          </div>
                          <div style={{ width: "86%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">86%</div>
                          </div>
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
                          <div style={{ width: "14%", minWidth: 60 }}>
                            <div className="bar-graph urgent">14%</div>
                          </div>
                          <div style={{ width: "29%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">29%</div>
                          </div>
                          <div style={{ width: "57%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">57%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-100">
                        <div className="type-header">변덕형</div>
                        <div className="flex w-100">
                          <div style={{ width: "14%", minWidth: 60 }}>
                            <div className="bar-graph sometimes">14%</div>
                          </div>
                          <div style={{ width: "86%", minWidth: 60 }}>
                            <div className="bar-graph no-problem">86%</div>
                          </div>
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
                  <li>홍길동 님의 [경계가 필요한 유형]은 없습니다.</li>
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
                  <li>홍길동 님의 [주의가 필요한 유형]은 없습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
