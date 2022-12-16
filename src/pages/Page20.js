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
                  {text123[0] ? <li>{text123[0]}</li> : ""}
                  {text123[1] ? <li>{text123[1]}</li> : ""}
                </ul>
                {text123[2] && text123[2].trim() ? (
                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    {text123[2].trim()}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-container mt50">
                <h5 className="mb20">관계별 결과 비교</h5>
              </div>
              <div className="page-20-grape-container flex">
                <div>
                  <div className="flc mr20 mb10">
                    <div className="page-20-legend"></div>
                    <div className="f16">{chart1Label.E}</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend sec"></div>
                    <div className="f16">{chart1Label.F}</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend thr"></div>
                    <div className="f16">{chart1Label.Column9}</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend four"></div>
                    <div className="f16">{chart1Label.H}</div>
                  </div>
                </div>

                <div className="page-18-grape-img-data">
                  <div className="page-20-grape-item pr">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${LeadingBusiness.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department sec mr10"
                        style={{
                          height: `${LeadingBusiness.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${LeadingBusiness.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {LeadingBusiness.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${
                            (LeadingBusiness.H?.toFixed(1) || 0) * 20
                          }%`,
                        }}
                      >
                        {LeadingBusiness.H?.toFixed(1) || "0"}
                      </div>
                    </div>
                    <div className="page-20-active-item"></div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${비전제시.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${비전제시.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${비전제시.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {비전제시.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${비전제시.H?.toFixed(1) || 0 * 20}%`,
                        }}
                      >
                        {비전제시.H?.toFixed(1) || "0"}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${합리적의사결정.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${합리적의사결정.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${합리적의사결정.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {합리적의사결정.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${합리적의사결정.H?.toFixed(1) || 0 * 20}%`,
                        }}
                      >
                        {합리적의사결정.H?.toFixed(1) || "0"}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${강력한실행력.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${강력한실행력.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${강력한실행력.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {강력한실행력.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${강력한실행력.H?.toFixed(1) || 0 * 20}%`,
                        }}
                      >
                        {강력한실행력.H?.toFixed(1) || "0"}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                </div>
              </div>

              <div className="flex page-20-grape-label-bottom mb40">
                <div className="first">Leading Business</div>
                <div>비전제시</div>
                <div>합리적 의사결정</div>
                <div>강력한 실행력</div>
              </div>

              <div className="text-container mt50">
                <h5 className="mb20">연도별/조직간 비교</h5>
              </div>
              <div className="mt20 pr">
                <div className="emphasize-line"></div>
                <table className="bt">
                  <tbody>
                    <tr className="tc header">
                      <td className="br" rowSpan={2}>
                        리더역할
                      </td>
                      <td className="br" rowSpan={2}>
                        리더십 역량
                      </td>
                      <td className="br" rowSpan={2}>
                        {chart2column.Column6}
                      </td>
                      <td rowSpan={2}>{chart2column.E}</td>
                      <td rowSpan={2}>{chart2column.F}</td>
                      <td rowSpan={2}>{chart2column.Column9}</td>
                      <td colSpan={2}>평균</td>
                    </tr>
                    <tr className="tc header">
                      <td className="bt br">{chart2column.H}</td>
                      <td className="bt br">{chart2column.I}</td>
                    </tr>
                    <tr className="tc bt">
                      <td></td>
                      <td colSpan={2}>Total</td>
                      <td>{chart2total?.E?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.F?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.Column9?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.H?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.I?.toFixed(1) ?? "-"}</td>
                    </tr>
                    {/* <!-- 비전제시 데이터 --> */}
                    <tr className="tc">
                      <td className="wmven fwb bt emphasize" rowSpan={25}>
                        Leading Business
                      </td>
                      <td className="fwb br bt header" rowSpan={4}>
                        비전제시
                      </td>
                      <td className="header fwb bt tl">비전제시</td>
                      <td className="bt">
                        {chart2비전제시?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비전제시?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비전제시?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비전제시?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비전제시?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">비즈니스 감각</td>
                      <td className="bt">
                        {chart2비즈니스감각?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비즈니스감각?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비즈니스감각?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비즈니스감각?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2비즈니스감각?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">혁신적 사고</td>
                      <td className="bt">
                        {chart2혁신적사고?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2혁신적사고?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2혁신적사고?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2혁신적사고?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2혁신적사고?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">변화주도</td>
                      <td className="bt">
                        {chart2변화주도?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2변화주도?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2변화주도?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2변화주도?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2변화주도?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    {/* <!-- / --> */}
                    {/* <!-- 합리적 의사결정 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        합리적 의사결정
                      </td>
                      <td className="header fwb bt tl">합리적 의사결정</td>
                      <td className="bt">
                        {chart2합리적의사결정?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2합리적의사결정?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2합리적의사결정?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2합리적의사결정?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2합리적의사결정?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">고객중심</td>
                      <td className="bt">
                        {chart2고객중심?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2고객중심?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2고객중심?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2고객중심?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2고객중심?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">전문성</td>
                      <td className="bt">
                        {chart2전문성?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전문성?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전문성?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전문성?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전문성?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">전략적 판단</td>
                      <td className="bt">
                        {chart2전략적판단?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적판단?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적판단?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적판단?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적판단?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    {/* <!-- / --> */}
                    {/* <!-- 강력한 실행력 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        강력한 실행력
                      </td>
                      <td className="header fwb bt tl">강력한 실행력</td>
                      <td className="bt">
                        {chart2강력한실행력?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2강력한실행력?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2강력한실행력?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2강력한실행력?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2강력한실행력?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">전략적 네트워크</td>
                      <td className="bt">
                        {chart2전략적네트워크?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적네트워크?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적네트워크?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적네트워크?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2전략적네트워크?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">위험관리</td>
                      <td className="bt">
                        {chart2위험관리?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2위험관리?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2위험관리?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2위험관리?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2위험관리?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">추진력</td>
                      <td className="bt">
                        {chart2추진력?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2추진력?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2추진력?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2추진력?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2추진력?.I?.toFixed(1) ?? "-"}
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
  );
}
