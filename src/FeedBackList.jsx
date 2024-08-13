import FeedBackItem from "./FeedBackItem";
function FeedBackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p style={{ color: "blue", fontSize: "25px" }}>No feedback yet</p>;
  }
  return (
    <>
    <div style={{ color: "blue", lineHeight: "3rem", fontSize: "25px" }}>
      {feedback.map((item) => {
        return <FeedBackItem key={item.id} item={item} />;
      })}
    </div>
    </>
  );
}

export default FeedBackList;
