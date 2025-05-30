
import { MessageSquare, Users, Bell, Video, Mail, Phone, Calendar, FileText, Heart, Star, Send, CheckCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommunicationSection = () => {
  const communicationFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-time Messaging",
      description: "तत्काल सन्देश आदानप्रदान",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "स्मार्ट सूचना प्रणाली",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Conferences",
      description: "भिडियो कन्फरेन्स सुविधा",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Meeting Scheduler",
      description: "भेटघाट तालिका व्यवस्थापन",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stakeholders = [
    {
      id: "students",
      title: "Students",
      nepali: "विद्यार्थीहरू",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      position: "top",
      features: ["Assignment Updates", "Live Classes", "Grade Reports"]
    },
    {
      id: "teachers",
      title: "Teachers", 
      nepali: "शिक्षकहरू",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      position: "left",
      features: ["Student Progress", "Parent Updates", "Class Management"]
    },
    {
      id: "parents",
      title: "Parents",
      nepali: "अभिभावकहरू", 
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      position: "right",
      features: ["Child's Progress", "School Updates", "Teacher Communication"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <span className="text-blue-600 font-semibold">💬 Communication Hub</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless Communication Bridge
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              विद्यार्थी, शिक्षक र अभिभावक बीच निर्बाध संचार व्यवस्था। 
              Creating a unified communication ecosystem for educational excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Features Grid */}
            <div className="scroll-animate">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Advanced Communication Features
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {communicationFeatures.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-blue-600 font-medium">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Communication</h4>
                    <p className="text-sm text-gray-600">Real-time messaging across all stakeholders</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/80 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure & Private</h4>
                    <p className="text-sm text-gray-600">End-to-end encrypted communications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Communication Flow Visualization */}
            <div className="scroll-animate relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative bg-white shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-12">
                  <div className="space-y-10">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Communication Flow</h4>
                      <p className="text-gray-600">संचार प्रवाह | Bridging Educational Gaps</p>
                    </div>
                    
                    {/* Modern Communication Network */}
                    <div className="relative h-80">
                      {/* Central Hub - Our Product */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-2xl animate-pulse">
                            <MessageSquare className="w-10 h-10" />
                          </div>
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-sm font-bold text-blue-600 bg-white px-3 py-1 rounded-full shadow-lg">
                              Our Platform
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Stakeholders positioned professionally */}
                      {stakeholders.map((stakeholder, index) => {
                        const positions = {
                          top: "absolute top-0 left-1/2 transform -translate-x-1/2",
                          left: "absolute top-1/2 left-0 transform -translate-y-1/2",
                          right: "absolute top-1/2 right-0 transform -translate-y-1/2"
                        };

                        return (
                          <div key={stakeholder.id} className={positions[stakeholder.position as keyof typeof positions]}>
                            <div className="flex flex-col items-center space-y-3">
                              <div className={`w-20 h-20 bg-gradient-to-r ${stakeholder.color} rounded-xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300`}>
                                {stakeholder.icon}
                              </div>
                              <div className="text-center">
                                <h5 className="font-bold text-gray-900 text-sm">{stakeholder.title}</h5>
                                <p className="text-xs text-blue-600 font-medium">{stakeholder.nepali}</p>
                              </div>
                              
                              {/* Feature Pills */}
                              <div className="flex flex-col space-y-1 min-w-0">
                                {stakeholder.features.map((feature, idx) => (
                                  <div key={idx} className="bg-white px-2 py-1 rounded-full text-xs text-gray-600 shadow-sm border text-center whitespace-nowrap">
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Animated Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                        {/* Students to Center */}
                        <line 
                          x1="50%" y1="20%" 
                          x2="50%" y2="45%" 
                          stroke="url(#gradient1)" 
                          strokeWidth="3" 
                          strokeDasharray="8,4"
                          className="animate-pulse"
                        />
                        <ArrowRight className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 text-green-500 w-4 h-4" style={{ zIndex: 15 }} />
                        
                        {/* Teachers to Center */}
                        <line 
                          x1="20%" y1="50%" 
                          x2="45%" y2="50%" 
                          stroke="url(#gradient2)" 
                          strokeWidth="3" 
                          strokeDasharray="8,4"
                          className="animate-pulse"
                          style={{ animationDelay: '0.5s' }}
                        />
                        
                        {/* Parents to Center */}
                        <line 
                          x1="80%" y1="50%" 
                          x2="55%" y2="50%" 
                          stroke="url(#gradient3)" 
                          strokeWidth="3" 
                          strokeDasharray="8,4"
                          className="animate-pulse"
                          style={{ animationDelay: '1s' }}
                        />

                        {/* Gradient Definitions */}
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" />
                            <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Communication Performance Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-green-600 mb-3">
                          <CheckCircle className="w-5 h-5" />
                          <span className="text-3xl font-bold">100%</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">Message Delivery</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-blue-600 mb-3">
                          <Clock className="w-5 h-5" />
                          <span className="text-3xl font-bold">&lt;3s</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">Response Time</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-purple-600 mb-3">
                          <Star className="w-5 h-5" />
                          <span className="text-3xl font-bold">24/7</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">Availability</p>
                      </div>
                    </div>

                    {/* Gap Analysis */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-3 text-center">Gap We Bridge</h5>
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-600">Traditional communication barriers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-600">Delayed information sharing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-600">Real-time collaboration platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center scroll-animate">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <CardContent className="p-12 relative">
                <h3 className="text-3xl font-bold mb-4">
                  Bridge the Communication Gap Today
                </h3>
                <p className="text-xl mb-8 opacity-90">
                  सबै सरोकारवालाहरू बीच प्रभावकारी संचार स्थापना गर्नुहोस्। Unite your educational community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-10 py-4 shadow-xl">
                    Start Connecting Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg px-10 py-4">
                    View Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
