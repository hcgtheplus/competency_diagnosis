import page_13_위임형 from "../image/sub-image/page-13/leadership-type/page-13-we.jpg";
import page_13_지시형 from "../image/sub-image/page-13/leadership-type/page-13-jisi.jpg";
import page_13_지원형 from "../image/sub-image/page-13/leadership-type/page-13-jiwon.jpg";
import page_13_코칭형 from "../image/sub-image/page-13/leadership-type/page-13-co.jpg";

import page_13_감독자 from "../image/sub-image/page-13/leadership-style/page-13-gam.jpg";
import page_13_감시자 from "../image/sub-image/page-13/leadership-style/page-13-gamsi.jpg";
import page_13_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-gae.jpg";
import page_13_성취자 from "../image/sub-image/page-13/leadership-style/page-13-sung.jpg";
import page_13_조언자 from "../image/sub-image/page-13/leadership-style/page-13-jo.jpg";
import page_13_조정자 from "../image/sub-image/page-13/leadership-style/page-13-jojung.jpg";
import page_13_중재자 from "../image/sub-image/page-13/leadership-style/page-13-jung.jpg";
import page_13_촉진자 from "../image/sub-image/page-13/leadership-style/page-13-chock.jpg";

import page_13_감독자_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-gam-gae.jpg";
import page_13_감독자_중재자 from "../image/sub-image/page-13/leadership-style/page-13-gam-jung.jpg";

import page_13_감시자_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-gam-gae.jpg";

import page_13_성취자_중재자 from "../image/sub-image/page-13/leadership-style/page-13-sung-jung.jpg";

import page_13_조언자_감독자 from "../image/sub-image/page-13/leadership-style/page-13-jo-gam.jpg";
import page_13_조언자_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-jo-gae.jpg";

import page_13_조정자_감독자 from "../image/sub-image/page-13/leadership-style/page-13-jojung-gam.jpg";
import page_13_조정자_중재자 from "../image/sub-image/page-13/leadership-style/page-13-jojung-jung.jpg";

import page_13_중재자_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-jung-gae.jpg";
import page_13_촉진자_개혁자 from "../image/sub-image/page-13/leadership-style/page-13-chock-gae.jpg";

import page_13_촉진자_조정자 from "../image/sub-image/page-13/leadership-style/page-13-chock-jo.jpg";

