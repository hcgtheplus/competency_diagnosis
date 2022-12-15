import page_1 from "../image/page-1.png";

export default function Page() {
  return (
    <div className="pr" style={{ pageBreakBefore: "avoid" }}>
      <div className="page-1-user-name">
        <div className="page-1-department">미래전략기획부</div>
        <div className="page-1-user-name">홍길동</div>
      </div>
      <img className="page 1" src={page_1} alt="page_1" />
    </div>
  );
}
