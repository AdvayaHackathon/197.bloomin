
import React, { useEffect, useRef } from 'react';
import { UserSquare2, Quote } from 'lucide-react';

const Testimonials = () => {
  const countersRef = useRef<HTMLDivElement>(null);
  
  const metrics = [
    { number: 0, label: "Medical Professionals Connected", suffix: "+" },
    { number: 0, label: "AI Diagnoses Completed", suffix: "+" },
    { number: 0, label: "Medical Institutions Connected", suffix: "+" }
  ];



  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter');
          
          counters.forEach((counter: Element) => {
            const counterElement = counter as HTMLElement;
            const target = parseInt(counterElement.dataset.target || '0');
            let count = 0;
            const speed = Math.floor(2000 / target);
            
            const updateCount = () => {
              if (count < target) {
                count += Math.ceil(target / 100);
                if (count > target) count = target;
                counterElement.innerText = count.toLocaleString() + (counterElement.dataset.suffix || '');
                setTimeout(updateCount, speed);
              }
            };
            
            updateCount();
          });
          
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <section id="research" className="py-20 relative bg-bloomin-navy-light">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Success Stories & Impact</span>
          </h2>
          <p className="text-bloomin-gray max-w-2xl mx-auto">
            Bloomin is transforming healthcare across the globe. See our impact and hear from our users.
          </p>
        </div>

        <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-card p-6 sm:p-8 text-center">
              <div 
                className="text-4xl sm:text-5xl font-bold mb-2 gradient-text counter" 
                data-target={metric.number}
                data-suffix={metric.suffix}
              >
                0
              </div>
              <p className="text-bloomin-gray text-lg">{metric.label}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;
