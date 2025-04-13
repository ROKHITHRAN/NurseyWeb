import React, { useState } from 'react';
import { Upload, Send } from 'lucide-react';

const CustomerCarePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    imageFile: null as File | null
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        imageFile: file
      }));

      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      imageFile: null
    });
    setImagePreview(null);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Customer Care</h1>
          <p className="mt-2 text-lg text-gray-600">We're here to help with any plant-related questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Care Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">How We Can Help</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Plant Health Issues</h3>
                    <p className="text-gray-600">
                      Having trouble with your plants? Send us a photo and description of the issue, and our experts will provide advice on how to help your plant recover.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Plant Identification</h3>
                    <p className="text-gray-600">
                      Not sure what plant you have? Upload a clear photo, and we'll help identify it and provide care instructions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Care Instructions</h3>
                    <p className="text-gray-600">
                      Need specific advice on watering, light requirements, or fertilizing? Our team of plant experts is here to help.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Care Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us Your Question</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
                    <h3 className="text-lg font-medium text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your question has been submitted successfully. Our plant experts will review it and get back to you within 24-48 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Ask Another Question
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="Plant Health Issue">Plant Health Issue</option>
                        <option value="Plant Identification">Plant Identification</option>
                        <option value="Care Instructions">Care Instructions</option>
                        <option value="Other Question">Other Question</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Question *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Please describe your question or issue in detail. The more information you provide, the better we can help you."
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload a Photo (Optional)
                      </label>
                      <div className="mt-1 flex items-center">
                        <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                          <Upload className="h-5 w-5 mr-2 text-gray-500" />
                          <span>Choose a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        JPG, PNG or GIF up to 5MB
                      </p>
                      
                      {imagePreview && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 mb-1">Image Preview:</p>
                          <div className="relative w-40 h-40 border border-gray-300 rounded-md overflow-hidden">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setImagePreview(null);
                                setFormData(prev => ({ ...prev, imageFile: null }));
                              }}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Submit Question
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Other Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Garden Consultations</h3>
              <p className="text-gray-600 mb-4">
                Schedule a one-on-one consultation with our garden experts to get personalized advice for your specific garden needs.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium">
                Learn More →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Plant Care Workshops</h3>
              <p className="text-gray-600 mb-4">
                Join our regular workshops to learn essential plant care skills from our experienced horticulturists.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium">
                View Schedule →
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Landscaping Services</h3>
              <p className="text-gray-600 mb-4">
                Our professional landscaping team can help design and implement the perfect garden for your home or business.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium">
                Request a Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarePage;