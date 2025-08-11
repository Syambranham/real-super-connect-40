import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchHero from "@/assets/church-hero.jpg";
import churchInterior from "@/assets/church-interior.jpg";
import churchCommunity from "@/assets/church-community.jpg";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    image: churchHero,
    title: "Welcome to The Real Super Church",
    subtitle: "Join us in worship and fellowship",
    description: "Experience God's love in our vibrant community"
  }, {
    image: churchInterior,
    title: "A Place of Worship",
    subtitle: "Come as you are",
    description: "Find peace and spiritual growth in our sanctuary"
  }, {
    image: churchCommunity,
    title: "Growing Together",
    subtitle: "Building lasting relationships",
    description: "Connect with fellow believers in faith and friendship"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="relative h-[70vh] overflow-hidden rounded-lg shadow-divine">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"}`}>
          <div className="relative h-full bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }}>
            <div className="absolute inset-0 bg-divine-blue/40" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-4 animate-fade-in-up">
                <h2 className="text-4xl md:text-6xl font-bold text-sacred-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-golden-light mb-4">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl text-sacred-white/90 mb-8">
                  {slide.description}
                </p>
                
              </div>
            </div>
          </div>
        </div>)}

      {/* Navigation Arrows */}
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sacred-white hover:bg-sacred-white/20" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </Button>
      
      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sacred-white hover:bg-sacred-white/20" onClick={nextSlide}>
        <ChevronRight size={24} />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-golden-light" : "bg-sacred-white/50"}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
    </div>;
};
export default Carousel;