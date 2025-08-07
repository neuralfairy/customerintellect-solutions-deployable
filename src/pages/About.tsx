import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      expertise: "15+ years in B2B sales strategy",
      description: "Former VP of Sales at Fortune 500 companies, specializing in messaging optimization and conversion strategy."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Strategy Officer",
      expertise: "Marketing automation expert",
      description: "Led messaging strategy for 200+ B2B companies, achieving average 40% conversion increases."
    },
    {
      name: "Emily Chen",
      role: "Head of Client Success",
      expertise: "Customer experience optimization",
      description: "Ensures every client achieves measurable results through personalized messaging strategies."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description: "Your success is our success. We partner with you every step of the way."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of industry trends to provide cutting-edge messaging solutions."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="space-y-4">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  About CustomerIntellect
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transforming <span className="text-orange-400">B2B Sales</span> Through Strategic Messaging
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Founded in Albany, NY, CustomerIntellect Solutions has been helping B2B sales teams and agencies optimize their messaging strategies for over a decade. We've transformed the sales performance of 150+ companies worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=about&utm_campaign=partner_network">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                  <a href="https://salescentri.com/company/about-us?utm_source=customerintellect.com&utm_medium=about&utm_campaign=partner_network">
                    Our Story
                  </a>
                </Button>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    To empower B2B sales teams with messaging strategies that convert prospects into customers, 
                    driving sustainable growth and measurable ROI for businesses of all sizes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">150+</div>
                      <div className="text-sm text-white/80">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">10+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Story</span>
            </h2>
            <div className="text-lg text-muted-foreground space-y-6">
              <p>
                CustomerIntellect Solutions was born from a simple observation: most B2B companies struggle with 
                messaging that truly resonates with their target audience. Founded in 2014 in Albany, NY, we set 
                out to change that.
              </p>
              <p>
                Our founders, with combined decades of experience in B2B sales and marketing, recognized that 
                successful messaging isn't just about what you say—it's about how you say it, when you say it, 
                and to whom you say it.
              </p>
              <p>
                Today, we've helped over 150 companies transform their sales performance through strategic 
                messaging optimization, achieving an average 40% increase in conversion rates for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry veterans with a passion for driving measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className={`card-hover text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                  <Badge variant="secondary" className="mx-auto">
                    {member.expertise}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/company/about-us/leadership-team?utm_source=customerintellect.com&utm_medium=about&utm_campaign=partner_network">
                View Full Leadership Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`card-hover text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Trusted & <span className="text-gradient">Certified</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We maintain the highest industry standards and certifications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">SOC 2 Certified</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">GDPR Compliant</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">ISO 27001</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <div className="font-semibold">HubSpot Partner</div>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild>
                <a href="https://salescentri.com/trust/compliance-certifications?utm_source=customerintellect.com&utm_medium=about&utm_campaign=partner_network">
                  View All Certifications
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-orange-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Work with the Experts?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the 150+ companies that trust CustomerIntellect with their messaging strategy. 
            Let's achieve measurable results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=about_cta&utm_campaign=partner_network">
                Schedule Consultation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <a href="https://salescentri.com/company/careers?utm_source=customerintellect.com&utm_medium=about_cta&utm_campaign=partner_network">
                Join Our Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;