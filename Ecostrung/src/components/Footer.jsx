import React from 'react';
import {Link} from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className='text-xl font-light text-gray-900 w-30 h-auto hover:text-gray-700 transition-colors duration-200 content tracking-wide '>
              <Link to='/'  >
                <img src='/Logo/LogoEcostrung.png' className='object-cover' ></img>
              </Link>
            </div>    
            <p className="text-gray-600 mb-4 leading-relaxed">
              Innovating bioplastics from recycled waste
              building a sustainable, circular future.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ecostrung@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 63771 67744</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Ahmedabad, Gujrat, India</span>
              </div>
            </div>
          </div>   
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              to= 'https://linkedin.com/in/ecostrung-19050135a'
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-600" />
            </Link>
            <Link 
              to='https://www.instagram.com/ecostrung?igsh=MWFkdG8ybnVxMXZteA==' 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Ecostrung. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}