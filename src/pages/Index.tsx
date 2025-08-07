import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, Users, MessageSquare, Target, Star, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-messaging.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Message Optimization",
      description: "Craft compelling messages that resonate with your target audience and drive conversions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Conversion Analytics",
      description: "Track and analyze message performance with detailed metrics and actionable insights."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "A/B Testing",
      description: "Test different messaging strategies to find what works best for your audience."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Audience Segmentation",
      description: "Deliver personalized messages to different customer segments for maximum impact."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      content: "CustomerIntellect transformed our messaging strategy. We saw a 40% increase in qualified leads within 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "InnovateCorp",
      content: "The messaging optimization tools helped us achieve our highest conversion rates ever. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "Growth Partners",
      content: "Professional team, outstanding results. Our sales team's confidence has significantly improved.",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Clients Served" },
    { number: "40%", label: "Average Conversion Increase" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "2M+", label: "Messages Optimized" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Messaging Strategy Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-custom py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  #1 Messaging Strategy Consultancy
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Your <span className="text-orange-400">B2B Sales</span> with Proven Messaging Strategies
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Boost conversions by up to 40% with our expert messaging optimization. We help sales teams and agencies craft high-converting messages that resonate with their target audience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=hero&utm_campaign=partner_network">
                    Book Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=hero&utm_campaign=partner_network">
                    Start Free Trial
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">See Results in 30 Days</CardTitle>
                  <CardDescription className="text-white/80">
                    Join hundreds of B2B companies already seeing measurable results
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Conversion Rate Increase</span>
                    <span className="text-orange-400 font-bold">+40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Lead Quality Improvement</span>
                    <span className="text-orange-400 font-bold">+65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sales Cycle Reduction</span>
                    <span className="text-orange-400 font-bold">-25%</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=customerintellect.com&utm_medium=hero_card&utm_campaign=partner_network">
                      View Interactive Demo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`space-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
              Core Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need for <span className="text-gradient">Messaging Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and expertise you need to optimize your messaging strategy and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/features">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their messaging strategy transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold">Trusted & Secure</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8" />
                <span className="font-semibold">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-orange-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Transform Your Messaging Strategy?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of B2B companies already seeing measurable results. Start your free trial today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=cta&utm_campaign=partner_network">
                Book Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg" asChild>
              <a href="https://salescentri.com/pricing?utm_source=customerintellect.com&utm_medium=cta&utm_campaign=partner_network">
                View Pricing
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;