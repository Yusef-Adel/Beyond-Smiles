import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FooterLogo } from "./footerLogo"
import { Facebook, Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sage-green text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid justify-between md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="flex mb-6 flex-col justify-evenly lg:col-span-1">
              <div>
                <FooterLogo size="sm" />
              </div>
              {/* Social Media Links */}
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0"
                >
                  <span className="text-lg"><Phone/></span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0"
                >
                  <span className="text-lg"><Instagram/></span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-sage-green bg-transparent w-10 h-10 p-0"
                >
                  <span className="text-lg"><Facebook/></span>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-xl mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    General Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    Orthodontics
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    Oral Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-white transition-colors">
                    Endodontics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-xl mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white mb-1">📍 Location</p>
                  <p className="text-sm">
                    New Giza, Health Park, Meditown
                    <br />
                    Building 1, Floor 2, Clinic 24
                  </p>
                </div>
                <div>
                  <p className="text-white mb-1">📞 Phone</p>
                  <p className="text-sm">
                    +201289107773
                    <br />
                    +201109721677
                  </p>
                </div>
                <div>
                  <p className="text-white mb-1">🕒 Hours</p>
                  <p className="text-sm">
                    Mon-Fri: 9:00 AM - 8:00 PM
                    <br />
                    Sat: 9:00 AM - 6:00 PM
                    <br />
                    Sun: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">© 2025 Beyond Smiles. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
