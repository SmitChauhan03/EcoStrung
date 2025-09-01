import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-light text-gray-900 mb-4">EcoStrung</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We're dedicated to providing exceptional service and building lasting relationships with our clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@company.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Business St, New York, NY 10001</span>
              </div>
            </div>
          </div>

        

          
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-600" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-600" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-600" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-600" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}