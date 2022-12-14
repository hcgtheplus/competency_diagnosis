import "./App.css";
import page_1 from "./image/page-1.png";
import page_2_1 from "./image/page-2-1.png";
import page_2_2 from "./image/page-2-2.png";
import page_3 from "./image/page-3.png";
import page_4 from "./image/page-4.png";
import page_5 from "./image/page-5.png";
import page_6 from "./image/page-6.png";
import page_7 from "./image/page-7.png";
import page_8 from "./image/page-8.png";
import page_9 from "./image/page-9.png";
import page_10 from "./image/page-10.png";
import page_11 from "./image/page-11.png";
import page_12 from "./image/page-12.png";
import page_13_sub_image from "./image/sub-image/page-13/page-13-sub-image.png";
import page_13_sub_image_2 from "./image/sub-image/page-13/page-13-sub-image-2.png";
import page_13_sub_image_3 from "./image/sub-image/page-13/page-13-sub-image-3.png";
import page_13_sub_image_4 from "./image/sub-image/page-13/page-13-sub-image-4.png";
import page_14_sub_image from "./image/sub-image/page-14/page-14-sub-image.png";
import page_14_sub_image_2 from "./image/sub-image/page-14/page-14-sub-image-2.png";
import page_15_sub_image_1 from "./image/sub-image/page-15/page-15-sub-image-1.png";
import page_15_sub_image_2 from "./image/sub-image/page-15/page-15-sub-image-2.png";
import page_15_sub_image_3 from "./image/sub-image/page-15/page-15-sub-image-3.png";
import page_17_sub_image_1 from "./image/sub-image/page-17/page-17-sub-image-1.png";
import page_17_sub_image_2 from "./image/sub-image/page-17/page-17-sub-image-2.png";
import page_17_sub_image_3 from "./image/sub-image/page-17/page-17-sub-image-3.png";
import bar_graph from "./image/sub-image/page-18/bar-graph.png";
import bar_chart from "./image/sub-image/page-19/bar-chart.png";
import page_20_bar_chart from "./image/sub-image/page-20/bar-chart.png";
import page_21_bar_chart from "./image/sub-image/page-21/bar-chart.png";
import right_graph from "./image/sub-image/page-25/right-graph.png";
import first_section_chart_img from "./image/sub-image/page-26/first-section-chart-img.png";
import second_section_chart_img from "./image/sub-image/page-26/second-section-chart-img.png";
import third_section_chart_img01 from "./image/sub-image/page-26/third-section-chart-img01.png";
import third_section_chart_img02 from "./image/sub-image/page-26/third-section-chart-img02.png";
import page_25_image_01 from "./image/sub-image/page-27/page-25-image-01.png";
import page_25_image_02 from "./image/sub-image/page-27/page-25-image-02.png";
import page_29 from "./image/page-29.png";
import page_33 from "./image/page-33.png";
import page_34 from "./image/page-34.png";
import page_35 from "./image/page-35.png";

