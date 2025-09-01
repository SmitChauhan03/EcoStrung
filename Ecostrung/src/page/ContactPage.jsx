import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios'

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(()=>{
      if(data){
        setSubmitted(true)
        setIsSubmitting(false)
      }
    },1000)
    
    try {
            await axios.post('/api/contact',data);
            reset()
        } catch (error) {
            console.log(error)
        }
    
    console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Get in touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">hello@company.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Address</p>
                  <p className="text-gray-600">123 Business St<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a message</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-300' : 'border-gray-200'
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 font-medium ${
                  isSubmitting 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </div> */}
          {submitted ?
                (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="text-black" size={24} />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-2">Message Sent!</h3>
                        <p className="text-black/70">Thanks for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                )
                :
                (
                    <div className='space-y-6'>
                        <div>
                            <label className="block text-black font-medium mb-2">Name</label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-4 py-3 border-2 border-black/20 rounded-lg text-black placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                        <label className="block text-black font-medium mb-2">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            className="w-full px-4 py-3 border-2 border-black/20 rounded-lg text-black placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                        <label className="block text-black font-medium mb-2">Subject</label>
                        <input
                            {...register("subject", { required: "Subject is required" })}
                            className="w-full px-4 py-3 border-2 border-black/20 rounded-lg text-black placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                            placeholder="Project Discussion"
                        />
                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                        </div>
                        <div>
                        <label className="block text-black font-medium mb-2">Message</label>
                        <textarea
                            {...register("message")}
                            rows={1.5}
                            className="w-full px-4 py-3  border-2 border-black/20 rounded-lg text-black placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 border-2 px-6 py-3 rounded-lg text-black font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                <span>Send Message</span>
                            </>
                        )}
                        </button>
                    </div>
                    
                )}
        </div>
      </div>
    </div>
  );
}