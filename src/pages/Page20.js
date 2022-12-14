import bar_chart from "../image/sub-image/page-19/bar-chart.png";

export default function Page() {
  return (
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
                    수준이라고 평가하셨으며, 이는 타인 진단 결과 대비 유사한
                    수준입니다.
                  </li>
                  <li>
                    홍길동 님의 Leading Business 역할은 4.1으로 이는
                    회사內유사한 수준이며, 소속 조직內유사한 수준입니다.
                  </li>
                </ul>
                <div className="info mt20">
                  <span className="material-symbols-outlined">arrow_right</span>
                  회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5 사이인
                  경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“ 수준으로
                  표현하였습니다.
                </div>
              </div>
              <div className="text-container mt50">
                <h5 className="mb20">관계별 결과 비교</h5>
              </div>
              <img style={{ width: 930 }} src={bar_chart} alt="bar_chart" />
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
                      <td className="header fwb bt tl">합리적 의사결정</td>
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
  );
}
