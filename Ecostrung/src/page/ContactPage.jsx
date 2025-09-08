import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Twitter, Instagram, Linkedin } from 'lucide-react';
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
            await axios.post('https://ecostrung.onrender.com/api/contact',data);
            reset()
        } catch (error) {
            console.log(error)
        }
    
    // console.log('Form submitted:', data);
  };

  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16   ">

          <div className="space-y-8 hidden md:block ">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Get in touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">ecostrung@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+91 63771 67744</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Address</p>
                  <p className="text-gray-600">Ahmedabad, Gujrat<br />India</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              to= 'https://linkedin.com/in/ecostrung-19050135a'
              className="w-15 h-15 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-600" />
            </Link>
            <Link 
              to='https://www.instagram.com/ecostrung?igsh=MWFkdG8ybnVxMXZteA==' 
              className="w-15 h-15 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-600" />
            </Link>
          </div>
          </div>

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
          <div className="space-y-8 md:hidden ">
            <h2 className="text-2xl font-light text-gray-900 mb-6">Get in touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">ecostrung@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+91 63771 67744</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Address</p>
                  <p className="text-gray-600">Ahmedabad, Gujrat<br />India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}