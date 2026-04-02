import { useFormState } from "../context/FormContext";

export default function Stepper() {
  const { step } = useFormState();

  return (
    <div className="stepper">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`step 
            ${step > s ? "completed" : ""} 
            ${step === s ? "active" : ""}`}
        >
          {step > s ? "✔" : s}
        </div>
      ))}
    </div>
  );
}