export default function Page({
  data,
  name,
  organization,
  position,
  leadershipType,
  leadershipStyle,
}) {
  const leadershipTypeImage = (leadershipType) => {
    switch (leadershipType) {
      case "지원형":
        return page_13_지원형;
      case "코칭형":
        return page_13_코칭형;
      case "위임형":
        return page_13_위임형;
      case "지시형":
        return page_13_지시형;
      default:
        return null;
    }
  };

  const leadershipStyleImage = () => {
    switch (true) {
      case leadershipStyle.some((style) => style === "감독자") &&
        leadershipStyle.some((style) => style === "개혁자"):
        return page_13_감독자_개혁자;
      case leadershipStyle.some((style) => style === "감독자") &&
        leadershipStyle.some((style) => style === "중재자"):
        return page_13_감독자_중재자;
      case leadershipStyle.some((style) => style === "감시자") &&
        leadershipStyle.some((style) => style === "개혁자"):
        return page_13_감시자_개혁자;
      case leadershipStyle.some((style) => style === "성취자") &&
        leadershipStyle.some((style) => style === "중재자"):
        return page_13_성취자_중재자;
      case leadershipStyle.some((style) => style === "조언자") &&
        leadershipStyle.some((style) => style === "감독자"):
        return page_13_조언자_감독자;
      case leadershipStyle.some((style) => style === "조언자") &&
        leadershipStyle.some((style) => style === "개혁자"):
        return page_13_조언자_개혁자;
      case leadershipStyle.some((style) => style === "조정자") &&
        leadershipStyle.some((style) => style === "감독자"):
        return page_13_조정자_감독자;
      case leadershipStyle.some((style) => style === "조정자") &&
        leadershipStyle.some((style) => style === "중재자"):
        return page_13_조정자_중재자;
      case leadershipStyle.some((style) => style === "중재자") &&
        leadershipStyle.some((style) => style === "개혁자"):
        return page_13_중재자_개혁자;
      case leadershipStyle.some((style) => style === "촉진자") &&
        leadershipStyle.some((style) => style === "개혁자"):
        return page_13_촉진자_개혁자;
      case leadershipStyle.some((style) => style === "촉진자") &&
        leadershipStyle.some((style) => style === "조정자"):
        return page_13_촉진자_조정자;
      case leadershipStyle.some((style) => style === "감독자"):
        return page_13_감독자;
      case leadershipStyle.some((style) => style === "감시자"):
        return page_13_감시자;
      case leadershipStyle.some((style) => style === "개혁자"):
        return page_13_개혁자;
      case leadershipStyle.some((style) => style === "성취자"):
        return page_13_성취자;
      case leadershipStyle.some((style) => style === "조언자"):
        return page_13_조언자;
      case leadershipStyle.some((style) => style === "조정자"):
        return page_13_조정자;
      case leadershipStyle.some((style) => style === "중재자"):
        return page_13_중재자;
      case leadershipStyle.some((style) => style === "촉진자"):
        return page_13_촉진자;
      default:
        return null;
    }
  };

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
                <div className="flex ac sb">
                  <h4 className="main-title">Summary 리더십 유형</h4>
                  <div className="flex fc w-60">
                    <div className="f16 fb mb5">리더십Type :</div>
                    <div className="f18 word-k-all">{data[0].Column6}</div>
                  </div>
                </div>

                <hr className="bottom-line" />
              </div>

              <div className="flc sb">
                <div className="flex jcs mt50 ml40">
                  <div className="flc fc">
                    <div className="leadership-type flc fc mt35">
                      <div className="page-13-sub-image-1 flex">
                        <div className="type-left">
                          <div className="type-h flc jcs fwb">H</div>
                          <hr />
                          <div
                            className="wmvkr mt15 mb15 f18 fwb"
                            style={{ letterSpacing: "-1.5px" }}
                          >
                            지지행동
                          </div>
                          <hr />
                        </div>
                        <div className="flc fc type-block-container">
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
                      <div className="type-right">
                        <div className="type-l flc jcs fwb">L</div>
                        <hr />
                        <div className="ml15 mr15 f18 fwb">지시행동</div>
                        <hr />
                        <div className="type-bh flc jcs fwb">H</div>
                      </div>
                    </div>
                    <div className="image-sub-title-js">나의 리더십 유형</div>
                  </div>
                </div>
                <div className="fwb f50" style={{ color: "#e9e9e9" }}>
                  X
                </div>
                <div className="flex jcs mt50 mr40">
                  <div className="flc fc">
                    <div className="leadership-style flc jcs fc">
                      <div className="fwb f18 mb15">유연성/자율성</div>
                      <div className="flc">
                        <div
                          className="fwb f18 wmvkr mr15"
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
                                  leadershipStyle.some(
                                    (style) => style === "촉진자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                촉진자
                              </div>
                              <div
                                className={`triangle p15 f13 section2 ${
                                  leadershipStyle.some(
                                    (style) => style === "조언자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                조언자
                              </div>
                            </div>
                            <div className="flex jce fwb block mb5">
                              혁신중시형
                              <div
                                className={`triangle p15 f13 section3 ${
                                  leadershipStyle.some(
                                    (style) => style === "개혁자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                개혁자
                              </div>
                              <div
                                className={`triangle p15 f13 section4 ${
                                  leadershipStyle.some(
                                    (style) => style === "중재자"
                                  )
                                    ? "active"
                                    : ""
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
                                  leadershipStyle.some(
                                    (style) => style === "감시자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                감시자
                              </div>
                              <div
                                className={`triangle p15 f13 section6 ${
                                  leadershipStyle.some(
                                    (style) => style === "조정자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                조정자
                              </div>
                            </div>
                            <div className="flex jce afe fwb block">
                              성과중시형
                              <div
                                className={`triangle p15 f13 section7 ${
                                  leadershipStyle.some(
                                    (style) => style === "감독자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                감독자
                              </div>
                              <div
                                className={`triangle p15 f13 section8 ${
                                  leadershipStyle.some(
                                    (style) => style === "성취자"
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                성취자
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="fwb f18 wmvkr ml15"
                          style={{ letterSpacing: "-1.5px" }}
                        >
                          외부지향성
                        </div>
                      </div>
                      <div className="fwb f18 mt15">안정성</div>
                    </div>
                    <div className="image-sub-title-js">나의 리더십 스타일</div>
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
                    src={leadershipTypeImage(leadershipType)}
                    alt="leadership-type"
                  />
                </div>

                <div className="flc jcs">
                  <img
                    style={{
                      width: leadershipStyle.length > 1 ? 400 : 250,
                    }}
                    src={leadershipStyleImage()}
                    alt="leadership-style"
                  />
                </div>
              </div>

              <div>
                <div className="text-container">
                  <div className="mb30 mt30">
                    <div className="mb10 main-sub-title mb10">특징</div>
                    {data[3].Column6.trim() && (
                      <ul>
                        <li>{data[3].Column6.trim()}</li>
                      </ul>
                    )}
                  </div>
                  <div className="mb30">
                    <div className="mb10 main-sub-title mb10">강점</div>
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
                    <div className="mb10 main-sub-title mb10">주의할 점</div>
                    <ul>
                      {data[6].Column6.trim() && (
                        <li>{data[6].Column6.trim()}</li>
                      )}
                      {data[7].Column6.trim() && (
                        <li>{data[7].Column6.trim()}</li>
                      )}
                    </ul>
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
