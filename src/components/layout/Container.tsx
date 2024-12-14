import FeedbackList from "../feedback/FeedbackList";
import Header from "../layout/Header";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <FeedbackList />
    </div>
  );
}
