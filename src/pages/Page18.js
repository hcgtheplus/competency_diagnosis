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
    [data[11].Column6, Number(data[11].E.toFixed(1))],
    [data[12].Column6, Number(data[12].E.toFixed(1))],
    [data[13].Column6, Number(data[13].E.toFixed(1))],
  ];
  const managingOrganizationLineGraphSeriesData = [
    [data[22].Column6, Number(data[22].E.toFixed(1))],
    [data[23].Column6, Number(data[23].E.toFixed(1))],
    [data[24].Column6, Number(data[24].E.toFixed(1))],
  ];
  const buildingTrustLineGraphSeriesData = [
    [data[33].Column6, Number(data[33].E.toFixed(1))],
    [data[34].Column6, Number(data[34].E.toFixed(1))],
    [data[35].Column6, Number(data[35].E.toFixed(1))],
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
          color: "#cecece",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#cecece",
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
          color: "#cecece",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#cecece",
        },
        show: false,
      },
    },
    series: [
      {
        type: "line",
        symbolSize: 10,
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          borderWidth: 2,
        },
        data:
          type === "leadingBiz"
            ? leadingBizLineGraphSeriesData
            : type === "leadingBiz"
            ? managingOrganizationLineGraphSeriesData
            : buildingTrustLineGraphSeriesData,
        smooth: true,
      },
    ],
  });

  return (
    <div class="image-container page 18 pr">
      <div class="page-absolute">18 / 36</div>
      <div class="page 17">
        <div class="need-data-container">
          <div class="for-margin">
            <div class="user-info">
              <div class="sub-title">소속:</div>
              <div class="department">{organization}</div>

              <div class="sub-title">직책:</div>
              <div class="duty">{position}</div>

              <div class="user-name">{name}</div>
            </div>

            <div class="title-container">
              <div class="top-line"></div>
              <div>
                <div class="flex ab sb">
                  <h4 class="main-title">Summary 리더십 진단 결과</h4>
                  <div class="flc">
                    <div>나의 리더십 역량</div>
                  </div>
                </div>

                <hr class="bottom-line" />
              </div>

              <div>
                <div class="text-container">
                  <div class="mt30">
                    <div class="mb20">
                      <ul>
                        {data[0].Column6.trim() && (
                          <li>{data[0].Column6.trim()}</li>
                        )}
                        {data[1].Column6.trim() && (
                          <li>{data[1].Column6.trim()}</li>
                        )}
                        {data[2].Column6.trim() && (
                          <li>{data[2].Column6.trim()}</li>
                        )}
                      </ul>
                      <div class="info mt20">
                        <span class="material-symbols-outlined">
                          arrow_right
                        </span>
                        회사 평균 대비 +0.5 초과인 경우 “높은” 수준, -0.5 미만인
                        경우 “낮은“ 수준으로 표현하였습니다.
                      </div>
                    </div>
                  </div>

                  <div class="mt30">
                    <div class="fb">Leading Biz.</div>
                    <div class="flc jcs">
                      <div class="flc mr20">
                        <div class="page-16-legend"></div>
                        <div>나</div>
                      </div>
                      <div class="flc">
                        <div class="page-16-legend sec"></div>
                        <div>우리 회사</div>
                      </div>
                    </div>

                    <div class="page-18-grape-img-data">
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(leadingBiz.me.leadingBiz) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.me.leadingBiz}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(leadingBiz.company.leadingBiz) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.company.leadingBiz}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${Number(leadingBiz.me.vision) * 10}%`,
                            }}
                          >
                            {leadingBiz.me.vision}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(leadingBiz.company.vision) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.company.vision}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${Number(leadingBiz.me.decision) * 10}%`,
                            }}
                          >
                            {leadingBiz.me.decision}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(leadingBiz.company.decision) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.company.decision}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(leadingBiz.me.execution) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.me.execution}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(leadingBiz.company.execution) * 10
                              }%`,
                            }}
                          >
                            {leadingBiz.company.execution}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex page-18-grape-label-bottom mb40">
                    <div>Leading Business</div>
                    <div>비전제시</div>
                    <div>합리적 의사결정</div>
                    <div>강력한 실행력</div>
                  </div>

                  <ReactEcharts
                    style={{ height: 250, width: 450 }}
                    option={graphOption("leadingBiz")}
                  />

                  <div>
                    <div class="fb">Managing Organization</div>

                    <div class="page-18-grape-img-data">
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(
                                  managingOrganization.me.managingOrganization
                                ) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.me.managingOrganization}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(
                                  managingOrganization.company
                                    .managingOrganization
                                ) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.company.managingOrganization}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(managingOrganization.me.talent) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.me.talent}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(managingOrganization.company.talent) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.company.talent}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(managingOrganization.me.operate) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.me.operate}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(managingOrganization.company.operate) *
                                10
                              }%`,
                            }}
                          >
                            {managingOrganization.company.operate}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(managingOrganization.me.cooperation) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.me.cooperation}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(
                                  managingOrganization.company.cooperation
                                ) * 10
                              }%`,
                            }}
                          >
                            {managingOrganization.company.cooperation}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex page-18-grape-label-bottom mb40">
                    <div>Managing Organization</div>
                    <div>인재육성</div>
                    <div>효율적인 조직운영</div>
                    <div>경계없는 협력</div>
                  </div>

                  <ReactEcharts
                    style={{ height: 250, width: 450 }}
                    option={graphOption("managingOrganization")}
                  />

                  <div>
                    <div class="fb">Building Trust</div>

                    <div class="page-18-grape-img-data">
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(buildingTrust.me.buildingTrust) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.me.buildingTrust}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(buildingTrust.company.buildingTrust) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.company.buildingTrust}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(buildingTrust.me.ethics) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.me.ethics}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(buildingTrust.company.ethics) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.company.ethics}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(buildingTrust.me.emotion) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.me.emotion}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(buildingTrust.company.emotion) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.company.emotion}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                      <div class="page-18-grape-item">
                        <div class="flex jcs h160 al-end">
                          <div
                            class="page-18-our-department mr10"
                            style={{
                              height: `${
                                Number(buildingTrust.me.roleModel) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.me.roleModel}
                          </div>
                          <div
                            class="page-18-our-department company"
                            style={{
                              height: `${
                                Number(buildingTrust.company.roleModel) * 10
                              }%`,
                            }}
                          >
                            {buildingTrust.company.roleModel}
                          </div>
                        </div>
                        <div class="top-line"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex page-18-grape-label-bottom thr mb40">
                    <div>Building Trust</div>
                    <div>윤리의식</div>
                    <div>감성지능</div>
                    <div>롤모델</div>
                  </div>

                  <ReactEcharts
                    style={{ height: 250, width: 450 }}
                    option={graphOption("buildingTrust")}
                  />

                  <div class="info mt20">
                    <span class="material-symbols-outlined">arrow_right</span>
                    리포트 내 모든 결과값은 소수점 둘째 자리에서 반올림 처리한
                    값입니다. 단, 본인점수와 전사 평균 간 점수가 ±0.5점을 초과한
                    역량 선정은 반올림 처리하지 않은 값을 기준으로 하였습니다.
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
