export default function Page() {
  return (
    <div class="image-container page 21 pr">
      <div class="page-absolute">21 / 36</div>
      <div class="page 20">
        <div class="need-data-container">
          <div class="for-margin">
            <div class="title-container">
              <div class="top-line"></div>
              <div class="flc jcw">
                <h4 class="main-title">나의 리더십 역량</h4>
                <h5 class="main-title">Managing Organization</h5>
              </div>
              <hr class="bottom-line" />
            </div>

            <div class="w-100 h1207">
              <div class="text-container mt50">
                <h5 class="mb10">총평</h5>
                <ul>
                  <li>
                    홍길동 님은 본인 Managing Organization 역할에 대하여 우수한
                    수준이라고 평가하셨으며,이는 타인 진단 결과 대비 높은
                    수준입니다.
                  </li>
                  <li>
                    홍길동 님의 Managing Organization 역할은 4.1점으로 이는
                    회사內유사한 수준이며, 소속 조직內유사한 수준입니다.
                  </li>
                </ul>
                <div class="info mt20">
                  <span class="material-symbols-outlined">arrow_right</span>
                  회사 평균 대비 +0.5 초과인 경우 “우수한” 수준, -0.5~0.5 사이인
                  경우 “양호한“ 수준, -0.5 미만인 경우 “낮은“ 수준으로
                  표현하였습니다.
                </div>
              </div>
              <div class="text-container mt50">
                <h5 class="mb20">관계별 결과 비교</h5>
              </div>

              <div class="page-20-grape-container flex">
                <div>
                  <div class="flc mr20 mb10">
                    <div class="page-20-legend"></div>
                    <div class="f16">우리 부서</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend sec"></div>
                    <div class="f16">타인진단(상향+하향)</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend thr"></div>
                    <div class="f16">상향진단</div>
                  </div>
                  <div class="flc mb10">
                    <div class="page-20-legend four"></div>
                    <div class="f16">우리 회사</div>
                  </div>
                </div>

                <div class="page-18-grape-img-data">
                  <div class="page-20-grape-item pr">
                    <div class="flex jcs h125 al-end">
                      <div class="page-20-our-department mr10">3.8</div>
                      <div class="page-20-our-department sec mr10">3.7</div>
                      <div class="page-20-our-department company thr mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company four">3.7</div>
                    </div>
                    <div class="page-20-active-item sec"></div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div class="page-20-our-department mr10">3.8</div>
                      <div class="page-20-our-department company sec mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company thr mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company four">3.7</div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div class="page-20-our-department mr10">3.8</div>
                      <div class="page-20-our-department company sec mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company thr mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company four">3.7</div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                  <div class="page-20-grape-item">
                    <div class="flex jcs h125 al-end">
                      <div class="page-20-our-department mr10">3.8</div>
                      <div class="page-20-our-department company sec mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company thr mr10">
                        3.7
                      </div>
                      <div class="page-20-our-department company four">3.7</div>
                    </div>
                    <div class="top-line-page-20"></div>
                  </div>
                </div>
              </div>

              <div class="flex page-21-grape-label-bottom mb40">
                <div>Managing Organization</div>
                <div>인재육성</div>
                <div>효율적인 조직운영</div>
                <div>경계없는 협력</div>
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
                      <td colspan="2">Total</td>
                      <td>-</td>
                      <td>-</td>
                      <td>3.5</td>
                      <td>3.5</td>
                      <td>3.5</td>
                    </tr>
                    {/* <!-- 비전제시 데이터 --> */}
                    <tr class="tc">
                      <td class="wmven fwb bt emphasize" rowSpan={25}>
                        Managing Org.
                      </td>
                      <td class="fwb br bt header" rowSpan={4}>
                        인재육성
                      </td>
                      <td class="header fwb bt tl">인재육성</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">경력비전제시</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">코칭/피드백</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">동기부여</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    {/* <!-- / -->
                <!-- 합리적 의사결정 데이터 --> */}
                    <tr class="tc">
                      <td class="fwb br bt header" rowSpan={4}>
                        효율적 조직운영
                      </td>
                      <td class="header fwb bt tl">효율적 조직운영</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">자원관리</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">권한/책임부여</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">성과관리</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    {/* <!-- / -->
                <!-- 강력한 실행력 데이터 --> */}
                    <tr class="tc">
                      <td class="fwb br bt header" rowSpan={4}>
                        경계없는 협력
                      </td>
                      <td class="header fwb bt tl">경계없는 협력</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">상호이해</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">문제해결지원</td>
                      <td class="bt">-</td>
                      <td class="bt">-</td>
                      <td class="bt">3.3</td>
                      <td class="bt">3.5</td>
                      <td class="bt">3.5</td>
                    </tr>
                    <tr class="tc">
                      <td class="header bt tl">갈등관리</td>
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
