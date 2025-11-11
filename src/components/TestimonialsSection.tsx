'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import SplitText from "./SplitText";
import Carousel from "./Carousel";

export function TestimonialsSection() {
  const { dictionary } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-muted-foreground uppercase tracking-wider mb-4 text-sm font-medium">
              {dictionary.testimonials.sectionTitle}
            </p>
            <SplitText
              text={dictionary.testimonials.title}
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
              tag="h2"
              delay={80}
              duration={0.7}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              textAlign="center"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {dictionary.testimonials.description}
            </p>
          </div>
          
          {/* Carousel de Testimonios */}
          <div className="flex justify-center mb-16">
            <Carousel
              items={[
                {
                  id: 1,
                  title: dictionary.testimonials.featured.author,
                  description: dictionary.testimonials.featured.quote,
                  icon: <span className="text-2xl">P</span>
                },
                {
                  id: 2,
                  title: dictionary.testimonials.testimonial1.author,
                  description: dictionary.testimonials.testimonial1.quote,
                  icon: <span className="text-2xl">S</span>
                },
                {
                  id: 3,
                  title: dictionary.testimonials.testimonial2.author,
                  description: dictionary.testimonials.testimonial2.quote,
                  icon: <span className="text-2xl">M</span>
                },
                {
                  id: 4,
                  title: dictionary.testimonials.testimonial3.author,
                  description: dictionary.testimonials.testimonial3.quote,
                  icon: <span className="text-2xl">L</span>
                }
              ]}
              baseWidth={450}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Comment 1 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-primary/30 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial1.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-card rounded-full border border-border flex items-center justify-center">
                    <span className="text-foreground font-semibold">S</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">
                      {dictionary.testimonials.testimonial1.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.testimonials.testimonial1.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comment 2 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-primary/30 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial2.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-card rounded-full border border-border flex items-center justify-center">
                    <span className="text-foreground font-semibold">M</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">
                      {dictionary.testimonials.testimonial2.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.testimonials.testimonial2.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comment 3 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="text-primary/30 text-4xl">&ldquo;</div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{dictionary.testimonials.testimonial3.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-card rounded-full border border-border flex items-center justify-center">
                    <span className="text-foreground font-semibold">L</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">
                      {dictionary.testimonials.testimonial3.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {dictionary.testimonials.testimonial3.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-card rounded-full border border-border">
              <span className="text-foreground font-medium">
                {dictionary.testimonials.cta.question}
              </span>
              <div className="w-px h-4 bg-border"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-primary hover:text-primary-hover transition-colors font-medium"
              >
                {dictionary.testimonials.cta.link}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
