import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

export function TestimonialsSection() {
  const [ref, isInView] = useInView();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialGroups = [
    {
      category: 'For Parents Managing Multiple Therapies',
      testimonials: [
        {
          text: "For 6 months I couldn't tell if sensory integration therapy was helping. With the app weekly insights, I implemented simple activities and physical exercises that unlocked my son's motor skills and stopped some of his challenging behaviors. It is like having his entire care team reviewing his data and alerting when it's time to adjust before his next appointment.",
          name: 'James T.',
          role: 'Parent managing multiple therapies',
          initial: 'J',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'For Newly Diagnosed Families',
      testimonials: [
        {
          text: "I had no idea what to track or why my child had his meltdowns, aggressions and what to do about it. Now I can finally see what I need to focus on first, and I can share real data with our practitioner. It's like finally having a memory that allows you to make informed decisions.",
          name: 'Sarah M.',
          role: 'Parent of 6-year-old with ASD',
          initial: 'S',
          helped: 3,
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'For Budget-Conscious Families',
      testimonials: [
        {
          text: "Between waitlists and £300/hour specialists, we were on our own for my daughter's first year post-diagnosis. This app taught me which behaviors to track, when to worry, and what actually helps. Skills I thought only therapists had. Yesterday her teacher asked how I got so good at spotting sensory overload. I said, 'AID UP trained me.'",
          name: 'David K.',
          role: 'Parent of newly diagnosed child',
          initial: 'D',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'For Non-verbal Child Parents',
      testimonials: [
        {
          text: 'My daughter is non-verbal and we were dealing with a lot of stress due to lack of speech. I feel like this app gives me a chance to understand my child better and bridge the gap so I can put words and meanings on her behavior.',
          name: 'Lisa P.',
          role: 'Parent of non-verbal child',
          initial: 'L',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        },
      ],
    },
    {
      category: 'For Families with Multiple Children',
      testimonials: [
        {
          text: "With my 2 boys on both ends of the spectrum, it was impossible to keep track on which child needed what and when. I love my AID UP app as I can now keep both journeys separate. I log my observations daily for both and can always access personalized guidance on demand. This is so empowering!",
          name: 'Maria R.',
          role: 'Parent of 2 children with ASD',
          initial: 'M',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        },
      ],
    },
  ];

  // Flatten for scrolling
  const allTestimonials = testimonialGroups.flatMap(group =>
    group.testimonials.map(t => ({ ...t, category: group.category })),
  );

  const duplicatedTestimonials = [...allTestimonials, ...allTestimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.3; // subtle auto-scroll

    const animate = () => {
      const container = scrollRef.current;
      if (container && !isPaused) {
        const cardWidth = 320;
        const totalWidth = allTestimonials.length * cardWidth;

        let nextScrollLeft = container.scrollLeft + scrollSpeed;

        if (nextScrollLeft >= totalWidth) {
          nextScrollLeft = 0;
        }

        container.scrollLeft = nextScrollLeft;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, allTestimonials.length]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 md:py-20 bg-[#FFFBF5] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-gray-900"
        >
          Trusted by Families Like Yours
        </motion.h2>

        {/* Auto-scrolling + user-scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto cursor-pointer pb-2"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-lg min-w-[300px] max-w-[300px] border-l-4 border-[#F57D48] flex-shrink-0 flex flex-col"
                onClick={e => {
                  e.stopPropagation();
                  setIsPaused(prev => !prev);
                }}
              >
                {/* Category Header */}
                <div className="mb-3 pb-2 border-b border-gray-100">
                  <p className="text-xs font-semibold text-[#F57D48] uppercase tracking-wide">
                    {testimonial.category}
                  </p>
                </div>

                <p className="text-sm text-gray-700 italic mb-4 leading-relaxed flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {testimonial.helped && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-600">
                      {testimonial.name.split(' ')[0]} has helped {testimonial.helped} families
                      discover AID UP.{' '}
                      <button
                        onClick={() => {
                          const pricingSection = document.getElementById('pricing');
                          if (pricingSection) {
                            pricingSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-[#F57D48] hover:text-[#FF9C7A] font-medium"
                      >
                        Start earning like {testimonial.name.split(' ')[0]} →
                      </button>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
              Paused
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
