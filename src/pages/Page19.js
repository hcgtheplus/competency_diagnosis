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
                    홍길동님이 소속된 000부의 전사 조직문화 만족도는 직원몰입,
                    직원경험, 효과성 순으로 높습니다.
                  </li>
                  <li>
                    귀하의 조직은 NH투자증권의 모든 전사 조직문화 영역에 대해
                    회사 평균 대비 유사한 수준입니다.
                  </li>
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
              </div>
              <div className="text-container row mt40">
                <h5 class="mr10">
                  전사 조직문화 - 리더십 역량 부하점수 간 관계 설명력
                </h5>
                <p>(전사 평균 Data 분석결과)</p>
              </div>

              <div class="page-19-average-container mt20">
                <div class="average-combine">
                  <div class="average-line-mark"></div>
                  <div class="average-text">0.2</div>
                </div>
                <div class="page-19-data-table" style={{ gap: "2px" }}>
                  <div
                    class="flex fc ac h-100 select-red"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.46</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "92%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">평가</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.21</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "24%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">변화&혁신</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.13</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "26%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">고객지향</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.01</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "2%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">유연근무</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.18</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "36%" }}
                      ></div>
                    </div>
                    <div class="writing en h-50">HR</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-red"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.24</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "48%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">조직</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-red"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.22</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "44%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">프로세스</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.2</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "40%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">보상</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.26</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "52%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">전략</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-red"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.26</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "52%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">인력</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.03</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "6%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">조건적몰입</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.17</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "34%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">재직의도</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.24</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "48%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">직무만족</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.34</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "68%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">소속감</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.21</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "42%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">분위기</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.3</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "60%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">협업</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.4</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "80%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">소통</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.17</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "34%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">갈등관리</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.27</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "54%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">다양성/형평성/포용</div>
                  </div>
                  <div
                    class="flex fc ac h-100 select-blue"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.42</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "84%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">입사경험</div>
                  </div>
                  <div
                    class="flex fc ac h-100"
                    style={{ width: "calc(100%/21)" }}
                  >
                    <div class="flex fc ac jce" style={{ height: "50%" }}>
                      <div class="rate-value">0.12</div>
                      <div
                        class="relation-explanatory-bar"
                        style={{ height: "24%" }}
                      ></div>
                    </div>
                    <div class="writing h-50">일과 삶의 균형</div>
                  </div>
                </div>
              </div>
              <div class="flex w-100">
                <div
                  class="page-19-average-check-text"
                  style={{ width: "calc(100%/21*10)" }}
                >
                  <div class="bracket-left"></div>
                  <div class="f18 mt5">효과성</div>
                  <div class="bracket-right"></div>
                </div>
                <div
                  class="page-19-average-check-text"
                  style={{ width: "calc(100%/21*3)" }}
                >
                  <div class="bracket-left"></div>
                  <div class="f18 mt5">직원몰입</div>
                  <div class="bracket-right"></div>
                </div>
                <div
                  class="page-19-average-check-text"
                  style={{ width: "calc(100%/21*8)" }}
                >
                  <div class="bracket-left"></div>
                  <div class="f18 mt5">직원경험</div>
                  <div class="bracket-right"></div>
                </div>
              </div>

              {/* <img style={{ width: 900 }} src={bar_graph} alt="bar_graph" /> */}
              <div className="info mt20">
                <span className="material-symbols-outlined">arrow_right</span>
                항목별 상세 진단문항은 4페이지를 참고부탁드립니다.
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
                    리더십 역량 중 리더가 직접 관여하는 항목(평가, 조직,
                    프로세스, 인력)과 리더와 부하 직원 간의 상호작용으로 경험할
                    수 있는 항목(직무만족, 소속감, 소통)이 전사 조직문화에 큰
                    영향을 미치는 것으로 나타났습니다.
                  </li>
                  <li>
                    따라서 리더십 역량이 전사 조직문화 체감에 기여할 수 있으며,
                    좋지 못한 리더십으로 인해 구성원들이 부정적으로 조직문화를
                    체감할 수 있음을 의미합니다.
                  </li>
                </ul>
                <div className="info mt20">
                  <span className="material-symbols-outlined">arrow_right</span>
                  설명력: 회귀분석 시 나타난 한 변수와 다른 변수와의 관계가
                  얼마나 유의미한지를 나타내는 0과 1 사이의 값이며, 1에 가까울
                  수록 설명력이 높습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
