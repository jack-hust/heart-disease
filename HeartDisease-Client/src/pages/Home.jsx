import React from "react";
import FormFields from "../components/FormFields";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <p className="para">
        <span className="span-head">
          Heart Disease Prediction using enhanced machine learning.
          models.
        </span>
        {"  "}
         Analyzing factors like age, gender, cholesterol,
        and lifestyle, it aims for early detection and intervention, striving to
        improve patient outcomes and promote cardiovascular health through
        data-driven preventative care.
      </p>
      <FormFields />
    </div>
  );
}