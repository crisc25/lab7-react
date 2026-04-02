import { useFormState, useFormDispatch } from "../context/FormContext";
import options from "../data/options.json";

export default function Step1() {
  const { formData, errors, touched } = useFormState();
  const dispatch = useFormDispatch();

  return (
    <div className="step">
      <h2 className="step-title">Pasul 1 - Date generale</h2>

      
      <input
        className="input"
        type="text"
        placeholder="Nume"
        value={formData.name}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />
      {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
      )}

      {/* SELECT */}
      <select
        className="input"
        value={formData.destination}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "destination",
            value: e.target.value,
          })
        }
      >
        <option value="">Alege destinația</option>
        {options.destinations.map((dest, index) => (
          <option key={index} value={dest}>
            {dest}
          </option>
        ))}
      </select>
      {touched.destination && errors.destination && (
        <p className="error">{errors.destination}</p>
      )}

      {/* DATE */}
      <input
        className="input"
        type="date"
        value={formData.date || ""}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "date",
            value: e.target.value,
          })
        }
      />
      {touched.date && errors.date && (
        <p className="error">{errors.date}</p>
      )}
    </div>
  );
}