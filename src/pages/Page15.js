import page_13_sub_image_2 from "../image/sub-image/page-13/page-13-sub-image-2.png";
import page_13_sub_image_3 from "../image/sub-image/page-13/page-13-sub-image-3.png";

export default function Page({
  data,
  name,
  organization,
  position,
  leadershipType,
  leadershipStyle,
}) {
  return (
    <div className="image-container page 15 pr">
      <div className="page-absolute">15 / 36</div>
      <div className="page 14">
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
                  <h4 className="main-title">Summary 리더십 유형</h4>
                  <div className="flc">
                    <div className="mr30 fb">리더십Type :</div>
                    <div>{data[0].Column6}</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              <div class="flc sb">
                <div class="flex jcs mt50 ml40">
                  <div class="flc fc">
                    <div class="leadership-type flc fc mt35">
                      <div class="page-13-sub-image-1 flex">
                        <div class="type-left">
                          <div class="type-h flc jcs fwb">H</div>
                          <hr />
                          <div
                            class="wmvkr mt15 mb15 f18 fwb"
                            style={{ letterSpacing: "-1.5px" }}
                          >
                            지지행동
                          </div>
                          <hr />
                        </div>
                        <div class="flc fc type-block-container">
                          <div className="flc">
                            <div
                              className={`block ${
                                leadershipType === "지원형" ? "active" : ""
                              }`}
                            >
                              지원형
                            </div>
                            <div
                              className={`block ${
                                leadershipType === "코칭형" ? "active" : ""
                              }`}
                            >
                              코칭형
                            </div>
                          </div>
                          <div className="flc">
                            <div
                              className={`block ${
                                leadershipType === "위임형" ? "active" : ""
                              }`}
                            >
                              위임형
                            </div>
                            <div
                              className={`block ${
                                leadershipType === "지시형" ? "active" : ""
                              }`}
                            >
                              지시형
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="type-right">
                        <div class="type-l flc jcs fwb">L</div>
                        <hr />
                        <div class="ml15 mr15 f18 fwb">지시행동</div>
                        <hr />
                        <div class="type-bh flc jcs fwb">H</div>
                      </div>
                    </div>
                    <div class="image-sub-title-js">나의 리더십 유형</div>
                  </div>
                </div>
                <div class="fwb f50" style={{ color: "#e9e9e9" }}>
                  X
                </div>
                <div class="flex jcs mt50 mr40">
                  <div class="flc fc">
                    <div class="leadership-style flc jcs fc">
                      <div class="fwb f18 mb15">유연성/자율성</div>
                      <div class="flc">
                        <div
                          class="fwb f18 wmvkr mr15"
                          style={{ letterSpacing: "-1.5px" }}
                        >
                          내부지향성
                        </div>
                        <div className="flc fc">
                          <div className="flc">
                            <div className="fwb block mr5 mb5">
                              공동체형
                              <div
                                className={`triangle p15 f13 section1 ${
                                  leadershipStyle === "촉진자" ? "active" : ""
                                }`}
                              >
                                촉진자
                              </div>
                              <div
                                className={`triangle p15 f13 section2 ${
                                  leadershipStyle === "조언자" ? "active" : ""
                                }`}
                              >
                                조언자
                              </div>
                            </div>
                            <div className="flex jce fwb block mb5">
                              혁신중시형
                              <div
                                className={`triangle p15 f13 section3 ${
                                  leadershipStyle === "개혁자" ? "active" : ""
                                }`}
                              >
                                개혁자
                              </div>
                              <div
                                className={`triangle p15 f13 section4 ${
                                  leadershipStyle === "중재자" ? "active" : ""
                                }`}
                              >
                                중재자
                              </div>
                            </div>
                          </div>
                          <div className="flc">
                            <div className="flex afe fwb block mr5">
                              위계질서형
                              <div
                                className={`triangle p15 f13 section5 ${
                                  leadershipStyle === "감시자" ? "active" : ""
                                }`}
                              >
                                감시자
                              </div>
                              <div
                                className={`triangle p15 f13 section6 ${
                                  leadershipStyle === "조정자" ? "active" : ""
                                }`}
                              >
                                조정자
                              </div>
                            </div>
                            <div className="flex jce afe fwb block">
                              성과중시형
                              <div
                                className={`triangle p15 f13 section7 ${
                                  leadershipStyle === "감독자" ? "active" : ""
                                }`}
                              >
                                감독자
                              </div>
                              <div
                                className={`triangle p15 f13 section8 ${
                                  leadershipStyle === "성취자" ? "active" : ""
                                }`}
                              >
                                성취자
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="fwb f18 wmvkr ml15"
                          style={{ letterSpacing: "-1.5px" }}
                        >
                          외부지향성
                        </div>
                      </div>
                      <div class="fwb f18 mt15">안정성</div>
                    </div>
                    <div class="image-sub-title-js">나의 리더십 스타일</div>
                  </div>
                </div>
              </div>

              <div className="flc coch-container">
                <div className="leader-type-title fb">나의 리더십 Type</div>
                <div style={{ fontSize: 24 }}>{data[0].Column6}</div>
              </div>

              <div className="flc jcs mt30">
                <div className="flc jcs mr60">
                  <img
                    className="w250px"
                    src={page_13_sub_image_2}
                    alt="page_13_sub_image_2"
                  />
                </div>

                <div className="flc jcs">
                  <img
                    className="w250px"
                    src={page_13_sub_image_3}
                    alt="page_13_sub_image_3"
                  />
                </div>
              </div>

              <div>
                <div className="text-container">
                  <div className="mb30 mt30">
                    <div className="mb10">특징</div>
                    {data[3].Column6.trim() && (
                      <ul>
                        <li>{data[3].Column6.trim()}</li>
                      </ul>
                    )}
                  </div>
                  <div className="mb30">
                    <div className="mb10">강점</div>
                    <ul>
                      {data[4].Column6.trim() && (
                        <li>{data[4].Column6.trim()}</li>
                      )}
                      {data[5].Column6.trim() && (
                        <li>{data[5].Column6.trim()}</li>
                      )}
                    </ul>
                  </div>
                  <div className="mb30">
                    <div className="mb10">주의할 점</div>
                    {data[6].Column6.trim() && (
                      <ul>
                        <li>{data[6].Column6.trim()}</li>
                      </ul>
                    )}
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
