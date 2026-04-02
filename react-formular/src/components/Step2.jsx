import { useFormState, useFormDispatch } from "../context/FormContext";
import options from "../data/options.json";

export default function Step2() {
  const { formData } = useFormState();
  const dispatch = useFormDispatch();

  const handleCheckbox = (activity) => {
    let updated = [...formData.activities];

    if (updated.includes(activity)) {
      updated = updated.filter((a) => a !== activity);
    } else {
      updated.push(activity);
    }

    dispatch({
      type: "SET_FIELD",
      field: "activities",
      value: updated,
    });
  };

  return (
    <div className="step">
      <h2 className="step-title">Pasul 2 - Preferințe</h2>

      {/* CHECKBOX */}
      <p className="label">Alege activități:</p>
      <div className="checkbox-group">
        {options.activities.map((act, index) => (
          <label key={index} className="checkbox-item">
            <input
              type="checkbox"
              checked={formData.activities.includes(act)}
              onChange={() => handleCheckbox(act)}
            />
            {act}
          </label>
        ))}
      </div>

      {/* NUMBER */}
      <p className="label">Buget:</p>
      <input
        className="input"
        type="number"
        value={formData.budget}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "budget",
            value: e.target.value,
          })
        }
      />
    </div>
  );
}