import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedBackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  const isLoading = useFeedBackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedBackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedBackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
