import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Logo } from './logo'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { FooterLogo } from './footerLogo'

const Footer = () => {
  return (
    <footer className="bg-sage-green text-white">
      {/* Main CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-medium">Ready to Transform Your Smile?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-secondary">
            Schedule your consultation today and experience the Beyond Smiles difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-sage-green hover:bg-gray-100 font-secondary">
              Book Appointment
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-green bg-transparent font-secondary"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <FooterLogo size="lg" variant='icon-only' className="flex flex-col gap-2 pb-6 " />
                
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="font-serif text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 font-secondary">
                <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/team" className="text-white/80 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-lg mb-6">Our Services</h3>
              <ul className="space-y-3 font-secondary">
                <li><span className="text-white/80">General Dentistry</span></li>
                <li><span className="text-white/80">Orthodontics</span></li>
                <li><span className="text-white/80">Cosmetic Dentistry</span></li>
                <li><span className="text-white/80">Oral Surgery</span></li>
                <li><span className="text-white/80">Endodontics</span></li>
                <li><span className="text-white/80">Periodontics</span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg mb-6">Contact Information</h3>
              <div className="space-y-4 font-secondary">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-1 text-white/80" />
                  <div>
                    <p className="text-white/80">123 Dental Street</p>
                    <p className="text-white/80">Medical District</p>
                    <p className="text-white/80">City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-white/80" />
                  <p className="text-white/80">(555) 123-SMILE</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-white/80" />
                  <p className="text-white/80">info@beyondsmiles.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={18} className="mt-1 text-white/80" />
                  <div>
                    <p className="text-white/80">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-white/80">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 font-secondary">
            <p>&copy; 2025 Beyond Smiles. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white/80 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer