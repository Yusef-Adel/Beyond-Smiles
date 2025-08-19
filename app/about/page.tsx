import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
            About <span className="italic text-sage-green/80">Beyond Smiles</span>
          </h1>
        
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            More than just a dental clinic - we are a full-service dental center dedicated to providing advanced oral
            care with specialists across all fields of dentistry.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/modern-dental-clinic.png"
                alt="Modern dental clinic interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-sage-green mb-6">
                Our <span className="italic text-sage-green/80">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To provide high-quality, patient-centered dental care with a focus on understanding, innovation,
                technology, and comprehensive treatment planning. Every patient receives the best care possible under
                one roof.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Specialists</h3>
                    <p className="text-gray-600">Across all fields of dentistry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                    <p className="text-gray-600">For precise and comfortable care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Treatment</h3>
                    <p className="text-gray-600">Tailored to your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Our <span className="italic text-sage-green/80">Values</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-sage-green" />,
                title: "Patient-Centered Care",
                description: "Every treatment is tailored to your unique needs and comfort.",
              },
              {
                icon: <Award className="w-8 h-8 text-sage-green" />,
                title: "Excellence in Dentistry",
                description: "Our specialists stay ahead with the latest advancements.",
              },
              {
                icon: <Users className="w-8 h-8 text-sage-green" />,
                title: "Transparency",
                description: "Clear communication about treatments and pricing.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-sage-green" />,
                title: "Innovation",
                description: "Advanced technology for precise and efficient care.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-sage-green/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl text-sage-green mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-sage-green text-white">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl font-bold">Meet Our Expert Team</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get to know the specialists who make Beyond Smiles exceptional
          </p>
          <Link href="/team">
            <Button size="lg" variant="secondary" className="bg-white text-sage-green hover:bg-gray-100">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
