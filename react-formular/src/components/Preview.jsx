import { useFormState } from "../context/FormContext";

export default function Preview() {
  const { formData } = useFormState();

  return (
    <div className="preview">
      <h3 className="preview-title">Preview</h3>

      <p className="preview-item"><strong>Nume:</strong> {formData.name}</p>
      <p className="preview-item"><strong>Destinație:</strong> {formData.destination}</p>
      <p className="preview-item"><strong>Data:</strong> {formData.date}</p>
      <p className="preview-item"><strong>Activități:</strong> {formData.activities.join(", ")}</p>
      <p className="preview-item"><strong>Buget:</strong> {formData.budget}</p>
      <p className="preview-item"><strong>Transport:</strong> {formData.transport}</p>
    </div>
  );
}