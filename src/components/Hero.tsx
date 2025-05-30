
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400/30 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '3s' }}></div>
        
        {/* Abstract tech shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-200/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-purple-200/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold border border-blue-200/50 shadow-sm">
                  🚀 Next-Generation Technology Solutions
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  Innovating Tomorrow.
                </span>
                <br />
                <span className="text-gray-900">Today.</span>
              </h1>
              
              <div className="space-y-4 mb-10">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  प्रविधिको शक्तिले नेपालको भविष्यलाई आकार दिँदै
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Empowering Nepal's digital transformation through cutting-edge software development, 
                  AI/ML innovations, IoT solutions, and integrated technology platforms that bridge 
                  the gap between vision and reality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300 group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Explore Services
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                  {/* Tech Dashboard Mockup */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500">Sorad Dynamics Platform</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group hover:scale-105 transition-transform">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded"></div>
                            </div>
                            <p className="text-xs text-blue-700">AI Analytics</p>
                          </div>
                        </div>
                        <div className="h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center group hover:scale-105 transition-transform">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            <p className="text-xs text-purple-700">IoT Control</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-24 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center mt-4 group hover:scale-105 transition-transform">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Play className="text-white w-5 h-5" />
                          </div>
                          <p className="text-sm text-green-700 font-medium">Live Demo Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
