import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Smile, Sparkles, Wrench, Heart, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <p className="text-sage-green/80 font-medium mb-2 tracking-wide">WELCOME TO BEYOND SMILES</p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-sage-green mb-6 leading-tight">
                  Beyond Dentistry. <span className="italic text-sage-green/90">Beyond Expectations.</span>
                </h1>
                <div className="w-24 h-12 bg-gradient-to-r from-mint-green to-sage-green rounded-full mx-auto lg:mx-0 mb-6 opacity-80"></div>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                From routine checkups to advanced procedures, Beyond Smiles is your trusted destination for complete
                medical health and well-being. Experience a new era of medical excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-sage-green hover:bg-sage-green/90 text-white px-8 py-4 text-lg">
                  Book an Appointment
                </Button>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-green text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg bg-transparent"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                  <span>Expert specialists across all fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                  <span>Advanced technology & precision care</span>
                </div>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/luxury-dental-treatment.png"
                  alt="Professional dental care at Beyond Smiles"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-mint-green/20 to-sage-green/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Comprehensive Dental Care <span className="italic text-sage-green/80">Under One Roof</span>
            </h2>
            <div className="w-16 h-8 bg-gradient-to-r from-mint-green to-sage-green rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We offer a full range of dental specialties, ensuring that every patient receives the best care possible
              with our team of expert specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Services - showing top 6 */}
            {[
              {
                title: "General & Preventive Dentistry",
                description: "Regular checkups, cleanings, and fillings to maintain optimal oral health.",
                features: ["Routine examinations", "Professional cleanings", "Cavity prevention"],
                icon: Shield,
              },
              {
                title: "Orthodontics",
                description: "Metal braces, ceramic braces, and clear aligners to straighten teeth.",
                features: ["Traditional braces", "Clear aligners", "Bite correction"],
                icon: Smile,
              },
              {
                title: "Cosmetic Dentistry",
                description: "Teeth whitening, veneers, and complete smile makeovers.",
                features: ["Teeth whitening", "Porcelain veneers", "Smile design"],
                icon: Sparkles,
              },
              {
                title: "Implants & Oral Surgery",
                description: "Dental implants, extractions, and bone grafting procedures.",
                features: ["Dental implants", "Extractions", "Bone grafting"],
                icon: Wrench,
              },
              {
                title: "Endodontics",
                description: "Precision root canal therapy to save your natural teeth.",
                features: ["Root canal therapy", "Pulp treatment", "Pain relief"],
                icon: Heart,
              },
              {
                title: "Periodontics",
                description: "Gum disease treatment and prevention for healthy gums.",
                features: ["Gum treatment", "Deep cleaning", "Gum surgery"],
                icon: Users,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-8 border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-green/20 transition-colors">
                  <service.icon className="w-8 h-8 text-sage-green" />
                </div>
                <h3 className="font-serif text-xl text-sage-green mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-sage-green hover:bg-sage-green/90 text-white px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl text-sage-green mb-6">
                Who We <span className="italic text-sage-green/80">Are</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Beyond Smiles is more than just a dental clinic; we are a full-service dental center dedicated to
                providing advanced oral care. Our team consists of specialists across all fields of dentistry.
              </p>
              <Link href="/about">
                <Button className="bg-sage-green hover:bg-sage-green/90 text-white">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/modern-dental-clinic.png"
                alt="Modern dental clinic interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
            Meet Our <span className="italic text-sage-green/80">Expert Team</span>
          </h2>
          <div className="w-16 h-8 bg-gradient-to-r from-mint-green to-sage-green rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Our team is made up of experienced specialists in every field of dentistry, ensuring that every patient
            receives top-tier care.
          </p>
          <Link href="/team">
            <Button size="lg" className="bg-sage-green hover:bg-sage-green/90 text-white px-8">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-20 bg-sage-green text-white">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold">Ready to Transform Your Smile?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Schedule your consultation today and experience the Beyond Smiles difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-sage-green hover:bg-gray-100">
              Book Appointment
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-green bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
