import Container from "./layout/Container";
import HashtagList from "./hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedBackItemsStore } from "../stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedBackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
