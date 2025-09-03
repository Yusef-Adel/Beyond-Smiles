import { Card } from "@/components/ui/card"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export default function CasesPage() {
  const cases = [
    {
      title: "Whitening Case",
      before: "/image.png",
      after: "/Screenshot_1.jpg",
    },
    {
      title: "Veneers Case",
      before: "/image.png",
      after: "/Screenshot_1.jpg",
    },
    {
      title: "Alignment Case",
      before: "/image.png",
      after: "/Screenshot_1.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible direction="up">
            <h1 className="font-serif text-5xl md:text-6xl text-sage-green mb-6">
              Smile <span className="italic text-sage-green/80">Cases</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore real transformations. Hover on each image to reveal the before photo. You can also use our interactive slider style below.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Hover Reveal Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-4">Before & After</h2>
            <p className="text-lg text-dark-grey leading-relaxed">After image shown by default. Hover to see the before image.</p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c, idx) => (
              <StaggerItem key={idx}>
                <Card className="overflow-hidden border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group">
                  <div className="relative aspect-square">
                    {/* After image (default) */}
                    <img src={c.after} alt={`${c.title} after`} className="absolute inset-0 w-full h-full object-cover" />
                    {/* Before image (revealed on hover) */}
                    <img
                      src={c.before}
                      alt={`${c.title} before`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-sage-green">{c.title}</h3>
                    <p className="text-sm text-neutral-grey">Hover to reveal the before image</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Classic Slider Style (kept) */}
      <section className="px-6 pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-4">Interactive Slider</h2>
            <p className="text-lg text-dark-grey leading-relaxed">Prefer the slider? Drag the handle to compare.</p>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="up" className="flex justify-center">
            <BeforeAfterSlider
              beforeImage="/image.png"
              afterImage="/Screenshot_1.jpg"
              beforeAlt="Before"
              afterAlt="After"
              className="shadow-2xl max-w-4xl"
            />
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}


