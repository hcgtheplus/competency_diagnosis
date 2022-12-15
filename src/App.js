import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";
import Page15 from "./pages/Page15";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page20 from "./pages/Page20";
import Page21 from "./pages/Page21";
import Page22 from "./pages/Page22";
import Page23 from "./pages/Page23";
import Page24 from "./pages/Page24";
import Page25 from "./pages/Page25";
import Page26 from "./pages/Page26";
import Page27 from "./pages/Page27";
import Page28 from "./pages/Page28";
import Page29 from "./pages/Page29";
import Page30 from "./pages/Page30";
import Page31 from "./pages/Page31";
import Page32 from "./pages/Page32";
import Page33 from "./pages/Page33";
import Page34 from "./pages/Page34";
import Page35 from "./pages/Page35";
import Page36 from "./pages/Page36";

import { groupBy, reduce } from "lodash";
import fullData from "./fullData.json";
// import emailList from "./emailList.json"; // 257명

function App() {
  const groupByEmail = groupBy(fullData, "B");
  const groupByEmailWithPage = reduce(
    groupByEmail,
    (result, value, key) => {
      const groupByPage = groupBy(value, "Page");
      result[key] = groupByPage;

      return result;
    },
    {}
  );
  const sampleData = groupByEmailWithPage["1billion@nhqv.com"];
  const mainData = sampleData["12"];
  const name = mainData[0].Column6;
  const organization = mainData[1].Column6;
  const position = mainData[2].Column6;
  const leadershipType = mainData[4].Column6.split("X")[0].split("(")[0].trim();
  const leadershipStyle = mainData[4].Column6.split("X")[1]
    .split("(")[0]
    .trim();

  return (
    <div className="App">
      {/* <div className="w-100 flex input-fixed">
        <div className="index-input">
          <div className="index-label">대상자 Index ID</div>
          <input placeholder="ID 값을 입력하십시오"></input>
        </div>
      </div> */}
      <div className="for-center">
        <div className="main-image-container page 1">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
          <Page9 />
          <Page10 />
          <Page11 />
          <Page12 />
          <Page13 />
          <Page14
            data={sampleData["12"]}
            name={name}
            organization={organization}
            position={position}
            leadershipType={leadershipType}
            leadershipStyle={leadershipStyle}
          />
          <Page15
            data={sampleData["13"]}
            name={name}
            organization={organization}
            position={position}
            leadershipType={leadershipType}
            leadershipStyle={leadershipStyle}
          />
          <Page16
            data={sampleData["14"]}
            organization={organization}
            position={position}
          />
          <Page17
            data={sampleData["15"]}
            name={name}
            organization={organization}
            position={position}
          />
          <Page18
            data={sampleData["16"]}
            name={name}
            organization={organization}
            position={position}
          />
          <Page19 data={sampleData["17"]} />
          <Page20 data={sampleData["18"]} />
          <Page21 data={sampleData["19"]} />
          <Page22 data={sampleData["20"]} />
          <Page23 data={sampleData["21"]} />
          <Page24 data={sampleData["22"]} />
          <Page25 data={sampleData["23"]} />
          <Page26 data={sampleData["24"]} />
          <Page27 />
          <Page28 />
          <Page29 />
          <Page30 />
          <Page31 />
          <Page32 />
          <Page33 />
          <Page34 />
          <Page35 />
          <Page36 />
        </div>
      </div>
    </div>
  );
}

export default App;
