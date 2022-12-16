import { compact } from "lodash";

export default function Page({ data, name, organization, position }) {
  const 강한특성 = {
    특질: compact([
      data[9] && data[9].Column6,
      data[10] && data[10].Column6,
      data[11] && data[11].Column6,
      data[12] && data[12].Column6,
      data[13] && data[13].Column6,
      data[14] && data[14].Column6,
    ]).length,
    행동특성: compact([
      data[16] && data[16].Column6,
      data[17] && data[17].Column6,
    ]).length,
    동기부여: compact([
      data[19] && data[19].Column6,
      data[20] && data[20].Column6,
    ]).length,
    흥미선호: compact([
      data[22] && data[22].Column6,
      data[23] && data[23].Column6,
    ]).length,
  };
  const 약한특성 = {
    특질: compact([
      data[25] && data[25].Column6,
      data[26] && data[26].Column6,
      data[27] && data[27].Column6,
      data[28] && data[28].Column6,
      data[29] && data[29].Column6,
      data[30] && data[30].Column6,
    ]).length,
    행동특성: compact([
      data[32] && data[32].Column6,
      data[33] && data[33].Column6,
    ]).length,
    동기부여: compact([
      data[35] && data[35].Column6,
      data[36] && data[36].Column6,
    ]).length,
    흥미선호: compact([
      data[38] && data[38].Column6,
      data[39] && data[39].Column6,
    ]).length,
  };
  const 피해야할특질 = compact([
    data[41] && data[41].Column6,
    data[42] && data[42].Column6,
    data[43] && data[43].Column6,
  ]).length;

  if (data.length === 2) {
    return (
      <div className="no-harrison-container">
        <div className="no-harrison">Harrison결과가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="image-container page 17 pr">
      <div className="page-absolute">17 / 36</div>
      <div className="page 16">
        <div className="need-data-container">
          <div className="for-margin">
            <div className="user-info">
              <div className="sub-title">소속:</div>
              <div className="department">{organization}</div>
              <div className="sub-title">직책:</div>
              <div className="duty">{position}</div>

              <div className="user-name">{name}</div>
            </div>

            <div className="title-container">
              <div className="top-line"></div>
              <div>
                <div className="flex ab sb">
                  <h4 className="main-title">Summary 개인 성격 특성</h4>
                  <div className="flc">
                    <div>나의 개인 성격 특성</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              {/* 92번째 줄 부터 729번째 줄까지 해리슨 있을때 나오는 데이터 */}

              <div>
                <div className="text-container">
                  <div className="mt50">
                    <div className="mb30">
                      <div className="mb10 fb f24">강한 특성</div>
                      <ul>
                        {data[0].Column6 && data[0].Column6.trim() && (
                          <li>{data[0].Column6.trim()}</li>
                        )}
                        {data[1].Column6 && data[1].Column6.trim() && (
                          <li>{data[1].Column6.trim()}</li>
                        )}
                      </ul>
                    </div>
                    <div className="mb30">
                      <div className="mb10 fb f24">약한 특성</div>
                      <ul>
                        {data[3].Column6 && data[3].Column6.trim() && (
                          <li>{data[3].Column6.trim()}</li>
                        )}
                        {data[4].Column6 && data[4].Column6.trim() && (
                          <li>{data[4].Column6.trim()}</li>
                        )}
                      </ul>
                    </div>
                    <div className="mb30">
                      <div className="mb10 fb f24">피해야 할 특질</div>
                      {data[6].Column6 && data[6].Column6.trim() && (
                        <ul>
                          <li>{data[6].Column6.trim()}</li>
                        </ul>
                      )}
                    </div>

                    <div className="flex mb30">
                      <table className="mr30">
                        <tbody className="page-16-table-sec mt20">
                          <tr className="tc">
                            <td className="header" colSpan={2}>
                              <div className="flc sb w-100">
                                <div>강한 특성</div>
                                <div className="sub-title-page-16">결과값</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={강한특성.특질}
                              className="tc sec-header"
                            >
                              특질
                            </td>
                            {data[9].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[9].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[9].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[9].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[10].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[10].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[10].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[10].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[11].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[11].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[11].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[11].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[12].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[12].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[12].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[12].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[13].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[13].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[13].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[13].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[14].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[14].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[14].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[14].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td
                              rowSpan={강한특성.행동특성}
                              className="tc sec-header"
                            >
                              행동특성
                            </td>
                            {data[16].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[16].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[16].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[16].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[17].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[17].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[17].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[17].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td
                              rowSpan={강한특성.동기부여}
                              className="tc sec-header"
                            >
                              동기부여
                            </td>
                            {data[19].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[19].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[19].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[19].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[20].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[20].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[20].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[20].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td
                              rowSpan={강한특성.흥미선호}
                              className="tc sec-header"
                            >
                              흥미 선호
                            </td>
                            {data[22].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[22].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[22].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[22].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[23].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[23].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[23].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[23].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>

                      <table className="page-16-main-table-thr">
                        <tbody className="page-16-table-thr mt20">
                          <tr className="tc">
                            <td className="header" colSpan="2">
                              <div className="flc sb w-100">
                                <div>약한 특성</div>
                                <div className="sub-title-page-16">결과값</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={약한특성.특질}
                              className="tc sec-header"
                            >
                              특질
                            </td>
                            {data[25].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[25].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[25].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[25].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[26].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[26].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[26].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[26].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[27].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[27].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[27].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[27].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[28].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[28].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[28].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[28].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[29].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[29].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[29].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[29].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[30].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[30].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[30].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[30].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}

                          <tr>
                            <td
                              rowSpan={약한특성.행동특성}
                              className="tc sec-header"
                            >
                              행동특성
                            </td>
                            {data[32].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[32].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[32].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[32].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[33].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[33].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[33].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[33].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}

                          <tr>
                            <td
                              rowSpan={약한특성.동기부여}
                              className="tc sec-header"
                            >
                              동기부여
                            </td>
                            {data[35].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[35].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[35].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[35].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[36].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[36].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[36].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[36].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          <tr>
                            <td
                              rowSpan={약한특성.흥미선호}
                              className="tc sec-header"
                            >
                              흥미 선호
                            </td>
                            {data[38].Column6 && (
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[38].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[38].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[38].E.toFixed(1)}</div>
                                </div>
                              </td>
                            )}
                          </tr>
                          {data[39].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[39].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[39].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[39].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          <tr className="tc">
                            <td className="header thr-thr" colSpan={2}>
                              <div className="flc sb w-100">
                                <div>피해야 할 특질</div>
                                <div className="sub-title-page-16">결과값</div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td
                              rowSpan={피해야할특질}
                              className="tc sec-header word-k-all thr-thr"
                            >
                              피해야할 특질
                            </td>
                            <td className="right-td">
                              <div className="flc sb">
                                {data[41].Column6 ? (
                                  <div>
                                    <div>
                                      {data[41].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[41].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                ) : (
                                  <div>-</div>
                                )}
                                <div>
                                  {data[41].E ? data[41].E.toFixed(1) : "-"}
                                </div>
                              </div>
                            </td>
                          </tr>
                          {data[42].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[42].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[42].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[42].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                          {data[43].Column6 && (
                            <tr>
                              <td className="right-td">
                                <div className="flc sb">
                                  <div>
                                    <div>
                                      {data[43].Column6.split("\r\n")[0]}
                                    </div>
                                    <div>
                                      {data[43].Column6.split("\r\n")[1]}
                                    </div>
                                  </div>
                                  <div>{data[43].E.toFixed(1)}</div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="mb10 fb f24">해리슨 진단 Guide</div>
                    <div className="normal-font mb30">
                      해리슨 진단은 개인 특성을 특질과 특질이 말이나 행동으로
                      발현되어 관찰되는 행동특성, 동기부여요소, 흥미/선호사항,
                      피해야할부정적인 특질로 구분하고 있습니다.
                    </div>

                    <table>
                      <tbody className="page-16-table mt30">
                        <tr>
                          <td className="tc header">특질</td>
                          <td>
                            개인간 성격 차이를 유발하는 심리적 경향성 (분석적,
                            권위적, 협력적등)
                          </td>
                        </tr>
                        <tr>
                          <td className="tc header">행동특성</td>
                          <td>
                            특질 中 실제 말이나 행동으로 발현되어 관찰 가능성이
                            높은 요소 (협상력, 코칭등)
                          </td>
                        </tr>
                        <tr>
                          <td className="tc header">동기부여</td>
                          <td>
                            개인이 업무에 몰입하도록 하는 동기부여 요소
                            (경제적보상, 승진, 인정등)
                          </td>
                        </tr>
                        <tr>
                          <td className="tc header">흥미 선호</td>
                          <td>
                            개인 흥미 분야, 선호하는 업무 환경 및 주제 (심리학,
                            여행등)
                          </td>
                        </tr>
                        <tr>
                          <td className="tc header">피해야 할 특질</td>
                          <td>
                            수동적, 공격적 성향 등 부정적인 특성 (독단적,
                            방어적, 회의적등)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 733번째 줄 부터 735번째 줄 까지 해리슨 없을때 나오는 데이터 */}

              {/* <div className="no-harrison-container">
                <div className="no-harrison">Harrison결과가 없습니다.</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
