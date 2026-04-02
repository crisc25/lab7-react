import { useFormState, useFormDispatch } from "../context/FormContext";

export default function Review() {
  const { formData } = useFormState();
  const dispatch = useFormDispatch();

  return (
    <div className="step">
      <h2 className="step-title">Review final</h2>

      <div className="review-item">
        <strong>Nume:</strong> {formData.name}
      </div>

      <div className="review-item">
        <strong>Destinație:</strong> {formData.destination}
      </div>

      <div className="review-item">
        <strong>Data:</strong> {formData.date}
      </div>

      <div className="review-item">
        <strong>Activități:</strong> {formData.activities.join(", ")}
      </div>

      <div className="review-item">
        <strong>Buget:</strong> {formData.budget}
      </div>

      <div className="review-item">
        <strong>Transport:</strong> {formData.transport}
      </div>

      <button
        className="submit-btn"
        onClick={() => dispatch({ type: "SUBMIT" })}
      >
        Submit
      </button>
    </div>
  );
}