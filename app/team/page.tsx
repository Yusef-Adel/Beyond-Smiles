import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              Meet Our <span className="italic text-sage-green/80">Expert Team</span>
            </h1>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible direction="up" delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our team is made up of experienced specialists in every field of dentistry. From general dentists to oral
              surgeons, orthodontists, and periodontists, Beyond Smiles ensures that every patient receives top-tier care.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Aly Mohamed Atteya",
                specialty: "Maxillofacial & Plastic Surgery",
                description:
                  "Dr Aly Mohamed Atteya — MBBCh, BDS, MS, PhD. Consultant and Lecturer of Maxillofacial and Plastic Surgery, Alexandria University. Clinical Fellow at Hospital Infanta Cristina, Spain.",
                image:
                  "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/DR.Aly%20Mohamed%20Atteya.jpg",
              },
              {
                name: "Prof. Abbas Zaher",
                specialty: "Orthodontics",
                description:
                  "Professor and past-Chairman, Department of Orthodontics, Faculty of Dentistry, University of Alexandria. Honorary professor, University Del Valle, Cali, Colombia. President of the Egyptian Orthodontic Society. Past-Vice President of the World Federation of Orthodontists.",
                image:
                  "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/PHOTO-2025-08-17-16-47.jpg",
              },
              {
                name: "Dr. Mohamed Abdallah",
                specialty: "Cosmetic & Implant Dentistry",
                description: "Dr Mohamed Abdallah — BDS, FICOI. Consultant cosmetic and implant dentistry.",
                image:
                  "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/DR.Mohamed%20Abdallah.jpg",
              },
              {
                name: "Dr. Amr Elsebaey",
                specialty: "Aesthetic Restorative Dentistry",
                description:
                  "Specialist in Advanced Aesthetic Restorative Dentistry (UIC Barcelona). Certified in Exocad Digital Smile Design.",
                image:
                  "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/DR.Amr%20Elsebaey.jpg",
              },
            ].map((doctor, index) => (
              <StaggerItem key={index}>
                <Card
                  className="overflow-hidden border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-sage-green mb-2">{doctor.name}</h3>
                    <p className="text-sage-green/80 font-medium mb-3">{doctor.specialty}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{doctor.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Discover Our{" "}
              <span className="italic text-sage-green/80">Services</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Explore our comprehensive range of dental specialties designed to meet all your oral health needs.
            </p>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
              >
                View Our Services
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}
