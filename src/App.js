import React from 'react';
import MultiStepForm from './components/MultiStepForm';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Review Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
