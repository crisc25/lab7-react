import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";
import Preview from "./components/Preview";
import Stepper from "./components/Stepper";
import { useFormState, useFormDispatch } from "./context/FormContext";
import "./index.css";

// Proiectul e foarte simplut fiindca eu nu am reusit sa invat tema bine .


function App() {
  const { step, submitted, formData } = useFormState();
  const dispatch = useFormDispatch();

  if (submitted) {
    return (
      <div className="success-container">
        <h1 className="success-title">✔ Formular trimis cu succes!</h1>

        <h2>Planul tău de călătorie este gata ✈️</h2>

        <p>
          Călătoria pentru <strong>{formData.name}</strong> către{" "}
          <strong>{formData.destination}</strong> a fost înregistrată.
        </p>

        <div className="success-box">
          <h3>📋 Detalii:</h3>

          <p><strong>Data:</strong> {formData.date}</p>
          <p><strong>Activități:</strong> {formData.activities.join(", ")}</p>
          <p><strong>Buget:</strong> {formData.budget}</p>
          <p><strong>Transport:</strong> {formData.transport}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Travel Planner</h1>

      <Stepper />

      <p className="step-text">Pasul {step} din 4</p>

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Review />}

      <div className="buttons">
        {step > 1 && (
          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>
        )}

        {step < 4 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        )}
      </div>

      <Preview />
    </div>
  );
}

export default App;