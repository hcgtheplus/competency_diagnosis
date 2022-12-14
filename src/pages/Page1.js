import page_1 from "../image/page-1.png";

export default function Page() {
  return (
    <div className="pr" style={{ pageBreakBefore: "avoid" }}>
      <img className="page 1" src={page_1} alt="page_1" />
    </div>
  );
}
