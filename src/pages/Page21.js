export default function Page({ data }) {
  const convertData = data.reduce(
    (acc, cur, idx) => {
      if (cur["C"] === "Text 1") {
        acc["text1"] = cur["Column6"]?.trim() || "";
      }
      if (cur["C"] === "Text 2") {
        acc["text2"] = cur["Column6"]?.trim() || "";
      }
      if (cur["C"] === "Text 3") {
        acc["text3"] = cur["Column6"]?.trim() || "";
      }
      if (idx === 5) {
        acc["chart1"] = {
          ...acc["chart1"],
          managingOrganization: {
            본인진단: cur["E"]?.toFixed(1) || 0,
            "타인진단(상향+하향)": cur["F"]?.toFixed(1) || 0,
            상향진단: cur["Column9"]?.toFixed(1) || 0,
            하향진단: cur["H"]?.toFixed(1) || 0,
          },
        };
      }
      if (idx === 6) {
        acc["chart1"] = {
          ...acc["chart1"],
          인재육성: {
            본인진단: cur["E"]?.toFixed(1) || 0,
            "타인진단(상향+하향)": cur["F"]?.toFixed(1) || 0,
            상향진단: cur["Column9"]?.toFixed(1) || 0,
            하향진단: cur["H"]?.toFixed(1) || 0,
          },
        };
      }
      if (idx === 7) {
        acc["chart1"] = {
          ...acc["chart1"],
          효율적조직운영: {
            본인진단: cur["E"]?.toFixed(1) || 0,
            "타인진단(상향+하향)": cur["F"]?.toFixed(1) || 0,
            상향진단: cur["Column9"]?.toFixed(1) || 0,
            하향진단: cur["H"]?.toFixed(1) || 0,
          },
        };
      }
      if (idx === 8) {
        acc["chart1"] = {
          ...acc["chart1"],
          경계없는협력: {
            본인진단: cur["E"]?.toFixed(1) || 0,
            "타인진단(상향+하향)": cur["F"]?.toFixed(1) || 0,
            상향진단: cur["Column9"]?.toFixed(1) || 0,
            하향진단: cur["H"]?.toFixed(1) || 0,
          },
        };
      }

      if (idx === 11) {
        acc["chart2"] = {
          ...acc["chart2"],
          Total: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 12) {
        acc["chart2"] = {
          ...acc["chart2"],
          인재육성: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 13) {
        acc["chart2"] = {
          ...acc["chart2"],
          경력비전제시: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 14) {
        acc["chart2"] = {
          ...acc["chart2"],
          코칭피드백: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 15) {
        acc["chart2"] = {
          ...acc["chart2"],
          동기부여: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 16) {
        acc["chart2"] = {
          ...acc["chart2"],
          효율적조직운영: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 17) {
        acc["chart2"] = {
          ...acc["chart2"],
          자원관리: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 18) {
        acc["chart2"] = {
          ...acc["chart2"],
          권한책임부여: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 19) {
        acc["chart2"] = {
          ...acc["chart2"],
          성과관리: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 20) {
        acc["chart2"] = {
          ...acc["chart2"],
          경계없는협력: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      if (idx === 21) {
        acc["chart2"] = {
          ...acc["chart2"],
          상호이해: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }
      if (idx === 22) {
        acc["chart2"] = {
          ...acc["chart2"],
          문제해결지원: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }
      if (idx === 23) {
        acc["chart2"] = {
          ...acc["chart2"],
          갈등관리: {
            "20년": cur["E"]?.toFixed(1) || "-",
            "21년": cur["F"]?.toFixed(1) || "-",
            "22년": cur["Column9"]?.toFixed(1) || "-",
            사업부: cur["H"]?.toFixed(1) || "-",
            전사평균: cur["I"]?.toFixed(1) || "-",
          },
        };
      }

      return acc;
    },
    {
      chart1: {
        managingOrganization: {},
        인재육성: {},
        효율적조직운영: {},
        경계없는협력: {},
      },
      chart2: {
        Total: {},
        인재육성: {},
        경력비전제시: {},
        코칭피드백: {},
        동기부여: {},
        효율적조직운영: {},
        자원관리: {},
        권한책임부여: {},
        성과관리: {},
        경계없는협력: {},
        상호이해: {},
        문제해결지원: {},
        갈등관리: {},
      },
    }
  );

  const {
    text1,
    text2,
    text3,
    chart1: { managingOrganization, 인재육성, 효율적조직운영, 경계없는협력 },
    chart2: {
      Total,
      인재육성: 인재육성2,
      경력비전제시,
      코칭피드백,
      동기부여,
      효율적조직운영: 효율적조직운영2,
      자원관리,
      권한책임부여,
      성과관리,
      경계없는협력: 경계없는협력2,
      상호이해,
      문제해결지원,
      갈등관리,
    },
  } = convertData;

  return (
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
                  <li>{text1}</li>
                  <li>{text2}</li>
                </ul>
                {text3 && text3.trim() && (
                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    {text3}
                  </div>
                )}
              </div>
              <div className="text-container mt50">
                <h5 className="mb20">관계별 결과 비교</h5>
              </div>

              <div className="page-20-grape-container flex">
                <div>
                  <div className="flc mr20 mb10">
                    <div className="page-20-legend"></div>
                    <div className="f16">본인진단</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend sec"></div>
                    <div className="f16">타인진단(상향+하향)</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend thr"></div>
                    <div className="f16">상향진단</div>
                  </div>
                  <div className="flc mb10">
                    <div className="page-20-legend four"></div>
                    <div className="f16">하향진단</div>
                  </div>
                </div>

                <div className="page-18-grape-img-data">
                  <div className="page-20-grape-item pr">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${managingOrganization["본인진단"] * 20}%`,
                        }}
                      >
                        {managingOrganization["본인진단"]}
                      </div>
                      <div
                        className="page-20-our-department sec mr10"
                        style={{
                          height: `${
                            managingOrganization["타인진단(상향+하향)"] * 20
                          }%`,
                        }}
                      >
                        {managingOrganization["타인진단(상향+하향)"]}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${managingOrganization["상향진단"] * 20}%`,
                        }}
                      >
                        {managingOrganization["상향진단"]}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${managingOrganization["하향진단"] * 20}%`,
                        }}
                      >
                        {managingOrganization["하향진단"]}
                      </div>
                    </div>
                    <div className="page-20-active-item sec"></div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${인재육성["본인진단"] * 20}%`,
                        }}
                      >
                        {인재육성["본인진단"]}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${인재육성["타인진단(상향+하향)"] * 20}%`,
                        }}
                      >
                        {인재육성["타인진단(상향+하향)"]}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${인재육성["상향진단"] * 20}%`,
                        }}
                      >
                        {인재육성["상향진단"]}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${인재육성["하향진단"] * 20}%`,
                        }}
                      >
                        {인재육성["하향진단"]}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${효율적조직운영["본인진단"] * 20}%`,
                        }}
                      >
                        {효율적조직운영["본인진단"]}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${
                            효율적조직운영["타인진단(상향+하향)"] * 20
                          }%`,
                        }}
                      >
                        {효율적조직운영["타인진단(상향+하향)"]}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${효율적조직운영["상향진단"] * 20}%`,
                        }}
                      >
                        {효율적조직운영["상향진단"]}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${효율적조직운영["하향진단"] * 20}%`,
                        }}
                      >
                        {효율적조직운영["하향진단"]}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                  <div className="page-20-grape-item">
                    <div className="flex jcs h125 al-end">
                      <div
                        className="page-20-our-department mr10"
                        style={{
                          height: `${경계없는협력["본인진단"] * 20}%`,
                        }}
                      >
                        {경계없는협력["본인진단"]}
                      </div>
                      <div
                        className="page-20-our-department company sec mr10"
                        style={{
                          height: `${
                            경계없는협력["타인진단(상향+하향)"] * 20
                          }%`,
                        }}
                      >
                        {경계없는협력["타인진단(상향+하향)"]}
                      </div>
                      <div
                        className="page-20-our-department company thr mr10"
                        style={{
                          height: `${경계없는협력["상향진단"] * 20}%`,
                        }}
                      >
                        {경계없는협력["상향진단"]}
                      </div>
                      <div
                        className="page-20-our-department company four"
                        style={{
                          height: `${경계없는협력["하향진단"] * 20}%`,
                        }}
                      >
                        {경계없는협력["하향진단"]}
                      </div>
                    </div>
                    <div className="top-line-page-20"></div>
                  </div>
                </div>
              </div>

              <div className="flex page-21-grape-label-bottom mb40">
                <div>Managing Organization</div>
                <div>인재육성</div>
                <div>효율적인 조직운영</div>
                <div>경계없는 협력</div>
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
                        역량 Keyword
                      </td>
                      <td rowSpan={2}>'20년</td>
                      <td rowSpan={2}>'21년</td>
                      <td rowSpan={2}>'22년</td>
                      <td colSpan={2}>평균</td>
                    </tr>
                    <tr className="tc header">
                      <td className="bt br">부문</td>
                      <td className="bt br">전사평균</td>
                    </tr>
                    <tr className="tc bt">
                      <td></td>
                      <td colSpan={2}>Total</td>
                      <td>{Total["20년"]}</td>
                      <td>{Total["21년"]}</td>
                      <td>{Total["22년"]}</td>
                      <td>{Total["사업부"]}</td>
                      <td>{Total["전사평균"]}</td>
                    </tr>
                    {/* <!-- 비전제시 데이터 --> */}
                    <tr className="tc">
                      <td className="wmven fwb bt emphasize" rowSpan={25}>
                        Managing Org.
                      </td>
                      <td className="fwb br bt header" rowSpan={4}>
                        인재육성
                      </td>
                      <td className="header fwb bt tl">인재육성</td>
                      <td className="bt">{인재육성2["20년"]}</td>
                      <td className="bt">{인재육성2["21년"]}</td>
                      <td className="bt">{인재육성2["22년"]}</td>
                      <td className="bt">{인재육성2["사업부"]}</td>
                      <td className="bt">{인재육성2["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">경력비전제시</td>
                      <td className="bt">{경력비전제시["20년"]}</td>
                      <td className="bt">{경력비전제시["21년"]}</td>
                      <td className="bt">{경력비전제시["22년"]}</td>
                      <td className="bt">{경력비전제시["사업부"]}</td>
                      <td className="bt">{경력비전제시["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">코칭/피드백</td>
                      <td className="bt">{코칭피드백["20년"]}</td>
                      <td className="bt">{코칭피드백["21년"]}</td>
                      <td className="bt">{코칭피드백["22년"]}</td>
                      <td className="bt">{코칭피드백["사업부"]}</td>
                      <td className="bt">{코칭피드백["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">동기부여</td>
                      <td className="bt">{동기부여["20년"]}</td>
                      <td className="bt">{동기부여["21년"]}</td>
                      <td className="bt">{동기부여["22년"]}</td>
                      <td className="bt">{동기부여["사업부"]}</td>
                      <td className="bt">{동기부여["전사평균"]}</td>
                    </tr>
                    {/* <!-- / -->
                <!-- 합리적 의사결정 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        효율적 조직운영
                      </td>
                      <td className="header fwb bt tl">효율적 조직운영</td>
                      <td className="bt">{효율적조직운영2["20년"]}</td>
                      <td className="bt">{효율적조직운영2["21년"]}</td>
                      <td className="bt">{효율적조직운영2["22년"]}</td>
                      <td className="bt">{효율적조직운영2["사업부"]}</td>
                      <td className="bt">{효율적조직운영2["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">자원관리</td>
                      <td className="bt">{자원관리["20년"]}</td>
                      <td className="bt">{자원관리["21년"]}</td>
                      <td className="bt">{자원관리["22년"]}</td>
                      <td className="bt">{자원관리["사업부"]}</td>
                      <td className="bt">{자원관리["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">권한/책임부여</td>
                      <td className="bt">{권한책임부여["20년"]}</td>
                      <td className="bt">{권한책임부여["21년"]}</td>
                      <td className="bt">{권한책임부여["22년"]}</td>
                      <td className="bt">{권한책임부여["사업부"]}</td>
                      <td className="bt">{권한책임부여["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">성과관리</td>
                      <td className="bt">{성과관리["20년"]}</td>
                      <td className="bt">{성과관리["21년"]}</td>
                      <td className="bt">{성과관리["22년"]}</td>
                      <td className="bt">{성과관리["사업부"]}</td>
                      <td className="bt">{성과관리["전사평균"]}</td>
                    </tr>
                    {/* <!-- / -->
                <!-- 강력한 실행력 데이터 --> */}
                    <tr className="tc">
                      <td className="fwb br bt header" rowSpan={4}>
                        경계없는 협력
                      </td>
                      <td className="header fwb bt tl">경계없는 협력</td>
                      <td className="bt">{경계없는협력2["20년"]}</td>
                      <td className="bt">{경계없는협력2["21년"]}</td>
                      <td className="bt">{경계없는협력2["22년"]}</td>
                      <td className="bt">{경계없는협력2["사업부"]}</td>
                      <td className="bt">{경계없는협력2["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">상호이해</td>
                      <td className="bt">{상호이해["20년"]}</td>
                      <td className="bt">{상호이해["21년"]}</td>
                      <td className="bt">{상호이해["22년"]}</td>
                      <td className="bt">{상호이해["사업부"]}</td>
                      <td className="bt">{상호이해["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">문제해결지원</td>
                      <td className="bt">{문제해결지원["20년"]}</td>
                      <td className="bt">{문제해결지원["21년"]}</td>
                      <td className="bt">{문제해결지원["22년"]}</td>
                      <td className="bt">{문제해결지원["사업부"]}</td>
                      <td className="bt">{문제해결지원["전사평균"]}</td>
                    </tr>
                    <tr className="tc">
                      <td className="header bt tl">갈등관리</td>
                      <td className="bt">{갈등관리["20년"]}</td>
                      <td className="bt">{갈등관리["21년"]}</td>
                      <td className="bt">{갈등관리["22년"]}</td>
                      <td className="bt">{갈등관리["사업부"]}</td>
                      <td className="bt">{갈등관리["전사평균"]}</td>
                    </tr>
                  </tbody>
                  {/* <!-- / --> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
