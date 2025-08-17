import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
            Meet Our <span className="italic text-sage-green/80">Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our team is made up of experienced specialists in every field of dentistry. From general dentists to oral
            surgeons, orthodontists, and periodontists, Beyond Smiles ensures that every patient receives top-tier care.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Mohamed Abdalla",
                specialty: "General Dentistry",
                description:
                  "Leading our general dentistry department with years of experience in comprehensive oral care.",
                image: "/professional-dentist-portrait.png",
              },
              {
                name: "Dr. Amr El Sebai",
                specialty: "Restorative & Aesthetic Dentistry",
                description:
                  "Master's from Universitat Internacional de Catalunya in Spain. Certified digital dentistry user Exocad and Exoplan.",
                image: "/professional-dentist-portrait.png",
              },
              {
                name: "Dr. Aly Atteya",
                specialty: "Maxillofacial & Plastic Surgery",
                description:
                  "Double qualified maxillofacial surgeon. Fellowship Maxillofacial at Infant Cristina University in Spain. Doctorate of maxillofacial and plastic surgery.",
                image: "/surgeon-portrait.png",
              },
              {
                name: "Dr. Abbas Zaher",
                specialty: "Orthodontics",
                description:
                  "Professor and past chairman department of orthodontics at University of Alexandria. Honorary professor, University Del Valle, Colombia. President of the Egyptian orthodontic society. Past vice president of the world federation of orthodontics.",
                image: "/orthodontist-portrait.png",
              },
              {
                name: "Dr. Mohamed Abo el Hassan",
                specialty: "Endodontics",
                description:
                  "Endodontic specialist and Lecturer of Endodontics at Cairo University, specializing in root canal treatments.",
                image: "/placeholder-zhymb.png",
              },
            ].map((doctor, index) => (
              <Card
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
