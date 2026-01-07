import React, { useState } from "react";
import Registration_From from "./Registration_From";
import Registered_Data from "./Registered_Data";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  const handleReturnToForm = () => {
    setSubmittedData(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {submittedData ? (
        <Registered_Data
          formData={submittedData}
          onReturnToForm={handleReturnToForm}
        />
      ) : (
        <Registration_From onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
