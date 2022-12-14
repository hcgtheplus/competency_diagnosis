import page_21_bar_chart from "../image/sub-image/page-21/bar-chart.png";

export default function Page() {
  return (
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
                  <span className="material-symbols-outlined">arrow_right</span>
                  회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5 사이인
                  경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“ 수준으로
                  표현하였습니다.
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
                      <td className="br" rowSpan="2" style={{ width: 176 }}>
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
  );
}
