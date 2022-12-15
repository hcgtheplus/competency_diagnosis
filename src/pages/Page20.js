export default function Page({ data }) {
  const text123 = data
    .filter(
      (d) =>
        d?.C?.includes("Text 1") ||
        d?.C?.includes("Text 2") ||
        d?.C?.includes("Text 3")
    )
    .map((d) => d.Column6 && String(d.Column6).trim());

  const chart1Label = data[4];
  const LeadingBusiness = data[5];
  const 비전제시 = data[6];
  const 합리적의사결정 = data[7];
  const 강력한실행력 = data[8];
  const chart2column = data[10];
  const chart2total = data[11];
  const chart2비전제시 = data[12];
  const chart2비즈니스감각 = data[13];
  const chart2혁신적사고 = data[14];
  const chart2변화주도 = data[15];
  const chart2합리적의사결정 = data[16];
  const chart2고객중심 = data[17];
  const chart2전문성 = data[18];
  const chart2전략적판단 = data[19];
  const chart2강력한실행력 = data[20];
  const chart2전략적네트워크 = data[21];
  const chart2위험관리 = data[22];
  const chart2추진력 = data[23];

  return (
    <div class="image-container page 20 pr">
      <div class="page-absolute">20 / 36</div>
      <div class="page 19">
        <div class="need-data-container">
          <div class="for-margin">
            <div class="title-container">
              <div class="top-line"></div>
              <div class="flc jcw">
                <h4 class="main-title">나의 리더십 역량</h4>
                <h5 class="main-title">Leading Business</h5>
              </div>
              <hr class="bottom-line" />
            </div>

            <div class="w-100 h1207">
              <div class="text-container mt50">
                <h5 class="mb10">총평</h5>
                <ul>
                  {text123[0] ? <li>{text123[0]}</li> : ""}
                  {text123[1] ? <li>{text123[1]}</li> : ""}
                  <li>
                    홍길동 님의 Leading Business 역할은 4.1으로 이는
                    회사內유사한 수준이며, 소속 조직內유사한 수준입니다.
                  </li>
                </ul>
                <div class="info mt20">
                  {text123[2] ? (
                    <>
                      <span class="material-symbols-outlined">arrow_right</span>
                      {text123[2]}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div class="text-container mt50">
                <h5 class="mb20">관계별 결과 비교</h5>
              </div>
              <div class="page-20-grape-container flex">
                <div>
                  <div class="flc mr20 mb10">
                    <div class="page-20-legend"></div>
                    <div class="f16">{chart1Label.E}</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend sec"></div>
                    <div class="f16">{chart1Label.F}</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend thr"></div>
                    <div class="f16">{chart1Label.Column9}</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend four"></div>
                    <div class="f16">{chart1Label.H}</div>
                  </div>
                </div>

                <div class="page-18-grape-img-data">
                  <div class="page-20-grape-item pr">
                    <div class="flex jcs h125 al-end">
                      <div
                        class="page-20-our-department mr10"
                        style={{
                          height: `${LeadingBusiness.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.E.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department sec mr10"
                        style={{
                          height: `${LeadingBusiness.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.F.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company thr mr10"
                        style={{
                          height: `${LeadingBusiness.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.Column9.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company four"
                        style={{
                          height: `${LeadingBusiness.H.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.H.toFixed(1)}
                      </div>
                    </div>
                    <div class="page-20-active-item"></div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div
                        class="page-20-our-department mr10"
                        style={{
                          height: `${비전제시.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.E.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company sec mr10"
                        style={{
                          height: `${비전제시.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.F.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company thr mr10"
                        style={{
                          height: `${비전제시.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.Column9.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company four"
                        style={{
                          height: `${비전제시.H.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.H.toFixed(1)}
                      </div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div
                        class="page-20-our-department mr10"
                        style={{
                          height: `${합리적의사결정.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.E.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company sec mr10"
                        style={{
                          height: `${합리적의사결정.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.F.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company thr mr10"
                        style={{
                          height: `${합리적의사결정.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.Column9.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company four"
                        style={{
                          height: `${합리적의사결정.H.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.H.toFixed(1)}
                      </div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div
                        class="page-20-our-department mr10"
                        style={{
                          height: `${강력한실행력.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.E.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company sec mr10"
                        style={{
                          height: `${강력한실행력.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.F.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company thr mr10"
                        style={{
                          height: `${강력한실행력.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.Column9.toFixed(1)}
                      </div>
                      <div
                        class="page-20-our-department company four"
                        style={{
                          height: `${강력한실행력.H.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.H.toFixed(1)}
                      </div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                </div>
              </div>

              <div class="flex page-20-grape-label-bottom mb40">
                <div class="first">Leading Business</div>
                <div>비전제시</div>
                <div>합리적 의사결정</div>
                <div>강력한 실행력</div>
              </div>

              <div class="text-container mt50">
                <h5 class="mb20">연도별/조직간 비교</h5>
              </div>
              <div class="mt20 pr">
                <div class="emphasize-line"></div>
                <table class="bt">
                  <tbody>
                    <tr class="tc header">
                      <td class="br" rowSpan={2}>
                        리더역할
                      </td>
                      <td class="br" rowSpan={2}>
                        리더십 역량
                      </td>
                      <td class="br" rowSpan={2}>
                        역량 Keyword
                      </td>
                      <td rowSpan={2}>20년</td>
                      <td rowSpan={2}>21년</td>
                      <td rowSpan={2}>22년</td>
                      <td colSpan={2}>평균</td>
                    </tr>
                    <tr class="tc header">
                      <td class="bt br">사업부</td>
                      <td class="bt br">전사</td>
                    </tr>
                    <tr class="tc bt">
                      <td></td>
                      <td colSpan={2}>Total</td>
                      <td>-</td>
                      <td>-</td>
                      <td>3.5</td>
                      <td>3.5</td>
                      <td>3.5</td>
                    </tr>
                    {/* <!-- 비전제시 데이터 --> */}
                    <tr class="tc">
                      <td class="wmven fwb bt emphasize" rowSpan={25}>
                        Leading Business
                      </td>
                      <td class="fwb br bt header" rowSpan={4}>
                        비전제시
                      </td>
                      <td class="header fwb bt tl">비전제시</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">비즈니스 감각</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">혁신적 사고</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">비전 실행관리</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    {/* <!-- / --> */}
                    {/* <!-- 합리적 의사결정 데이터 --> */}
                    <tr class="tc">
                      <td class="fwb br bt header" rowSpan={4}>
                        합리적 의사결정
                      </td>
                      <td class="header fwb bt tl">합리적 의사결정</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">고객중심</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">전문성</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">계획수립</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    {/* <!-- / --> */}
                    {/* <!-- 강력한 실행력 데이터 --> */}
                    <tr class="tc">
                      <td class="fwb br bt header" rowSpan={4}>
                        강력한 실행력
                      </td>
                      <td class="header fwb bt tl">강력한 실행력</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">전략적 네트워크</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">위험관리</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">추진력</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
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
