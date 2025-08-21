import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Smile, Scissors, Wrench, Sparkles, Heart, Users, Baby, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "General & Preventive Dentistry",
      description:
        "Regular checkups, cleanings, and fillings to maintain optimal oral health and prevent future issues.",
      features: [
        "Comprehensive oral examinations",
        "Professional dental cleanings",
        "Cavity prevention and treatment",
        "Fluoride treatments",
        "Dental sealants",
        "Oral cancer screenings",
      ],
      icon: Shield,
    },
    {
      title: "Orthodontics",
      description: "Metal braces, ceramic braces, and clear aligners to straighten teeth and correct bite issues.",
      features: [
        "Traditional metal braces",
        "Clear ceramic braces",
        "Invisible aligners",
        "Bite correction therapy",
        "Retainer fitting",
        "Early orthodontic intervention",
      ],
      icon: Smile,
    },
    {
      title: "Orthognathic Surgery",
      description: "Correcting facial bone position or size to improve function, balance, and appearance.",
      features: [
        "Jaw repositioning surgery",
        "Facial balance correction",
        "Functional improvement",
        "Sleep apnea treatment",
        "TMJ disorder correction",
        "Aesthetic facial enhancement",
      ],
      icon: Scissors,
    },
    {
      title: "Implants & Oral Surgery",
      description: "Dental implants, extractions, and bone grafting for comprehensive tooth replacement solutions.",
      features: [
        "Single and multiple implants",
        "All-on-4 implant solutions",
        "Wisdom tooth extraction",
        "Bone grafting procedures",
        "Sinus lift surgery",
        "Implant-supported dentures",
      ],
      icon: Wrench,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and complete smile makeovers to enhance your natural beauty.",
      features: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Complete smile design",
        "Dental bonding",
        "Gum contouring",
        "Smile makeover consultations",
      ],
      icon: Sparkles,
    },
    {
      title: "Endodontics (Root Canal Treatment)",
      description: "Precision root canal therapy to save your natural teeth and eliminate pain.",
      features: [
        "Root canal treatment",
        "Pulp therapy",
        "Endodontic retreatment",
        "Apicoectomy",
        "Pain management",
        "Tooth preservation",
      ],
      icon: Heart,
    },
    {
      title: "Periodontics",
      description: "Gum disease treatment, deep cleanings, and gum surgery to maintain healthy gums.",
      features: [
        "Gum disease treatment",
        "Deep cleaning (scaling)",
        "Gum surgery and grafting",
        "Pocket reduction surgery",
        "Crown lengthening",
        "Maintenance therapy",
      ],
      icon: Users,
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and fun dental care tailored specifically for children and adolescents.",
      features: [
        "Child-friendly environment",
        "Preventive care for kids",
        "Early orthodontic evaluation",
        "Dental education",
        "Sedation options",
        "Special needs care",
      ],
      icon: Baby,
    },
    {
      title: "TMJ & Jaw Treatment",
      description: "Solutions for jaw pain, TMJ disorders, and bite issues to restore comfort and function.",
      features: [
        "TMJ disorder diagnosis",
        "Jaw pain relief therapy",
        "Bite correction treatment",
        "Custom night guards",
        "Physical therapy referrals",
        "Stress management guidance",
      ],
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
            Our <span className="italic text-sage-green/80">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Comprehensive dental care under one roof. Our expert specialists provide everything from routine checkups to
            advanced treatments, ensuring the best possible care for every patient.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-green/20 transition-colors">
                    <service.icon className="w-8 h-8 text-sage-green" />
                  </div>
                  <h3 className="font-serif text-xl text-sage-green mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sage-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-sage-green text-white">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Schedule your consultation today and let us create a personalized treatment plan for you
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white cursor-pointer  text-sage-green hover:bg-gray-100">
              Book Appointment
            </Button>
            </Link>
        </div>
      </section>
    </div>
  )
}
