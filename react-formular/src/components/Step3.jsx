import { useFormState, useFormDispatch } from "../context/FormContext";
import options from "../data/options.json";

export default function Step3() {
  const { formData } = useFormState();
  const dispatch = useFormDispatch();

  return (
    <div className="step">
      <h2 className="step-title">Pasul 3 - Transport</h2>

      <p className="label">Alege transport:</p>

      <div className="radio-group">
        {options.transport.map((t, index) => (
          <label key={index} className="radio-item">
            <input
              type="radio"
              name="transport"
              value={t}
              checked={formData.transport === t}
              onChange={(e) =>
                dispatch({
                  type: "SET_FIELD",
                  field: "transport",
                  value: e.target.value,
                })
              }
            />
            {t}
          </label>
        ))}
      </div>
    </div>
  );
}