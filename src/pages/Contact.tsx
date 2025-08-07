import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactOptions = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Book a Demo",
      description: "Schedule a personalized demo to see our messaging strategy platform in action.",
      cta: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions from our messaging strategy experts.",
      cta: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Sales Inquiry",
      description: "Speak directly with our sales team about your messaging strategy needs.",
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network"
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Support Request",
      description: "Need help with your account or have technical questions? We're here to help.",
      cta: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network"
    }
  ];

  const officeInfo = {
    address: "123 Business District\nAlbany, NY 12207",
    phone: "(518) 555-0123",
    email: "info@customerintellect.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className={`space-y-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let's Transform Your <span className="text-orange-400">Messaging Strategy</span> Together
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Ready to boost your B2B sales conversions? Our messaging strategy experts are here to help. 
              Choose the best way to connect with us below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Choose Your <span className="text-gradient">Preferred Contact Method</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here to answer your questions and help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`card-hover text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href={option.link}>
                      {option.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Visit Our <span className="text-gradient">Albany Office</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Located in the heart of Albany's business district, our team is ready to meet with you 
                  to discuss your messaging strategy needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{officeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">{officeInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">{officeInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">{officeInfo.hours}</p>
                  </div>
                </div>
              </div>

              <Button size="lg" asChild>
                <a href="https://salescentri.com/get-started/calendly?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network">
                  Schedule In-Person Meeting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="bg-slate-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <div className="text-lg font-semibold">Interactive Map</div>
                <div className="text-sm">Albany Business District</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiries */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Partnership <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in becoming a partner? We work with agencies, consultants, and technology providers 
              to deliver exceptional messaging strategy solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Agency Partners</CardTitle>
                  <CardDescription>
                    White-label our messaging strategy platform for your clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Technology Integrations</CardTitle>
                  <CardDescription>
                    Integrate your platform with our messaging optimization tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/contact/partnerships/integration-requests?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network">
                      Explore Integration
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Affiliate Program</CardTitle>
                  <CardDescription>
                    Earn commissions by referring clients to our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href="https://salescentri.com/company/partners-affiliates?utm_source=customerintellect.com&utm_medium=contact&utm_campaign=partner_network">
                      Join Program
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Our Response <span className="text-gradient">Commitment</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">&lt; 1 Hour</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-muted-foreground">Support Availability</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-500">99%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-slate-900 to-orange-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Don't wait to transform your messaging strategy. Book a free demo today and see 
            how we can help boost your B2B sales conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=contact_cta&utm_campaign=partner_network">
                Book Free Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=contact_cta&utm_campaign=partner_network">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;