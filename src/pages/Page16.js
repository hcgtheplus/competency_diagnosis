import page_15_sub_image_1 from "../image/sub-image/page-15/page-15-sub-image-1.png";
import page_15_sub_image_2 from "../image/sub-image/page-15/page-15-sub-image-2.png";
import page_15_sub_image_3 from "../image/sub-image/page-15/page-15-sub-image-3.png";

export default function Page() {
  return (
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
                    Summary 소속별 조직문화 진단 결과
                  </h4>
                  <div className="flc">
                    <div>우리 소속별 조직문화</div>
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
                      소속별 조직문화 특징과 적합한 리더십 스타일
                    </div>
                    <ul>
                      <li>
                        공동체형 문화에서는 구성원들의 신뢰, 팀워크를 중시하며
                        개인의 능력개발에 대한 관심이 높습니다.{" "}
                      </li>
                      <li>
                        공동체형 문화에 적합한 리더십 스타일은
                        조언자/촉진자형으로 귀하의 리더십 스타일에 해당하지
                        않습니다.{" "}
                      </li>
                      <li>
                        담당 조직 조직문화에 부합하는 리더십 스타일 발현을
                        위해서는 하기의 조언자/촉진자형 역량 발현이 필요합니다.{" "}
                      </li>
                    </ul>
                    <div className="info mt20">
                      <span className="material-symbols-outlined">
                        arrow_right
                      </span>
                      역량에 관한 상세사항은 11페이지에 서술되어 있습니다.
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
                      소속별 조직문화 진단 영역 결과
                    </div>
                    <ul>
                      <li>
                        점수가 가장 높은 4가지는 동료와의 관계, 커뮤니케이션,
                        후배와의 관계, 우리 부서 선호도입니다.
                      </li>
                      <li>
                        점수가 가장 낮은 3가지는 일하는 방식, 상사와의 관계,
                        조직만족입니다.
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