function App() {
  return (
    <div className="App">
      <div className="w-100 flex input-fixed">
        <div className="index-input">
          <div className="index-label">대상자 Index ID</div>
          <input placeholder="ID 값을 입력하십시오"></input>
        </div>
      </div>
      <div className="for-center">
        <div className="main-image-container page 1">
          <div className="pr" style={{ pageBreakBefore: "avoid" }}>
            <img className="page 1" src={page_1} alt="page_1" />
          </div>
          <div className="image-container page 2 pr">
            <img className="page 2" src={page_2_1} alt="page_2_1" />
            <div className="page-absolute">2 / 36</div>
          </div>
          <div className="image-container page 3 pr">
            <img className="page 2-1" src={page_2_2} alt="page_2_2" />
            <div className="page-absolute">3 / 36</div>
          </div>
          <div className="image-container page 4 pr">
            <img className="page 3" src={page_3} alt="page_3" />
            <div className="page-absolute">4 / 36</div>
          </div>
          <div className="image-container page 5 pr">
            <img className="page 4" src={page_4} alt="page_4" />
            <div className="page-absolute">5 / 36</div>
          </div>
          <div className="image-container page 6 pr">
            <img className="page 5" src={page_5} alt="page_5" />
            <div className="page-absolute">6 / 36</div>
          </div>
          <div className="image-container page 7 pr">
            <img className="page 6" src={page_6} alt="page_6" />
            <div className="page-absolute">7 / 36</div>
          </div>
          <div className="image-container page 8 pr">
            <img className="page 7" src={page_7} alt="page_7" />
            <div className="page-absolute">8 / 36</div>
          </div>
          <div className="image-container page 9 pr">
            <img className="page 8" src={page_8} alt="page_8" />
            <div className="page-absolute">9 / 36</div>
          </div>
          <div className="image-container page 10 pr">
            <img className="page 9" src={page_9} alt="page_9" />
            <div className="page-absolute">10 / 36</div>
          </div>
          <div className="image-container page 11 pr">
            <img className="page 10" src={page_10} alt="page_10" />
            <div className="page-absolute">11 / 36</div>
          </div>
          <div className="image-container page 12 pr">
            <img className="page 11" src={page_11} alt="page_11" />
            <div className="page-absolute">12 / 36</div>
          </div>
          <div className="image-container page 13 pr">
            <img className="page 12" src={page_12} alt="page_12" />
          </div>
          <div className="image-container page 14 pr">
            <div className="page-absolute">14 / 36</div>
            <div className="page 13">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="user-info">
                    <div className="sub-title">소속:</div>
                    <div className="department">미래 전략 기획부</div>

                    <div className="sub-title">직책:</div>
                    <div className="duty">부장</div>

                    <div className="user-name">홍길동</div>
                  </div>

                  <div className="title-container">
                    <div className="top-line"></div>
                    <h4 className="main-title">Summary 리더십 유형</h4>
                    <hr className="bottom-line" />
                  </div>

                  <div className="w-100 flex h1207">
                    <div className="w-50 h-100 flex jcs left-container mt50">
                      <div className="flc fc">
                        <div className="page-13-sub-image-1">
                          <img
                            style={{ width: 370 }}
                            src={page_13_sub_image}
                            alt="page_13_sub_image"
                          />
                        </div>

                        <div className="p0-27 mt50">
                          <div className="pr-title">나의 리더십 유형</div>

                          <div className="text-container">
                            <div className="mb30 mt30">
                              <div className="flc jcs">
                                <img
                                  className="w250px"
                                  src={page_13_sub_image_2}
                                  alt="page_13_sub_image_2"
                                />
                              </div>
                              <div className="main-sub-title mb10">특징</div>
                              <ul>
                                <li>
                                  구성원들의 정서적인 측면(지지행동)과 업무 목표
                                  달성(지시행동)에 모두 집중하는 유형입니다.
                                </li>
                              </ul>
                            </div>

                            <div className="mb30">
                              <div className="main-sub-title mb10">강점</div>
                              <ul>
                                <li>
                                  직원을 인격적으로 존중하고, 긴밀한 유대관계
                                  형성합니다.
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  적절한 지시, 통제, 업무권한 위임을 통해 성과를
                                  달성합니다.
                                </li>
                              </ul>
                            </div>

                            <div className="mb30">
                              <div className="main-sub-title mb10">
                                주의할 점
                              </div>
                              <ul>
                                <li>
                                  직원들의 직무 발단 단계에 따른
                                  지시행동&지지행동의 비중 조절이 필요합니다.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-50 h-100 flex jcs mt50">
                      <div className="flc fc">
                        <div className="page-13-sub-image-1">
                          <img
                            style={{ width: 370 }}
                            src={page_13_sub_image_4}
                            alt="page_13_sub_image_4"
                          />
                        </div>

                        <div className="p0-27 mt50">
                          <div className="pr-title">나의 리더십 스타일</div>

                          <div className="text-container">
                            <div className="mb30 mt30">
                              <div className="flc jcs">
                                <img
                                  className="w250px"
                                  src={page_13_sub_image_3}
                                  alt="page_13_sub_image_3"
                                />
                              </div>
                              <div className="main-sub-title mb10">특징</div>
                              <ul>
                                <li>
                                  구체적인 계획 하에 조직을 안정적으로 운영하며,
                                  발생가능한 갈등을 최소화합니다.
                                </li>
                              </ul>
                            </div>

                            <div className="mb30">
                              <div className="main-sub-title mb10">강점</div>
                              <ul>
                                <li>
                                  과업 배분 및 분쟁 조정 능력이 뛰어납니다.
                                </li>
                                <li>
                                  목표 설정 및 달성 과정에서의 조정능력이
                                  뛰어납니다.
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  적절한 지시, 통제, 업무권한 위임을 통해 성과를
                                  달성합니다.
                                </li>
                              </ul>
                            </div>

                            <div className="mb30">
                              <div className="main-sub-title mb10">
                                주의할 점
                              </div>
                              <ul>
                                <li>변화에 대한 수용 및 적응이 필요합니다.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 15 pr">
            <div className="page-absolute">15 / 36</div>
            <div className="page 14">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="user-info">
                    <div className="sub-title">소속:</div>
                    <div className="department">미래 전략 기획부</div>

                    <div className="sub-title">직책:</div>
                    <div className="duty">부장</div>

                    <div className="user-name">홍길동</div>
                  </div>

                  <div className="title-container">
                    <div className="top-line"></div>
                    <div>
                      <div className="flex ab sb">
                        <h4 className="main-title">Summary 리더십 유형</h4>
                        <div className="flc">
                          <div className="mr30 fb">리더십Type :</div>
                          <div>
                            코칭형(Coaching) X 조정자(Coordinator) 스타일
                          </div>
                        </div>
                      </div>

                      <hr className="bottom-line" />
                    </div>

                    <div className="flc sb">
                      <div className="flex jcs mt50">
                        <div className="flc fc">
                          <img
                            style={{ width: 400 }}
                            src={page_14_sub_image}
                            alt="page_14_sub_image"
                          />
                          <div className="image-sub-title-js">
                            나의 리더십 유형
                          </div>
                        </div>
                      </div>

                      <div className="flex jcs mt50">
                        <div className="flc fc">
                          <img
                            style={{ width: 400 }}
                            src={page_14_sub_image_2}
                            alt="page_14_sub_image_2"
                          />
                          <div className="image-sub-title-js">
                            나의 리더십 스타일
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flc coch-container">
                      <div className="leader-type-title fb">
                        나의 리더십 Type
                      </div>
                      <div style={{ fontSize: 24 }}>
                        코칭형(Coaching) X 조정자(Coordinator) 스타일
                      </div>
                    </div>

                    <div className="flc jcs mt30">
                      <div className="flc jcs mr60">
                        <img
                          className="w250px"
                          src={page_13_sub_image_2}
                          alt="page_13_sub_image_2"
                        />
                      </div>

                      <div className="flc jcs">
                        <img
                          className="w250px"
                          src={page_13_sub_image_3}
                          alt="page_13_sub_image_3"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="text-container">
                        <div className="mb30 mt30">
                          <div className="main-sub-title mb10">특징</div>
                          <ul>
                            <li>
                              과업지향성 및 관계지향성을 높게 보유하는 코칭형
                              리더십 유형과 조직 내 업무 흐름을 원활하게
                              조정하는 조정자 스타일이 상호보완적으로 결합
                              되었습니다.
                            </li>
                          </ul>
                        </div>

                        <div className="mb30">
                          <div className="main-sub-title mb10">강점</div>
                          <ul>
                            <li>
                              안정적인 조직성과 달성함과 동시에 구성원들의
                              긍정적인 유대관계를 구축합니다.
                            </li>
                          </ul>
                          <ul>
                            <li>
                              조직 업무 프로세스, R&R, 조직 내 정보 흐름을
                              효과적으로 관리합니다.
                            </li>
                          </ul>
                        </div>

                        <div className="mb30">
                          <div className="main-sub-title mb10">주의할 점</div>
                          <ul>
                            <li>
                              새로운 방식의 업무에 도전하거나 이를 추진 시,
                              리더로서 추진력 있는 역할을 수행하기 위해 노력해야
                              합니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="page 18">
                <div className="need-data-container">
                  <div className="for-margin">
                    <div className="user-info">
                      <div className="sub-title">소속:</div>
                      <div className="department">미래 전략 기획부</div>

                      <div className="sub-title">직책:</div>
                      <div className="duty">부장</div>

                      <div className="user-name">홍길동</div>
                    </div>

                    <div className="title-container">
                      <div className="top-line"></div>
                      <div className="flc jcw">
                        <h4 className="main-title">
                          Summary 전사 조직문화 진단 결과
                        </h4>
                        <h5 className="main-title">전사 조직문화</h5>
                      </div>
                      <hr className="bottom-line" />
                    </div>

                    <div className="w-100 h1207">
                      <div className="mt50">
                        <ul>
                          <li>
                            홍길동님이 소속된 00부의 전사 조직문화 만족도는 평균
                            3.5으로 전사 평균 대비 높은 수준입니다.
                          </li>
                          <li>
                            가장 높은 점수가 도출된 5가지는 고객지향,
                            조건적몰입, 소속감, 분위기, 협업입니다.
                          </li>
                          <li>
                            가장 낮은 점수가 도출된 3가지는 HR,보상, 인력입니다.
                          </li>
                        </ul>
                        <div className="info mt20">
                          <span className="material-symbols-outlined">
                            arrow_right
                          </span>
                          회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5
                          미만인 경우 “낮은“ 수준으로 표현하였습니다.
                        </div>
                      </div>
                      <div className="mt50">
                        <table>
                          <tbody className="bt">
                            <tr className="tc header">
                              <td className="br" rowSpan="2"></td>
                              <td className="br" rowSpan="2">
                                영역
                              </td>
                              <td className="br" rowSpan="2">
                                항목
                              </td>
                              <td colSpan="3">평균</td>
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
                            </tr>
                            <tr className="tc bt emphasize">
                              <td className="wmv fwb" rowSpan="25">
                                전사조직문화
                              </td>
                              <td colSpan="2">Total</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc header">
                              <td colSpan="2"></td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- 직원경험 데이터 --> */}
                            <tr className="tc">
                              <td className="br header" rowSpan="8">
                                직원경험
                                <br />
                                (Experience)
                              </td>
                              <td className="header bt tl">입사경험</td>
                              <td className="bt">3.3</td>
                              <td className="bt">3.5</td>
                              <td className="bt">3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">소속감</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">일과 삶의 균형</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">소통</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">협업</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">갈등관리</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">다양성 존중</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">분위기</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- / --> */}
                            <tr className="tc bt header">
                              <td colSpan="2"></td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- 효과성 데이터 --> */}
                            <tr className="tc">
                              <td className="br header" rowSpan="10">
                                효과성
                                <br />
                                (Effectiveness)
                              </td>
                              <td className="header bt tl">변화&혁신</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">고객지향</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">전략</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">조직</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">프로세스</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">유연근무</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">인력</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">HR</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">평가</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">보상</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- / --> */}
                            <tr className="tc bt header">
                              <td colSpan="2"></td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- 효과성 데이터 --> */}
                            <tr className="tc">
                              <td className="br header" rowSpan="3">
                                직원몰입
                                <br />
                                (Engagement)
                              </td>
                              <td className="header bt tl">직무만족</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">조건적몰입</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            <tr className="tc bt">
                              <td className="header bt tl">재직의도</td>
                              <td>3.3</td>
                              <td>3.5</td>
                              <td>3.5</td>
                            </tr>
                            {/* <!-- / --> */}
                          </tbody>
                        </table>
                        <div className="info mt20">
                          <span className="material-symbols-outlined">
                            arrow_right
                          </span>
                          익명성 보장을 위하여 전사 조직문화 결과 분석에서
                          사업부/센터 단위는 생략하였습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 16 pr">
            <div className="page-absolute">16 / 36</div>
            <div className="page 15">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="user-info">
                    <div className="sub-title">소속:</div>
                    <div className="department">미래 전략 기획부</div>

                    <div className="sub-title">직책:</div>
                    <div className="duty">부장</div>

                    <div className="user-name">홍길동</div>
                  </div>

                  <div className="title-container">
                    <div className="top-line"></div>
                    <div>
                      <div className="flex ab sb">
                        <h4 className="main-title">
                          Summary 부서 조직문화 진단 결과
                        </h4>
                        <div className="flc">
                          <div>우리 부서 조직문화</div>
                        </div>
                      </div>

                      <hr className="bottom-line" />
                    </div>

                    <div className="flex mt20">
                      <div className="flex mt50">
                        <div className="flc fc">
                          <div className="page-15-image">
                            <img
                              style={{ width: 250 }}
                              src={page_15_sub_image_1}
                              alt="page_15_sub_image_1"
                            />
                            <img
                              className="page-15-img-not-working"
                              src={page_15_sub_image_2}
                              alt="page_15_sub_image_2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex jcs mt50">
                        <div>
                          <div className="page-15-main-title">
                            부서 조직문화 특징과 적합한 리더십 스타일
                          </div>
                          <ul>
                            <li>
                              공동체형 문화에서는 구성원들의 신뢰, 팀워크를
                              중시하며 개인의 능력개발에 대한 관심이 높습니다.{" "}
                            </li>
                            <li>
                              공동체형 문화에 적합한 리더십 스타일은
                              조언자/촉진자형으로 귀하의 리더십 스타일에
                              해당하지 않습니다.{" "}
                            </li>
                            <li>
                              담당 조직 조직문화에 부합하는 리더십 스타일 발현을
                              위해서는 하기의 조언자/촉진자형 역량 발현이
                              필요합니다.{" "}
                            </li>
                          </ul>
                          <div className="info mt20">
                            <span className="material-symbols-outlined">
                              arrow_right
                            </span>
                            역량에 관한 상세사항은 12페이지에 서술되어 있습니다.
                          </div>

                          <table>
                            <tbody className="page-15-table mt50">
                              <tr className="tc header">
                                <td colSpan="3">조언자</td>
                              </tr>
                              <tr>
                                <td className="tc">경력비전제시</td>
                                <td className="tc">코칭/피드백</td>
                              </tr>
                              <tr>
                                <td className="tc">동기부여</td>
                                <td className="tc">다양성존중</td>
                              </tr>
                              <tr>
                                <td className="tc">경청/의사소통</td>
                                <td className="tc">인간 관계 형성/지원</td>
                              </tr>
                            </tbody>
                          </table>
                          <table>
                            <tbody className="page-15-table mt50">
                              <tr className="tc header">
                                <td colSpan="3">촉진자</td>
                              </tr>
                              <tr>
                                <td className="tc">동기부여</td>
                                <td className="tc">상호이해</td>
                              </tr>
                              <tr>
                                <td className="tc">문제해결지원</td>
                                <td className="tc">갈등관리</td>
                              </tr>
                              <tr>
                                <td className="tc">경청/의사소통</td>
                                <td className="tc">인간적 관계 형성/지원</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-container">
                        <div className="mb30">
                          <div className="main-sub-title mb10">
                            부서 조직문화 진단 영역 결과
                          </div>
                          <ul>
                            <li>
                              점수가 가장 높은 4가지는 동료와의 관계,
                              커뮤니케이션, 후배와의 관계, 우리 부서
                              선호도입니다.
                            </li>
                            <li>
                              점수가 가장 낮은 3가지는 일하는 방식, 상사와의
                              관계, 조직만족입니다.
                            </li>
                          </ul>
                        </div>
                        <img
                          className="w-100"
                          src={page_15_sub_image_3}
                          alt="page_15_sub_image_3"
                        />
                        <div className="info mt20">
                          <span className="material-symbols-outlined">
                            arrow_right
                          </span>
                          조직문화 유형, 연계 리더십 스타일, Top/Bottom 3 문항
                          선정은 반올림 처리하지 않은 값을 기준으로 하였습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 17 pr">
            <div className="page-absolute">17 / 36</div>
            <div className="page 16">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="user-info">
                    <div className="sub-title">소속:</div>
                    <div className="department">미래 전략 기획부</div>

                    <div className="sub-title">직책:</div>
                    <div className="duty">부장</div>

                    <div className="user-name">홍길동</div>
                  </div>

                  <div className="title-container">
                    <div className="top-line"></div>
                    <div>
                      <div className="flex ab sb">
                        <h4 className="main-title">
                          Summary 부서 조직문화 진단 결과
                        </h4>
                        <div className="flc">
                          <div>우리 부서 조직문화</div>
                        </div>
                      </div>

                      <hr className="bottom-line" />
                    </div>

                    <div>
                      <div className="text-container">
                        <div className="mt30">
                          <div className="mb20">
                            <div className="main-sub-title mb10">강한 특성</div>
                            <ul>
                              <li>
                                타인과 협력하지 않고 의사결정을 하려는
                                권위주의적 성향과 규정을 위반한 타인을 능숙하게
                                시정하는 성향인 효과적인 준칙요구 특성 등이
                                나타납니다.
                              </li>
                              <li>
                                승진 선호가 강해 승진이 동기부여에 영향을 미치며
                                재무/비즈니스에 대한 흥미가 높습니다.
                              </li>
                            </ul>
                          </div>
                          <div className="mb20">
                            <div className="main-sub-title mb10">약한 특성</div>
                            <ul>
                              <li>
                                타인이 요령있게 대화하길 바라는 세련된 대화 선호
                                특질 등이 약하게 나타납니다.
                              </li>
                              <li>
                                탄력적 근무 선호가 약해 탄력적 근무가 동기부여에
                                영향을 미치지 않으며, 연구/학습에 대한 흥미가
                                낮습니다.
                              </li>
                            </ul>
                          </div>
                          <div className="mb20">
                            <div className="main-sub-title mb10">
                              피해야 할 특질
                            </div>
                            <ul>
                              <li>발견되지 않았습니다.</li>
                            </ul>
                          </div>

                          <div className="flex mb30">
                            <table>
                              <tbody className="page-16-table-sec mt20 mr30">
                                <tr className="tc">
                                  <td className="header" colSpan="2">
                                    <div className="flc sb w-100">
                                      <div>강한 특성</div>
                                      <div className="sub-title-page-16">
                                        결과값
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td rowSpan="6" className="tc sec-header">
                                    특질
                                  </td>
                                </tr>
                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>권위주의적</div>
                                        <div>(Effective Enforcing)</div>
                                      </div>
                                      <div>9.9</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>솔직한</div>
                                        <div>(Frank)</div>
                                      </div>
                                      <div>9.6</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>유능한 리더 선호</div>
                                        <div>(Wants Capable Leader)</div>
                                      </div>
                                      <div>9.5</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>세련된 진솔함</div>
                                        <div>(Forthright Diplomacy)</div>
                                      </div>
                                      <div>9.4</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>참여유도형 권위주장</div>
                                        <div>(Authoritative Collaboration)</div>
                                      </div>
                                      <div>9.4</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="tc sec-header">행동특성</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>효과적인 준칙요구</div>
                                        <div>(Effective Enforcing)</div>
                                      </div>
                                      <div>9.2</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="tc sec-header">동기부여</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>승진선호</div>
                                        <div>(Wants Advancement)</div>
                                      </div>
                                      <div>10.0</div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="tc sec-header">흥미 선호</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>재무/비즈니스</div>
                                        <div>(Finance / business)</div>
                                      </div>
                                      <div>10.0</div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table>
                              <tbody className="page-16-table-thr mt20">
                                <tr className="tc">
                                  <td className="header" colSpan="2">
                                    <div className="flc sb w-100">
                                      <div>약한 특성</div>
                                      <div className="sub-title-page-16">
                                        결과값
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td rowSpan="2" className="tc sec-header">
                                    특질
                                  </td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>세련된 대화 선호</div>
                                        <div>(Wants Diplomacy)</div>
                                      </div>
                                      <div>2.3</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>도전성</div>
                                        <div>(Wants Challenge)</div>
                                      </div>
                                      <div>2.3</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="tc sec-header">행동특성</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>-</div>
                                      </div>
                                      <div>-</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="tc sec-header">동기부여</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>탄력적 근무 선호</div>
                                        <div>(Wants Flexible Work Time))</div>
                                      </div>
                                      <div>1.0</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="tc sec-header">흥미 선호</td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>연구/학습</div>
                                        <div>(Research / learning)</div>
                                      </div>
                                      <div>3.4</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr className="tc">
                                  <td className="header thr-thr" colSpan="2">
                                    <div className="flc sb w-100">
                                      <div>피해야 할 특질</div>
                                      <div className="sub-title-page-16">
                                        결과값
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td
                                    rowSpan="2"
                                    className="tc sec-header thr-thr"
                                  >
                                    피해야할 특질
                                  </td>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>-</div>
                                      </div>
                                      <div>-</div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="right-td">
                                    <div className="flc sb">
                                      <div>
                                        <div>-</div>
                                      </div>
                                      <div>-</div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="main-sub-title mb10">
                            해리슨 진단 Guide
                          </div>
                          <div className="normal-font">
                            해리슨 진단은 개인 특성을 특질과 특질이 말이나
                            행동으로 발현되어 관찰되는 행동특성, 동기부여요소,
                            흥미/선호사항, 피해야할부정적인 특질로 구분하고
                            있습니다.
                          </div>

                          <table>
                            <tbody className="page-16-table mt30">
                              <tr>
                                <td className="tc header">특질</td>
                                <td>
                                  개인간 성격 차이를 유발하는 심리적 경향성
                                  (분석적, 권위적, 협력적등)
                                </td>
                              </tr>
                              <tr>
                                <td className="tc header">행동특성</td>
                                <td>
                                  특질 中 실제 말이나 행동으로 발현되어 관찰
                                  가능성이 높은 요소 (협상력, 코칭등)
                                </td>
                              </tr>
                              <tr>
                                <td className="tc header">동기부여</td>
                                <td>
                                  개인이 업무에 몰입하도록 하는 동기부여 요소
                                  (경제적보상, 승진, 인정등)
                                </td>
                              </tr>
                              <tr>
                                <td className="tc header">흥미 선호</td>
                                <td>
                                  개인 흥미 분야, 선호하는 업무 환경 및 주제
                                  (심리학, 여행등)
                                </td>
                              </tr>
                              <tr>
                                <td className="tc header">피해야 할 특질</td>
                                <td>
                                  수동적, 공격적 성향 등 부정적인 특성 (독단적,
                                  방어적, 회의적등)
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 18 pr">
            <div className="page-absolute">18 / 36</div>
            <div className="page 17">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="user-info">
                    <div className="sub-title">소속:</div>
                    <div className="department">미래 전략 기획부</div>

                    <div className="sub-title">직책:</div>
                    <div className="duty">부장</div>

                    <div className="user-name">홍길동</div>
                  </div>

                  <div className="title-container">
                    <div className="top-line"></div>
                    <div>
                      <div className="flex ab sb">
                        <h4 className="main-title">Summary 리더십 진단 결과</h4>
                        <div className="flc">
                          <div>나의 리더십 역량</div>
                        </div>
                      </div>

                      <hr className="bottom-line" />
                    </div>

                    <div>
                      <div className="text-container">
                        <div className="mt30">
                          <div className="mb20">
                            <ul>
                              <li>
                                홍길동님의 Leading Business, Building Trust,
                                Managing Organization 역할은 모두 회사 內 유사한
                                수준입니다.
                              </li>
                              <li>
                                귀하는 NH투자증권의 모든 역량에 대해 회사 평균
                                대비 유사한 수준의 역량을 보유하고 있습니다.
                              </li>
                            </ul>
                            <div className="info mt20">
                              <span className="material-symbols-outlined">
                                arrow_right
                              </span>
                              회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5
                              미만인 경우 “낮은“ 수준으로 표현하였습니다.
                            </div>
                          </div>
                        </div>

                        <img
                          className="w-100"
                          src={page_17_sub_image_1}
                          alt="page_17_sub_image_1"
                        />

                        <img
                          className="w-100"
                          src={page_17_sub_image_2}
                          alt="page_17_sub_image_2"
                        />

                        <img
                          className="w-100"
                          src={page_17_sub_image_3}
                          alt="page_17_sub_image_3"
                        />

                        <div className="info mt20">
                          <span className="material-symbols-outlined">
                            arrow_right
                          </span>
                          리포트 내 모든 결과값은 소수점 둘째 자리에서 반올림
                          처리한 값입니다. 단, 본인점수와 전사 평균 간 점수가
                          ±0.5점을 초과한 역량 선정은 반올림 처리하지 않은 값을
                          기준으로 하였습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 19 pr">
            <div className="page-absolute">19 / 36</div>
            <div className="page 18">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">
                        Summary 전사 조직문화 진단 결과
                      </h4>
                      <h5 className="main-title">전사 조직문화</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>

                  <div className="w-100 h1207">
                    <div className="mt50">
                      <ul>
                        <li>
                          홍길동님이 소속된 00부의 전사 조직문화 만족도는 평균
                          3.5으로 전사 평균 대비 높은 수준입니다.
                        </li>
                        <li>
                          가장 높은 점수가 도출된 5가지는 고객지향, 조건적몰입,
                          소속감, 분위기, 협업입니다.
                        </li>
                        <li>
                          가장 낮은 점수가 도출된 3가지는 HR,보상, 인력입니다.
                        </li>
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5 미만인
                        경우 “낮은“ 수준으로 표현하였습니다.
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
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        익명성 보장을 위하여 전사 조직문화 결과 분석에서
                        사업부/센터 단위는 생략하였습니다.
                      </div>
                    </div>
                    <div className="text-container mt50">
                      <h5 className="mb20">
                        전사 조직문화 - 리더십 역량 부하점수 간 관계 설명력
                      </h5>
                    </div>
                    <img
                      style={{ width: 900 }}
                      src={bar_graph}
                      alt="bar_graph"
                    />
                    <div className="info mt20">
                      <span className="material-symbols-outlined">
                        arrow_right
                      </span>
                      항목별 상세 진단문항은 4페이지를 참고
                    </div>
                    <div className="mt20">
                      <ul>
                        <li>
                          위 그래프는 전사 조직문화 점수와 리더십 역량 점수 간의
                          관계(설명력)를 분석한 그래프로 설명력이 0.2 이상인
                          경우 리더십 역량이 전사 조직문화에 미치는 영향이
                          높음을 의미합니다.
                        </li>
                        <li>
                          부하가 평가한 리더십 역량은 리더가 직접 운영하는
                          영역(평가, 조직, 프로세스, 인력)과 리더와의
                          상호작용에서 경험할 수 있는 영역(직무만족, 소속감,
                          소통)에 영향을 미치는 것으로 나타났습니다.
                        </li>
                        <li>
                          따라서 리더십 역량이 전사 조직문화 체감에 기여할 수
                          있으며, 좋지 못한 리더십으로 인해 구성원들이
                          부정적으로 조직문화를 체감할 수 있음을 의미합니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 20 pr">
            <div className="page-absolute">20 / 36</div>
            <div className="page 19">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">나의 리더십 역량</h4>
                      <h5 className="main-title">Leading Business</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>

                  <div className="w-100 h1207">
                    <div className="text-container mt50">
                      <h5 className="mb10">총평</h5>
                      <ul>
                        <li>
                          홍길동 님은 본인 Leading Business 역할에 대하여 우수한
                          수준이라고 평가하셨으며, 이는 타인 진단 결과 대비
                          유사한 수준입니다.
                        </li>
                        <li>
                          홍길동 님의 Leading Business 역할은 4.1으로 이는
                          회사內유사한 수준이며, 소속 조직內유사한 수준입니다.
                        </li>
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5
                        사이인 경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“
                        수준으로 표현하였습니다.
                      </div>
                    </div>
                    <div className="text-container mt50">
                      <h5 className="mb20">관계별 결과 비교</h5>
                    </div>
                    <img
                      style={{ width: 930 }}
                      src={bar_chart}
                      alt="bar_chart"
                    />
                    <div className="text-container mt50">
                      <h5 className="mb20">연도별/조직간 비교</h5>
                    </div>
                    <div className="mt20" style={{ position: "relative" }}>
                      <div className="emphasize-line"></div>
                      <table>
                        <tbody className="bt">
                          <tr className="tc header">
                            <td className="br" rowSpan="2">
                              리더역할
                            </td>
                            <td className="br" rowSpan="2">
                              리더십 역량
                            </td>
                            <td className="br" rowSpan="2">
                              역량 Keyword
                            </td>
                            <td rowSpan="2">20년</td>
                            <td rowSpan="2">21년</td>
                            <td rowSpan="2">22년</td>
                            <td colSpan="2">평균</td>
                          </tr>
                          <tr className="tc header">
                            <td className="bt br">사업부</td>
                            <td className="bt br">전사</td>
                          </tr>
                          <tr className="tc bt">
                            <td></td>
                            <td colSpan="2">Total</td>
                            <td>-</td>
                            <td>-</td>
                            <td>3.5</td>
                            <td>3.5</td>
                            <td>3.5</td>
                          </tr>
                          {/* <!-- 비전제시 데이터 --> */}
                          <tr className="tc">
                            <td className="wmven fwb bt emphasize" rowSpan="25">
                              Leading Business
                            </td>
                            <td className="fwb br bt header" rowSpan="4">
                              비전제시
                            </td>
                            <td className="header fwb bt tl">비전제시</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">비즈니스 감각</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">혁신적 사고</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">비전 실행관리</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 합리적 의사결정 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              합리적 의사결정
                            </td>
                            <td className="header fwb bt tl">
                              합리적 의사결정
                            </td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">고객중심</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">전문성</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">계획수립</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 강력한 실행력 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              강력한 실행력
                            </td>
                            <td className="header fwb bt tl">강력한 실행력</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">전략적 네트워크</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">위험관리</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">추진력</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 21 pr">
            <div className="page-absolute">21 / 36</div>
            <div className="page 20">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">나의 리더십 역량</h4>
                      <h5 className="main-title">Managing Organization</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>

                  <div className="w-100 h1207">
                    <div className="text-container mt50">
                      <h5 className="mb10">총평</h5>
                      <ul>
                        <li>
                          홍길동 님은 본인 Managing Organization 역할에 대하여
                          우수한 수준이라고 평가하셨으며,이는 타인 진단 결과
                          대비 높은 수준입니다.
                        </li>
                        <li>
                          홍길동 님의 Managing Organization 역할은 4.1점으로
                          이는 회사內유사한 수준이며, 소속 조직內유사한
                          수준입니다.
                        </li>
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5
                        사이인 경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“
                        수준으로 표현하였습니다.
                      </div>
                    </div>
                    <div className="text-container mt50">
                      <h5 className="mb20">관계별 결과 비교</h5>
                    </div>
                    <img
                      style={{ width: 930 }}
                      src={page_20_bar_chart}
                      alt="page_20_bar_chart"
                    />
                    <div className="text-container mt50">
                      <h5 className="mb20">연도별/조직간 비교</h5>
                    </div>
                    <div className="mt20" style={{ position: "relative" }}>
                      <div className="emphasize-line"></div>
                      <table>
                        <tbody className="bt">
                          <tr className="tc header">
                            <td className="br" rowSpan="2">
                              리더역할
                            </td>
                            <td className="br" rowSpan="2">
                              리더십 역량
                            </td>
                            <td className="br" rowSpan="2">
                              역량 Keyword
                            </td>
                            <td rowSpan="2">20년</td>
                            <td rowSpan="2">21년</td>
                            <td rowSpan="2">22년</td>
                            <td colSpan="2">평균</td>
                          </tr>
                          <tr className="tc header">
                            <td className="bt br">사업부</td>
                            <td className="bt br">전사</td>
                          </tr>
                          <tr className="tc bt">
                            <td></td>
                            <td colSpan="2">Total</td>
                            <td>-</td>
                            <td>-</td>
                            <td>3.5</td>
                            <td>3.5</td>
                            <td>3.5</td>
                          </tr>
                          {/* <!-- 비전제시 데이터 --> */}
                          <tr className="tc">
                            <td className="wmven fwb bt emphasize" rowSpan="25">
                              Managing Org.
                            </td>
                            <td className="fwb br bt header" rowSpan="4">
                              인재육성
                            </td>
                            <td className="header fwb bt tl">인재육성</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">경력비전제시</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">코칭/피드백</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">동기부여</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 합리적 의사결정 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              효율적 조직운영
                            </td>
                            <td className="header fwb bt tl">
                              효율적 조직운영
                            </td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">자원관리</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">권한/책임부여</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">성과관리</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 강력한 실행력 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              경계없는 협력
                            </td>
                            <td className="header fwb bt tl">경계없는 협력</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">상호이해</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">문제해결지원</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">갈등관리</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 22 pr">
            <div className="page-absolute">22 / 36</div>
            <div className="page 21">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">나의 리더십 역량</h4>
                      <h5 className="main-title">Building Trust</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>

                  <div className="w-100 h1207">
                    <div className="text-container mt50">
                      <h5 className="mb10">총평</h5>
                      <ul>
                        <li>
                          홍길동 님은 본인 Building Trust 역할에 대하여 우수한
                          수준이라고 평가하셨으며, 이는 타인 진단 결과 대비 높은
                          수준입니다.
                        </li>
                        <li>
                          홍길동 님의 Building Trust 역할은 4.2점으로 이는
                          회사內유사한 수준이며, 소속 조직內유사한 수준입니다.
                        </li>
                      </ul>
                      <div className="info mt20">
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5
                        사이인 경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“
                        수준으로 표현하였습니다.
                      </div>
                    </div>
                    <div className="text-container mt50">
                      <h5 className="mb20">관계별 결과 비교</h5>
                    </div>
                    <img
                      style={{ width: 930 }}
                      src={page_21_bar_chart}
                      alt="page_21_bar_chart"
                    />
                    <div className="text-container mt50">
                      <h5 className="mb20">연도별/조직간 비교</h5>
                    </div>
                    <div className="mt20" style={{ position: "relative" }}>
                      <div className="emphasize-line"></div>
                      <table>
                        <tbody className="bt">
                          <tr className="tc header">
                            <td className="br" rowSpan="2">
                              리더역할
                            </td>
                            <td
                              className="br"
                              rowSpan="2"
                              style={{ width: 176 }}
                            >
                              리더십 역량
                            </td>
                            <td className="br" rowSpan="2">
                              역량 Keyword
                            </td>
                            <td rowSpan="2">20년</td>
                            <td rowSpan="2">21년</td>
                            <td rowSpan="2">22년</td>
                            <td colSpan="2">평균</td>
                          </tr>
                          <tr className="tc header">
                            <td className="bt br">사업부</td>
                            <td className="bt br">전사</td>
                          </tr>
                          <tr className="tc bt">
                            <td></td>
                            <td colSpan="2">Total</td>
                            <td>-</td>
                            <td>-</td>
                            <td>3.5</td>
                            <td>3.5</td>
                            <td>3.5</td>
                          </tr>
                          {/* <!-- 비전제시 데이터 --> */}
                          <tr className="tc">
                            <td className="wmven fwb bt emphasize" rowSpan="25">
                              Building Trust
                            </td>
                            <td className="fwb br bt header" rowSpan="4">
                              윤리의식
                            </td>
                            <td className="header fwb bt tl">윤리의식</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">원칙준수</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">조직관리 공정성</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">의사결정 공정성</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 합리적 의사결정 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              감성지능
                            </td>
                            <td className="header fwb bt tl">감성지능</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">다양성 존중</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">경청/의사소통</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">정보공유</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 강력한 실행력 데이터 --> */}
                          <tr className="tc">
                            <td className="fwb br bt header" rowSpan="4">
                              롤모델
                            </td>
                            <td className="header fwb bt tl">롤모델</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">주체성</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">책임감</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          <tr className="tc">
                            <td className="header bt tl">솔선수범</td>
                            <td className="bt">-</td>
                            <td className="bt">-</td>
                            <td className="bt">3.3</td>
                            <td className="bt">3.5</td>
                            <td className="bt">3.5</td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      <div className="main-bold-title">
                        리더십 위험유형별 수준
                      </div>
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
                                  <div className="bar-graph no-problem">
                                    71%
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex w-100">
                              <div className="type-header">책임 전가형</div>
                              <div className="flex w-100">
                                <div style={{ width: "100%", minWidth: 60 }}>
                                  <div className="bar-graph no-problem">
                                    100%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    71%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    71%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    71%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    86%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    57%
                                  </div>
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
                                  <div className="bar-graph no-problem">
                                    86%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- <img style={{width:930px;" src="image/sub-image/page-22/bar-graph-table.png" alt=""/> --> */}
                    <div className="info mt20">
                      <span className="material-symbols-outlined">
                        arrow_right
                      </span>
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
          <div className="image-containe page 24 pr">
            <div className="page-absolute">24 / 36</div>
            <div className="page 23">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <h4 className="main-title">소속별 조직문화 진단</h4>
                    <hr className="bottom-line" />
                    <div className="w-100 pt30">
                      <div className="text-container">
                        <div className="main-sub-title">총평</div>
                        <ul className="flex fc mt10">
                          <li>
                            홍길동님이 속한 조직의 지배적인 조직문화는
                            공동체형이며, NH투자증권 전사 조직문화에 해당 하는
                            공동체형/성과중시형 중 하나에 해당합니다.
                          </li>
                          <li>
                            홍길동님의 리더십 스타일은 조정자로, 속한 조직의
                            지배적인 조직문화와 적합한 스타일인 촉진 자/조언자와
                            다릅니다.
                          </li>
                          <li>
                            홍길동님이 속한 조직에서 가장 높은 점수가 도출된
                            조직문화 진단 영역 3가지는 수평적 소통, 조직에 대한
                            자부심, 동료 협업입니다.
                          </li>
                          <li>
                            홍길동님이 속한 조직에서 가장 낮은 점수가 도출된
                            조직문화 진단 영역 3가지는 조직장에 의한 동기부여,
                            업무성과 중시, 업무효율성입니다.
                          </li>
                        </ul>
                      </div>
                      <div className="text-container">
                        <div className="flc">
                          <div className="text-container row mt40">
                            <div className="main-bold-title mr10">
                              소속별 조직문화
                            </div>
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
                                  <p>
                                    우리 부서 조직문화 유형&적합 리더십 스타일
                                  </p>
                                </div>
                              </div>
                              <div className="mt50" style={{ width: "100%" }}>
                                <img src={right_graph} alt="right_graph"></img>
                              </div>
                            </div>
                            <div className="left-section">
                              <div className="page-23-chart-info">
                                <div className="flex ac mt10">
                                  <div className="bar-blue mr8"></div>
                                  <p>
                                    나의 리더십 스타일(본인 총점 중 가장 점수가
                                    높은 스타일)
                                  </p>
                                </div>
                                <div className="flex mt10">
                                  <div className="bar-yellow mr8"></div>
                                  <p>
                                    우리 부서 조직문화 유형 & 적합 리더십 스타일
                                    <br />
                                    (총점이 가장 높은 조직문화 유형 및 연계되는
                                    리더십 스타일)
                                  </p>
                                </div>
                                <div className="mt30">
                                  <table>
                                    <tbody className="bt">
                                      <tr className="tc header">
                                        <td className="br">조직문화 유형</td>
                                        <td className="br">총점</td>
                                        <td className="br">전사</td>
                                        <td className="br">
                                          연계 리더십 스타일
                                        </td>
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
                                        <td
                                          className="bt yello-bg fwb"
                                          rowSpan="2"
                                        >
                                          3.5
                                        </td>
                                        <td className="bt yello-bg" rowSpan="2">
                                          3.7
                                        </td>
                                        <td className="bt yello-bg">조언자</td>
                                        <td className="bt yello-bg fwb">
                                          4.13
                                        </td>
                                        <td className="bt yello-bg ">3.84</td>
                                      </tr>
                                      <tr>
                                        <td className="bt yello-bg">촉진자</td>
                                        <td className="bt yello-bg fwb">
                                          4.17
                                        </td>
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
                              귀하가 특징적으로 발휘하는 리더십 스타일은
                              조정자형이며, 이는 위계질서형 조직문화에 적합한
                              스타일입니다.
                            </li>
                            <li>
                              현재 소속 조직의 조직문화에 적합한 리더십 스타일을
                              발현하기 위한 노력 혹은 현재 소속 조직의 조직문화
                              유형을 변화시키려는 노력이 <br />
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
                        <div
                          className="flex"
                          style={{ alignItems: "flex-end" }}
                        >
                          <h5 className="main-bold-title mr10">
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
                        <h5 className="mr8">조직內관계</h5>
                        <p className="ml">
                          (조직內상사, 동료, 후배와의 신뢰, 팀워크 등
                          부서內관계에 대한 건강도)
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
                            <h5 className="mr8">조직만족</h5>
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
                            <h5 className="mr8">업무 몰입</h5>
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
                        <span className="material-symbols-outlined">
                          arrow_right
                        </span>
                        리포트 내 모든 결과값은 소수점 둘째 자리에서 반올림
                        처리한 값입니다. 단, 본인 소속 조직 점수와 전사 평균 간
                        점수가 ±0.5점을 초과한 문항 및 Top/Bottom 3 문항 선정은
                        반올림 처리하지 않은 값을 기준으로 하였습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 26 pr">
            <div className="page-absolute">26 / 36</div>
            <div className="page 25">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="top-line"></div>
                    <div className="flex ab sb">
                      <h4 className="main-title">주관식 응답</h4>
                    </div>
                    <hr className="bottom-line" />
                    <div className="w-100 pt30">
                      <h5 className="mb10">리더십 진단</h5>
                      <div className="page-25-container">
                        <div className="left-section">
                          <h5 className="mt30">강점</h5>
                          <img src={page_25_image_01} alt="page_25_image_01" />
                          <ul className="mt10">
                            <li>
                              포용력 있게 합리적으로 팀원을 관리/지휘하며,
                              조직의 이익을 위해 최선을 다함
                            </li>
                            <li>
                              일상적인 의사소통 시 부서원과 격의 없이 소통하여
                              부서에 업무 외적으로 불필요한 긴장감을 조성하지
                              않음
                            </li>
                            <li>모든 점에서 최고의 리더이신 것 같음.</li>
                            <li>축적된 업무 경험과 수평적 사고를 보유함</li>
                            <li>온화하고 부드러운 리더십을 보유함</li>
                          </ul>
                        </div>
                        <div className="right-section">
                          <h5 className="mt30">미흡한 점</h5>
                          <img src={page_25_image_02} alt="page_25_image_02" />
                          <ul className="mt10">
                            <li>
                              업무 시 의사결정기준이 하급자 눈에 명확히 보이지
                              않아 참고하거나 배우기 어렵고, 부서원들 사이에
                              같은 업무라도 실무자에 따라 부서장 챌린지가
                              다르다는 불만이 있음
                            </li>
                            <li>
                              기존 조직의 관성으로 상급자에 대하여 위축되거나
                              격식을 의식하시는듯한데, 편하게 의사소통하면
                              좋을듯함
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

          <div className="image-container page 30 pr">
            <img className="page 29" src={page_29} alt="page_29" />
          </div>
          <div className="image-container page 31 pr">
            <div className="page-absolute">28 / 36</div>
            <div className="page 30-1">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Leading Business 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">비전제시 Being Visionary</td>
                          </tr>
                          {/* <!-- 비즈니스 감각 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              비즈니스 감각
                              <br />
                              Business Insight
                            </td>
                            <td className="tl" rowSpan="2">
                              시장과 정책의 변화가 비즈니스에 미치는 영향을
                              이해하고 사업/업무 포트폴리오를 조정한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Dr.Raj Ramesh, Are You Drowning in Data, but
                                Starving for Insights?
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Fujitsu Forum, The power of insight - Using
                                analytics to create business value
                              </div>
                            </td>
                            <td rowSpan="2">중재자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘원더’ | 이인 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘넥스트 그린 레볼루션＇| 조원경 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘운의 속성‘ | 스기우라 마사카즈 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘플라이휠을 돌려라’ | 짐 콜린스 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 혁신적 사고 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              혁신적 사고
                              <br />
                              Innovative Thinking
                            </td>
                            <td className="tl" rowSpan="2">
                              신기술이나 다른 업무방식이 새로운 (사업)기회가 될
                              수 있음을 이해하고 새로운 아이디어를 적극적으로
                              탐색하고 수용한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Stanfordonline, How to be an Innovative Leader :
                                A Jam Session with Stanford Faculty
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Innovation thinking, be your own innovator |
                                Davide Caffi | TEDxGuildford
                              </div>
                            </td>
                            <td rowSpan="2">개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘룬샷’ | 사피 바칼 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘어떻게 일할 것인가’ | 아툴 가완디 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 비전 실행관리 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              비전 실행관리
                              <br />
                              Vision Administrator
                            </td>
                            <td className="tl" rowSpan="2">
                              조직의 전략방향을 구성원들과 공유하고 구성원들의
                              업무가 전략방향과 연계될 수 있도록 지원한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Root Impact, [조직문화 201] 구글이 일하는 방식
                              </div>
                            </td>
                            <td rowSpan="2">개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘순간의 힘‘ | 칩 히스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘모두를 움직이는 힘’ | 마이클 하얏트 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘전략을 실행되게 하라’ | 파울 라인반트 & 체사레
                                마이나르디 & 아트 클라이너 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          <tr className="tc header">
                            <td colSpan="5">
                              합리적 의사결정 Reasonable Decision Making
                            </td>
                          </tr>
                          {/* <!-- 고객중심 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              고객중심
                              <br />
                              Customer Orientation
                            </td>
                            <td className="tl" rowSpan="2">
                              고객의 니즈를 파악하고 이해하기 위해 다양한 활동을
                              수행하며, 고객의 관점에서 문제를 바라보고 해결안을
                              제시한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Don't Listen To Your Customers -Do This Instead
                                | Kristen Berman | TEDxBerlin
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Shep Hyken, Five ways to create a customer
                                focused mindset
                              </div>
                            </td>
                            <td rowSpan="2">중재자, 개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘공감은 어떻게 기업의 매출이 되는가’ | 마리아
                                로스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘기버2 셀모어’ | 밥버그, 존 데이비드 만 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘위대한 기업은 변화하는 고객 니즈에 집중한다’ |
                                수만 사카르 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 전문성 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              전문성
                              <br />
                              Expertism
                            </td>
                            <td className="tl" rowSpan="2">
                              담당 분야에 대한 전문성과 통찰력을 바탕으로
                              사업/업무를 리드한다.
                            </td>
                            <td className="wsn" rowSpan="2">
                              서적
                            </td>
                            <td className="tl" rowSpan="2">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘피터 드러커 자기경영노트’ | 피터 F. 드러커 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘내 인생의 CEO가 되자’ | 엘런 에른스트 코섹,
                                브렌다 라우치 지음
                              </div>
                              <div className="info-red">
                                * 각 직무 전문 분야가 다양하여 프로페셔널한
                                자기관리,통찰력 관련 서적을 선정하였습니다.
                              </div>
                            </td>
                            <td rowSpan="2">성취자</td>
                          </tr>
                          <tr></tr>
                          {/* <!-- / --> */}
                          {/* <!-- 계획수립 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              계획수립
                              <br />
                              Planning
                            </td>
                            <td className="tl" rowSpan="2">
                              회사의 전략방향과 조직의 미션을 반영하여 구체적인
                              계획을 수립하고 업무 우선순위를 설정하는 등 업무를
                              체계적으로 추진한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Harvard Business Review ,The Explainer : Writing
                                Great Business Plans
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Ted, why the secret to success is setting the
                                right goals | John Doerr
                              </div>
                            </td>
                            <td rowSpan="2">조정자, 감독자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘빠르게 실패하기’ | 존 크럼볼츠, 라이언 바비노
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘연간 사업계획 수립 & 그 후 실행관리’ | 경진건
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘실행력: 단계별로 계획을 추진하는 힘’ | 로버트
                                네이만 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 32 pr">
            <div className="page-absolute">29 / 36</div>
            <div className="page 30-2">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Leading Business 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">강력한 실행력 Driving Force</td>
                          </tr>
                          {/* <!-- 전략적 네트워크 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              전략적 네트워크
                              <br />
                              Strategic Network
                            </td>
                            <td className="tl" rowSpan="2">
                              비즈니스를 성공적으로 수행하기 위해 도움이 되는
                              전문적인 네트워크를 형성하고 관계를 지속적으로
                              유지한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                TEDx Talks, Networking: Why it matters and how
                                to do it better | Paul Taylor |
                                TEDxUniversityofStrathclyde
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Andrew LaCivita, Business Networking : How to
                                Build Professional Relationships
                              </div>
                            </td>
                            <td rowSpan="2">중재자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘인맥보다 강력한 네트워킹의 힘’ | 재닌 가너 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘나보다 똑똑한 vv우리, 소셜 네트워킹과
                                집단지성의 비즈니스 혁명’ | 배리 리버트, 존
                                스펙터 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 위험관리 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              위험관리
                              <br />
                              Risk Mgmt.
                            </td>
                            <td className="tl" rowSpan="2">
                              발생 가능한 위험 요인을 예측하고 선제적으로
                              대응하여 성과를 창출한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                QualityGurus, Risk Management for Managers - 5
                                Simple Steps
                              </div>
                            </td>
                            <td rowSpan="2">감시자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘잘나가던 기업이 왜 망했을까?’ | 아라키 히로유키
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘업스트림’ | 댄 히스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘위기의 시대, 글로벌 기업의 리스크 관리’ |
                                김영식 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 추진력 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              추진력
                              <br />
                              Execution
                            </td>
                            <td className="tl" rowSpan="2">
                              업무 추진 과정에 어려움이 발생하더라도 설득과
                              협상을 통해 결단력 있게 추진한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Harvard Business Review, The Explainer:
                                Balancing Execution and Adaptation
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                Jim Clemmer, Execution – the key to how leaders
                                get things done
                              </div>
                            </td>
                            <td rowSpan="2">성취자, 중재자, 개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘허슬, 멈추지 않는 추진력의 비밀’ | 닐 파텔,
                                패트릭 블라스코비츠, 보나스 코플러 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘모든 것이 달라지는 순간’ | 리타 맥그래스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘성공하는 프로젝트는 실행이 다르다’ | 사비에르
                                길버트, 베티나 뷔첼, 로다 데이비드슨 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 33 pr">
            <div className="page-absolute">30 / 36</div>
            <div className="page 31-1">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Building Trust 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">윤리의식 Business Ethics</td>
                          </tr>
                          {/* <!-- 원칙준수 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              원칙준수
                              <br />
                              Compliance
                            </td>
                            <td className="tl" rowSpan="2">
                              직업적/개인적 윤리의식을 가지고, 회사의 규정과
                              절차에 따라 업무를 수행한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Business in Canada-Do it right!, What is
                                Compliance and why is it important?
                              </div>
                            </td>
                            <td rowSpan="2">감시자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘마인드셋’ | 캐럴 드웻 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘정직한 리더의 성공철학’ | 존 헌츠먼 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘원칙’ | 레이 달리오 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 조직관리 공정성 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              조직관리 공정성
                              <br />
                              Managing Fairness
                            </td>
                            <td className="tl" rowSpan="2">
                              구성원들의 배경에 관계 없이 역량에 합당한
                              업무기회를 제공하고, 성과를 기반으로 공정하게
                              평가, 보상한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Productivity ACE, Creating A Culture Of Fairness
                                At Work - Tips For A Winning & Fair Workplace
                              </div>
                            </td>
                            <td rowSpan="2">감독자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘공정한 인사관리를 통한 기업의 경쟁력 제고방안’
                                | 오계택 , 윤정구 , 양동훈 , 홍계훈 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘공정한 리더＇| 베로니카 후케 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 의사결정 공정성 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              의사결정 공정성
                              <br />
                              Decisioning Fairness
                            </td>
                            <td className="tl" rowSpan="2">
                              개인의 이해관계보다는 조직의 목표와 이익을
                              우선으로 하여 합리적으로 의사결정한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                TEDx Talks, Before You Decide: 3 Steps To Better
                                Decision Making | Matthew Confer | TEDxOakLawn
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                소확성, 탁월한 의사결정을 위한 5단계
                                프로세스│고영성, 신영준 작가
                              </div>
                            </td>
                            <td rowSpan="2">성취자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더는 결정으로 말한다’ | 김호준 외 9명 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘팩트풀니스’ | 한스 로슬링 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘생각에 관한 생각’ | 대니얼 카너먼 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘조직과 의사결정 조직이 어떻게 의사결정의
                                합리성을 제고시키는가’ | 시요우민, 류원뤼,
                                무윈우지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          <tr className="tc header">
                            <td colSpan="5">감성지능 Emotional Intelligence</td>
                          </tr>
                          {/* <!-- 다양성 존중 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              다양성 존중
                              <br />
                              Diversity
                            </td>
                            <td className="tl" rowSpan="2">
                              나이, 성별, 조직, 직급, 업무 차이를 막론하고
                              구성원을 존중하고 배려한다
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Harvard Business Review, 5 Ways to Infuse
                                Diversity and Inclusion Into Your Organization
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                TedX Talks, 3 ways to create a work culture that
                                brings out the best in employees | Chris White
                              </div>
                            </td>
                            <td rowSpan="2">조언자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘공정한 리더’ | 베로니카 후케 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘인크루서파이 통합의 기술: 혁신적인 팀 구축을
                                위한 리더의 필수 역량’ | 스테파니 K. 존슨 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘포용의 시대가 온다’ | 안드레 타피아 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 경청/의사소통 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              경청/의사소통
                              <br />
                              Communication
                            </td>
                            <td className="tl" rowSpan="2">
                              의사결정 과정에 구성원들을 참여시켜 자유로운
                              의견개진을 유도하고 합의된 방향을 공유한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Stanford Graduate school of Business, Think Fast
                                Talk Smart: Communication Techniques
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                TedX Talks, 3 ways to create a work culture that
                                brings out the best in employees | Chris White
                              </div>
                            </td>
                            <td rowSpan="2">조언자, 촉진자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘인간의 이름으로 다시 쓰는 경영학’ | 최동석 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘두려움 없는 조직’ | 에이미 에드먼슨 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더의 질문법’ | 애드거 샤인, 피터 샤인 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 정보공유 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              정보공유
                              <br />
                              Information Sharing
                            </td>
                            <td className="tl" rowSpan="2">
                              업무에 필요하거나 도움이 되는 정보를 독점하지 않고
                              구성원에게 적절하게 공유될 수 있도록 지원한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Growth Engineering, How to Create a Knowledge
                                Sharing Culture
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                EO, 한국과 다른 미국의 정보공유 문화 | K-Group
                                부회장, PWC 컨설턴트 이해성 [리얼밸리 EP 16]
                              </div>
                            </td>
                            <td rowSpan="2">감시자, 조정자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘오픈 리더십’ | 쉘린 리 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘보이게 일하라’ | 김성호 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 34 pr">
            <div className="page-absolute">31 / 36</div>
            <div className="page 31-2">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Building Trust 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">롤모델 Role Model</td>
                          </tr>
                          {/* <!-- 주체성 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              주체성
                              <br />
                              Ownership
                            </td>
                            <td className="tl" rowSpan="2">
                              자신이 판단해야 할 의사결정 사항을 동료 혹은 상위
                              의사결정자에게 전가하지 않는다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                TEDx Talks, Extreme Ownership | Jocko Willink |
                                TEDxUniversityofNevada
                              </div>
                            </td>
                            <td rowSpan="2">중재자, 개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더의 마음‘’ | 홍의숙 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘창업자 정신’ | 크리스 주크, 제임스 앨런 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘오픈스페이스 베타’ | 실케 헤르만, 닐스 플레깅
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘네이비씰 승리의 기술(Extreme Ownership)’ | 조코
                                윌링크 & 레이프 바빈 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 책임감 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              책임감
                              <br />
                              Responsibility
                            </td>
                            <td className="tl" rowSpan="2">
                              조직 성과 달성을 위한 구성원들의 과정 및 결과에
                              대해 리더로서 책임을 다한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                TedX Talks, Responsibility and Leadership: Simon
                                Sinek at TedxColumbiaCollege
                              </div>
                            </td>
                            <td rowSpan="2">감독자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더는 결정으로 말한다’ | 김호준, 이동호,
                                배건후, 서수한, 강철호 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘스위치를 올려라’ | 존 G. 밀러 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더의 조건’ | 캐슬린 리어던 등 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘책임은 어떻게 삶을 성장시키는가’ | 쓰쓰미
                                구미코 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 솔선수범 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              솔선수범
                              <br />
                              Lead Self
                            </td>
                            <td className="tl" rowSpan="2">
                              솔선수범하는 모습을 보임으로써 구성원들의 본보기가
                              된다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                We Cannot Lead Others Without First Leading From
                                Within | LollyDaskal | TEDxLincolnSquare
                              </div>
                            </td>
                            <td rowSpan="2">개혁자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘나는 리더인가: 존경받는 롤모델 리더의 비밀’ |
                                홍석환 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘당신의 팀은 괜찮습니까‘’ | 조영탁 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘넥스트 리더십 3.0 차세대 리더의 7가지 조건’ |
                                브래드 카쉬 & 커트니 템플린 지음 윈 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 35 pr">
            <div className="page-absolute">32 / 36</div>
            <div className="page 32-1">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Managing Organization 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">인재육성 Developing Talent</td>
                          </tr>
                          {/* <!-- 경력비전제시 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              경력비전제시
                              <br />
                              Visioning Career Goal
                            </td>
                            <td className="tl" rowSpan="2">
                              구성원들의 역량 수준과 육성 니즈를 반영하여 관련
                              업무 경험을 부여하고 교육을 제공하는 등 역량
                              개발을 지원한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Stephen Goldenberg, Creating an employee
                                development plan for improved employee
                                performance
                              </div>
                            </td>
                            <td rowSpan="2">조언자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘데이비드 시베트 비주얼씽킹’ | 데이비드 시베트
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘사람을 남겨라’ | 정동일 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘후배 하나 잘 키웠을 뿐인데’ | 실비아 앤 휴렛
                                지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 코칭/피드백 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              코칭/피드백
                              <br />
                              Coaching/ Feedback
                            </td>
                            <td className="tl" rowSpan="2">
                              구성원이 자신의 장단점을 파악하고 역량을 개발할 수
                              있도록 명확하고 구체적으로 피드백을 제공한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Millennial Leadership: Stop Complaining, Start
                                Coaching | Danita Bye | TEDxBismarck
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                온토리TV, [박은선의 코칭 리더십]02_진짜 내
                                사람을 만드는 칭찬법 따로 있다!
                              </div>
                            </td>
                            <td rowSpan="2">조언자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘피드포워드 사람의 마음을 움직이는 미래형
                                피드백의 6가지 비밀’ | 조 허시 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘하버드 피드백의 기술’ | 더글러스 스톤 , 쉴라 힌
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘탁월한 리더는 피드백이 다르다’ | 김상범 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 동기부여 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              동기부여
                              <br />
                              Motivation
                            </td>
                            <td className="tl" rowSpan="2">
                              성원에게 담당업무의 목적과 중요성을 인식시키고
                              성취감을 느낄 수 있도록 칭찬하고 인정한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Ted, This is what makes employees happy at work
                                | The way we work
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                세바시 강연, 팀원을 살리는 리더의 말 | 이용
                                봅슬레이 스켈레톤 국가대표 총감독 | 세바시 914회
                              </div>
                            </td>
                            <td rowSpan="2">조언자, 촉진자, 성취자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘무엇이 성과를 이끄는가’ | 닐 도쉬, 린지
                                맥그리거 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘팀장의 동기부여’ | 패트릭 포사이스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘무엇이 그들을 움직였을까’ | 기리오카 다카즈미
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘동기부여 도구상자’ | David M. Kreps 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          <tr className="tc header">
                            <td colSpan="5">
                              효율적 조직운영 Organizational Effectiveness
                            </td>
                          </tr>
                          {/* <!-- 자원관리 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              자원관리
                              <br />
                              Resource Mgmt.
                            </td>
                            <td className="tl" rowSpan="2">
                              목표 달성에 필요한 인적/물적 자원을 확보하고
                              업무의 우선순위에 따라 효율적으로 배분한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ResultsPositive, Resource Management : The
                                Cornerstone of Project and Portfolio Management
                              </div>
                            </td>
                            <td rowSpan="2">중재자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘린 싱킹‘ | 제임스 워맥 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘전략과 경영자’ | 박철순 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘조직의 능력을 끌어올리는 인적자원관리’ | 다니엘
                                골먼 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 권한/책임부여 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              권한/책임부여
                              <br />
                              Empowerment
                            </td>
                            <td className="tl" rowSpan="2">
                              구성원에게 업무방향을 명확히 제시하고 적절한
                              권한을 부여한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                지식디자이너, [10분 인사이트] 임파워먼트를 위한
                                성공 경험의 필요성 | 지식디자이너
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                지식디자이너, [10분 인사이트] 직원이 스스로
                                업무를 잘하도록 하는 권한위임 방법 | 지식
                                디자이너
                              </div>
                            </td>
                            <td rowSpan="2">감독자, 성취자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘초격차’ | 권오현 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                임파워먼트 리더십 | 프랜시스 프라이, 앤 모리스
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                구글의 아침은 자유가 시작된다 | 라즐로 보크 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 성과관리 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              성과관리
                              <br />
                              Performance Mgmt
                            </td>
                            <td className="tl" rowSpan="2">
                              계획 대비 추진실적을 점검하고 미진할 경우
                              대처방안을 강구하여 목표를 달성한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                EBS 비즈니스 리뷰, 당신의 성과관리가 실패하는
                                이유! | EBS 비즈니스 리뷰 플러스 이길상 편
                              </div>
                            </td>
                            <td rowSpan="2">감시자, 감독자, 성취자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘조직을 유연하고 민첩하게 바꾸는 애자일 전략’ |
                                대럴 릭비 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘어디서든 리드하라 ‘ | 데이비드 버커스 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘무엇이 우리의 성과를 방해하는가’ | 토니 슈워츠
                                지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 36 pr">
            <div className="page-absolute">33 / 36</div>
            <div className="page 32-2">
              <div className="need-data-container">
                <div className="for-margin">
                  <div className="title-container">
                    <div className="top-line"></div>
                    <div className="flc jcw">
                      <h4 className="main-title">리더십 역량 개발 가이드</h4>
                      <h5 className="main-title">Managing Organization 역할</h5>
                    </div>
                    <hr className="bottom-line" />
                  </div>
                  <div className="w-100 h1207">
                    <div className="mt50">
                      <table>
                        <tbody className="lecture-list-table">
                          <tr className="tc header">
                            <td className="w150 fwb">
                              역량
                              <br />
                              Keyword
                            </td>
                            <td className="w180 fwb">정의</td>
                            <td className="fwb" colSpan="2">
                              관련 개발 서적 및 강의
                            </td>
                            <td className="w110 fwb">
                              유관 리더십
                              <br />
                              스타일
                            </td>
                          </tr>
                          <tr className="tc header">
                            <td colSpan="5">
                              경계 없는 협력 Boundaryless Collaboration
                            </td>
                          </tr>
                          {/* <!-- 상호이해 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              상호이해
                              <br />
                              Mutual Understanding
                            </td>
                            <td className="tl" rowSpan="2">
                              조직/구성원들 간 다양한 입장을 공유할 수 있는
                              기회를 마련하여 상호간의 이해를 촉진하고, 조직 간
                              공감대를 형성한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Ta UyVu, Emotional Intelligence - High
                                Performance Collaboration : Leadership,
                                Teamwork, and Negotiation
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                TedX Talks, 3 ways to create a work culture that
                                brings out the best in employees | Chris White
                              </div>
                            </td>
                            <td rowSpan="2">촉진자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘절대적이며 상대적인 리더십의 물리학’ | 진원재
                                지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘마음으로 리드하라’ | 류지성 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘소통, 생존과 성장의 비밀통로’ | 김희선 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 문제해결지원 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              문제해결지원
                              <br />
                              Cross-Functional Support
                            </td>
                            <td className="tl" rowSpan="2">
                              문제 발생 시 본부/부서의 이익만 주장하지 않고
                              전사/조직전반 차원에서 해결책을 찾아내기 위해
                              노력한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Rethinking cross-functional collaboration |
                                Maribeth Coleman & Anne McLaughlin |
                                TEDxAtlantaWomen
                              </div>
                            </td>
                            <td rowSpan="2">촉진자, 조정자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘리더가 된다는 것’ | 고바야시 노리타카 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘매일 읽는 존 맥스웰’ | 존 맥스웰 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘경영자가 알아야 할 문제해결의 모든것 아마존에서
                                배워라’ | 사토 마사유키
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                          {/* <!-- 갈등관리 --> */}
                          <tr className="tc">
                            <td rowSpan="2">
                              갈등관리
                              <br />
                              Conflict Management
                            </td>
                            <td className="tl" rowSpan="2">
                              객관적인 자세로 갈등 당사자들의 의견을 수렴하고
                              조율하여 합의점을 모색한다.
                            </td>
                            <td className="wsn">강의</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                Project Manager, Conflict Resolution Training :
                                How To Manage Team Conflict In Under 6 Minutes!
                              </div>
                            </td>
                            <td rowSpan="2">촉진자, 조정자</td>
                          </tr>
                          <tr className="tc">
                            <td className="wsn">서적</td>
                            <td className="tl">
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘동의하지 않습니다’ | 마이클 브라운 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘갈등관리와 협상전략론’ | 천대윤 지음
                              </div>
                              <div className="flex">
                                <div className="mr8">-</div>
                                ‘개인과 조직을 살리는 갈등관리 언컨플릭’ |
                                박효정 & 주충일 외 7명 지음
                              </div>
                            </td>
                          </tr>
                          {/* <!-- / --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container page 37 pr">
            <div className="page-absolute">34 / 36</div>
            <img className="page 33" src={page_33} alt="page_33" />
          </div>
          <div className="image-container page 38 pr">
            <div className="page-absolute">35 / 36</div>
            <img className="page 34" src={page_34} alt="page_34" />
          </div>
          <div className="image-container page 39 pr">
            <img className="page 35" src={page_35} alt="page_35" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
