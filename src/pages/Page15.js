import page_14_sub_image_2 from "../image/sub-image/page-14/page-14-sub-image-2.png";
import page_14_sub_image from "../image/sub-image/page-14/page-14-sub-image.png";
import page_13_sub_image_2 from "../image/sub-image/page-13/page-13-sub-image-2.png";
import page_13_sub_image_3 from "../image/sub-image/page-13/page-13-sub-image-3.png";

export default function Page() {
  return (
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
                    <div>코칭형(Coaching) X 조정자(Coordinator) 스타일</div>
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
                    <div className="image-sub-title-js">나의 리더십 유형</div>
                  </div>
                </div>

                <div className="flex jcs mt50">
                  <div className="flc fc">
                    <img
                      style={{ width: 400 }}
                      src={page_14_sub_image_2}
                      alt="page_14_sub_image_2"
                    />
                    <div className="image-sub-title-js">나의 리더십 스타일</div>
                  </div>
                </div>
              </div>

              <div className="flc coch-container">
                <div className="leader-type-title fb">나의 리더십 Type</div>
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
                    <div className="mb10">특징</div>
                    <ul>
                      <li>
                        과업지향성 및 관계지향성을 높게 보유하는 코칭형 리더십
                        유형과 조직 내 업무 흐름을 원활하게 조정하는 조정자
                        스타일이 상호보완적으로 결합 되었습니다.
                      </li>
                    </ul>
                  </div>

                  <div className="mb30">
                    <div className="mb10">강점</div>
                    <ul>
                      <li>
                        안정적인 조직성과 달성함과 동시에 구성원들의 긍정적인
                        유대관계를 구축합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        조직 업무 프로세스, R&R, 조직 내 정보 흐름을 효과적으로
                        관리합니다.
                      </li>
                    </ul>
                  </div>

                  <div className="mb30">
                    <div className="mb10">주의할 점</div>
                    <ul>
                      <li>
                        새로운 방식의 업무에 도전하거나 이를 추진 시, 리더로서
                        추진력 있는 역할을 수행하기 위해 노력해야 합니다.
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
                    익명성 보장을 위하여 전사 조직문화 결과 분석에서 사업부/센터
                    단위는 생략하였습니다.
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
