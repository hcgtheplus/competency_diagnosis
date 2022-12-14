import ReactEcharts from "echarts-for-react";

export default function Page({ data, name, organization, position }) {
  const leadingBiz = {
    me: {
      leadingBiz: data[5].E.toFixed(1),
      vision: data[6].E.toFixed(1),
      decision: data[7].E.toFixed(1),
      execution: data[8].E.toFixed(1),
    },
    company: {
      leadingBiz: data[5].F.toFixed(1),
      vision: data[6].F.toFixed(1),
      decision: data[7].F.toFixed(1),
      execution: data[8].F.toFixed(1),
    },
  };

  const managingOrganization = {
    me: {
      managingOrganization: data[16].E.toFixed(1),
      talent: data[17].E.toFixed(1),
      operate: data[18].E.toFixed(1),
      cooperation: data[19].E.toFixed(1),
    },
    company: {
      managingOrganization: data[16].F.toFixed(1),
      talent: data[17].F.toFixed(1),
      operate: data[18].F.toFixed(1),
      cooperation: data[19].F.toFixed(1),
    },
  };

  const buildingTrust = {
    me: {
      buildingTrust: data[27].E.toFixed(1),
      ethics: data[28].E.toFixed(1),
      emotion: data[29].E.toFixed(1),
      roleModel: data[30].E.toFixed(1),
    },
    company: {
      buildingTrust: data[27].F.toFixed(1),
      ethics: data[28].F.toFixed(1),
      emotion: data[29].F.toFixed(1),
      roleModel: data[30].F.toFixed(1),
    },
  };

  const leadingBizLineGraphSeriesData = [
    [data[11].Column6, data[11].E && Number(data[11].E.toFixed(1))],
    [data[12].Column6, data[12].E && Number(data[12].E.toFixed(1))],
    [data[13].Column6, data[13].E && Number(data[13].E.toFixed(1))],
  ];
  const managingOrganizationLineGraphSeriesData = [
    [data[22].Column6, data[22].E && Number(data[22].E.toFixed(1))],
    [data[23].Column6, data[23].E && Number(data[23].E.toFixed(1))],
    [data[24].Column6, data[24].E && Number(data[24].E.toFixed(1))],
  ];
  const buildingTrustLineGraphSeriesData = [
    [data[33].Column6, data[33].E && Number(data[33].E.toFixed(1))],
    [data[34].Column6, data[34].E && Number(data[34].E.toFixed(1))],
    [data[35].Column6, data[35].E && Number(data[35].E.toFixed(1))],
  ];

  const graphOption = (type) => ({
    grid: {
      top: "25%",
      height: "60%",
      left: 50,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      splitNumber: 1,
      axisLine: {
        onZero: true,
        lineStyle: {
          color: "#383936",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#383936",
        },
      },
      axisLabel: {
        showMinLabel: true,
        showMaxLabel: true,
        padding: 5,
        align: "left",
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        padding: 5,
        align: "right",
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#eff2fe",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#eff2fe",
        },
        show: false,
      },
    },
    series: [
      {
        type: "line",
        symbolSize: 10,
        itemStyle: {
          borderColor: "#0091ea",
          color: "#0091ea",
          borderWidth: 2,
        },
        lineStyle: {
          width: 2,
          color: "#0091ea",
        },
        label: {
          show: true,
          fontSize: 30,
          color: "#0091ea",
        },
        data:
          type === "leadingBiz"
            ? leadingBizLineGraphSeriesData
            : type === "managingOrganization"
            ? managingOrganizationLineGraphSeriesData
            : buildingTrustLineGraphSeriesData,
        smooth: true,
      },
    ],
  });

  return (
    <div className="image-container page 18 pr">
      <div className="page-absolute">18 / 36</div>
      <div className="page 17">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="user-info">
              <div className="sub-title">??????:</div>
              <div className="department">{organization}</div>

              <div className="sub-title">??????:</div>
              <div className="duty">{position}</div>

              <div className="user-name">{name}</div>
            </div>

            <div className="title-container">
              <div className="top-line"></div>
              <div>
                <div className="flex ab sb">
                  <h4 className="main-title">Summary ????????? ?????? ??????</h4>
                  <div className="flc">
                    <div>?????? ????????? ??????</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              <div>
                <div className="text-container">
                  <div className="mt50">
                    <ul>
                      {data[0].Column6 && data[0].Column6.trim() && (
                        <li>{data[0].Column6.trim()}</li>
                      )}
                      {data[1].Column6 && data[1].Column6.trim() && (
                        <li>{data[1].Column6.trim()}</li>
                      )}
                      {data[2].Column6 && data[2].Column6.trim() && (
                        <li>{data[2].Column6.trim()}</li>
                      )}
                    </ul>
                    <div className="info mt20">
                      <span className="material-symbols-outlined">
                        arrow_right
                      </span>
                      ?????? ?????? ?????? +0.5 ????????? ?????? ???????????? ??????, -0.5 ?????????
                      ?????? ???????????? ???????????? ?????????????????????.
                    </div>
                  </div>

                  <div className="mt40">
                    <div className="flex sb">
                      <div className="fb">Leading Biz.</div>
                      <div className="flex">
                        <div className="flc jcs">
                          <div className="flc mr20">
                            <div className="page-16-legend"></div>
                            <div>???</div>
                          </div>
                          <div className="flc">
                            <div className="page-16-legend sec"></div>
                            <div>?????? ??????</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex fc">
                        <div className="page-18-grape-img-data">
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(leadingBiz.me.leadingBiz) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.me.leadingBiz}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(leadingBiz.company.leadingBiz) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.company.leadingBiz}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(leadingBiz.me.vision) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.me.vision}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(leadingBiz.company.vision) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.company.vision}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(leadingBiz.me.decision) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.me.decision}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(leadingBiz.company.decision) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.company.decision}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(leadingBiz.me.execution) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.me.execution}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(leadingBiz.company.execution) * 20
                                  }%`,
                                }}
                              >
                                {leadingBiz.company.execution}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div>
                            <ReactEcharts
                              style={{ height: 188, width: 423 }}
                              option={graphOption("leadingBiz")}
                            />
                          </div>
                        </div>
                        <div className="flex page-18-grape-label-bottom mb40">
                          <div>Leading Business</div>
                          <div>????????????</div>
                          <div>????????? ????????????</div>
                          <div>????????? ?????????</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt40">
                    <div className="fb">Managing Organization</div>
                    <div className="flex">
                      <div className="flex fc">
                        <div className="page-18-grape-img-data">
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.me
                                        .managingOrganization
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.me.managingOrganization}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.company
                                        .managingOrganization
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {
                                  managingOrganization.company
                                    .managingOrganization
                                }
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(managingOrganization.me.talent) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.me.talent}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.company.talent
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.company.talent}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(managingOrganization.me.operate) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.me.operate}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.company.operate
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.company.operate}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.me.cooperation
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.me.cooperation}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(
                                      managingOrganization.company.cooperation
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {managingOrganization.company.cooperation}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                        </div>
                        <div className="flex page-18-grape-label-bottom mb40">
                          <div>Managing Organization</div>
                          <div>????????????</div>
                          <div>???????????? ????????????</div>
                          <div>???????????? ??????</div>
                        </div>
                      </div>
                      <div>
                        <ReactEcharts
                          style={{ height: 188, width: 423 }}
                          option={graphOption("managingOrganization")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt40">
                    <div className="fb">Building Trust</div>

                    <div className="flex">
                      <div className="flex fc">
                        <div className="page-18-grape-img-data">
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(buildingTrust.me.buildingTrust) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.me.buildingTrust}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(
                                      buildingTrust.company.buildingTrust
                                    ) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.company.buildingTrust}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(buildingTrust.me.ethics) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.me.ethics}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(buildingTrust.company.ethics) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.company.ethics}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(buildingTrust.me.emotion) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.me.emotion}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(buildingTrust.company.emotion) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.company.emotion}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                          <div className="page-18-grape-item">
                            <div className="flex jcs h160 al-end">
                              <div
                                className="page-18-our-department mr10"
                                style={{
                                  height: `${
                                    Number(buildingTrust.me.roleModel) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.me.roleModel}
                              </div>
                              <div
                                className="page-18-our-department company"
                                style={{
                                  height: `${
                                    Number(buildingTrust.company.roleModel) * 20
                                  }%`,
                                }}
                              >
                                {buildingTrust.company.roleModel}
                              </div>
                            </div>
                            <div className="top-line"></div>
                          </div>
                        </div>
                        <div className="flex page-18-grape-label-bottom mb40">
                          <div>Building Trust</div>
                          <div>????????????</div>
                          <div>????????????</div>
                          <div>?????????</div>
                        </div>
                      </div>
                      <div>
                        <ReactEcharts
                          style={{ height: 188, width: 423 }}
                          option={graphOption("buildingTrust")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="info mt20">
                    <span className="material-symbols-outlined">
                      arrow_right
                    </span>
                    ????????? ??? ?????? ???????????? ????????? ?????? ???????????? ????????? ?????????
                    ????????????. ???, ??????????????? ?????? ?????? ??? ????????? ??0.5?????? ?????????
                    ?????? ????????? ????????? ???????????? ?????? ?????? ???????????? ???????????????.
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
