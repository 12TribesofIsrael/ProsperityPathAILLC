import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface FormStep {
  title: string;
  fields: Array<{
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: Array<{
      value: string;
      label: string;
    }>;
    required?: boolean;
  }>;
}

interface LeadCaptureFormProps {
  steps: FormStep[];
  onSubmit: (formData: Record<string, string>) => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(formData);
      navigate('/thank-you');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentFields = steps[currentStep].fields;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index < currentStep 
                  ? 'bg-green-500 text-white' 
                  : index === currentStep 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index < currentStep ? (
                <Check size={16} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{steps[currentStep].title}</h3>
      </div>

      <form onSubmit={handleNextStep}>
        <div className="space-y-4">
          {currentFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              
              {field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required={field.required}
                  className="input"
                >
                  <option value="">Please select...</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange as any}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="input h-24"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="input"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className={`btn-primary flex items-center gap-2 ${currentStep === 0 ? 'ml-auto' : ''}`}
          >
            {currentStep < steps.length - 1 ? 'Next' : 'Submit'}
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;