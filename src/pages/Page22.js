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
  const buildingTrust = data[5];
  const 윤리의식 = data[6];
  const 감성지능 = data[7];
  const 롤모델 = data[8];
  const chart2column = data[10];
  const chart2total = data[11];
  const chart2윤리의식 = data[12];
  const chart2원칙준수 = data[13];
  const chart2조직관리 = data[14];
  const chart2의사결정 = data[15];
  const chart2감성지능 = data[16];
  const chart2다양성존중 = data[17];
  const chart2경청 = data[18];
  const chart2정보공유 = data[19];
  const chart2롤모델 = data[20];
  const chart2주체성 = data[21];
  const chart2책임감 = data[22];
  const chart2솔선수범 = data[23];

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
                  {text123[0] ? <li>{text123[0]}</li> : ""}
                  {text123[1] ? <li>{text123[1]}</li> : ""}
                </ul>
                {text123[2] && text123[2].trim() ? (
                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    {text123[2]}
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
                          height: `${buildingTrust.E.toFixed(1) * 20}%`,
                        }}
                      >
                        {buildingTrust.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department sec mr10"
                        style={{
                          height: `${buildingTrust.F.toFixed(1) * 20}%`,
                        }}
                      >
                        {buildingTrust.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${buildingTrust.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {buildingTrust.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${buildingTrust.H.toFixed(1) * 20}%`,
                        }}
                      >
                        {buildingTrust.H.toFixed(1)}
                      </div>
                    </div>
                    <div className="page-20-active-item thr"></div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{ height: `${윤리의식.E.toFixed(1) * 20}%` }}
                      >
                        {윤리의식.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{ height: `${윤리의식.F.toFixed(1) * 20}%` }}
                      >
                        {윤리의식.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${윤리의식.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {윤리의식.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{ height: `${윤리의식.H.toFixed(1) * 20}%` }}
                      >
                        {윤리의식.H.toFixed(1)}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{ height: `${감성지능.E.toFixed(1) * 20}%` }}
                      >
                        {감성지능.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{ height: `${감성지능.F.toFixed(1) * 20}%` }}
                      >
                        {감성지능.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${감성지능.Column9.toFixed(1) * 20}%`,
                        }}
                      >
                        {감성지능.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{ height: `${감성지능.H.toFixed(1) * 20}%` }}
                      >
                        {감성지능.H.toFixed(1)}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{ height: `${롤모델.E.toFixed(1) * 20}%` }}
                      >
                        {롤모델.E.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{ height: `${롤모델.F.toFixed(1) * 20}%` }}
                      >
                        {롤모델.F.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{ height: `${롤모델.Column9.toFixed(1) * 20}%` }}
                      >
                        {롤모델.Column9.toFixed(1)}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{ height: `${롤모델.H.toFixed(1) * 20}%` }}
                      >
                        {롤모델.H.toFixed(1)}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                </div>
              </div>

              <div className="flex page-22-grape-label-bottom mb40">
                <div>Building Trust</div>
                <div>윤리의식</div>
                <div>감성지능</div>
                <div>롤모델</div>
              </div>

              <div className="text-container mt50">
                <h5 className="mb20">연도별/조직간 비교</h5>
              </div>
              <div className="mt20 pr">
                <div className="emphasize-line"></div>
                <table className="bt">
                  <tbody>
                    <tr className="tc header">
                      <td className="br" rowSpan="2">
                        리더역할
                      </td>
                      <td className="br" rowSpan="2" style={{ width: 176 }}>
                        리더십 역량
                      </td>
                      <td className="br" rowSpan="2">
                        {chart2column.Column6}
                      </td>
                      <td rowSpan="2">{chart2column.E}</td>
                      <td rowSpan="2">{chart2column.F}</td>
                      <td rowSpan="2">{chart2column.Column9}</td>
                      <td colSpan="2">평균</td>
                    </tr>
                    <tr className="tc header">
                      <td className="bt br">{chart2column.H}</td>
                      <td className="bt br">{chart2column.I}</td>
                    </tr>
                    <tr className="tc bt">
                      <td></td>
                      <td colSpan="2">Total</td>
                      <td>{chart2total?.E?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.F?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.Column9?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.H?.toFixed(1) ?? "-"}</td>
                      <td>{chart2total?.I?.toFixed(1) ?? "-"}</td>
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
                      <td className="bt">
                        {chart2윤리의식?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2윤리의식?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2윤리의식?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2윤리의식?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2윤리의식?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">원칙준수</td>
                      <td className="bt">
                        {chart2원칙준수?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2원칙준수?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2원칙준수?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2원칙준수?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2원칙준수?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">조직관리 공정성</td>
                      <td className="bt">
                        {chart2조직관리?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2조직관리?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2조직관리?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2조직관리?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2조직관리?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">의사결정 공정성</td>
                      <td className="bt">
                        {chart2의사결정?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2의사결정?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2의사결정?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2의사결정?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2의사결정?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    {/* <!-- / -->
                <!-- 합리적 의사결정 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        감성지능
                      </td>
                      <td className="header fwb bt tl">감성지능</td>
                      <td className="bt">
                        {chart2감성지능?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2감성지능?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2감성지능?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2감성지능?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2감성지능?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">다양성 존중</td>
                      <td className="bt">
                        {chart2다양성존중?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2다양성존중?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2다양성존중?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2다양성존중?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2다양성존중?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">경청/의사소통</td>
                      <td className="bt">{chart2경청?.E?.toFixed(1) ?? "-"}</td>
                      <td className="bt">{chart2경청?.F?.toFixed(1) ?? "-"}</td>
                      <td className="bt">
                        {chart2경청?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">{chart2경청?.H?.toFixed(1) ?? "-"}</td>
                      <td className="bt">{chart2경청?.I?.toFixed(1) ?? "-"}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">정보공유</td>
                      <td className="bt">
                        {chart2정보공유?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2정보공유?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2정보공유?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2정보공유?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2정보공유?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    {/* <!-- / -->
                <!-- 강력한 실행력 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        롤모델
                      </td>
                      <td className="header fwb bt tl">롤모델</td>
                      <td className="bt">
                        {chart2롤모델?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2롤모델?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2롤모델?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2롤모델?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2롤모델?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">주체성</td>
                      <td className="bt">
                        {chart2주체성?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2주체성?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2주체성?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2주체성?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2주체성?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">책임감</td>
                      <td className="bt">
                        {chart2책임감?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2책임감?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2책임감?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2책임감?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2책임감?.I?.toFixed(1) ?? "-"}
                      </td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">솔선수범</td>
                      <td className="bt">
                        {chart2솔선수범?.E?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2솔선수범?.F?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2솔선수범?.Column9?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2솔선수범?.H?.toFixed(1) ?? "-"}
                      </td>
                      <td className="bt">
                        {chart2솔선수범?.I?.toFixed(1) ?? "-"}
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
