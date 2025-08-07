import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$297",
      period: "/month",
      description: "Perfect for small sales teams getting started with messaging optimization",
      features: [
        "Up to 5 team members",
        "Basic message optimization",
        "A/B testing (2 variants)",
        "Email support",
        "Performance dashboard",
        "CRM integration (1 platform)"
      ],
      ctaText: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=pricing&utm_campaign=partner_network",
      popular: false
    },
    {
      name: "Professional",
      price: "$597",
      period: "/month",
      description: "Ideal for growing companies with advanced messaging strategy needs",
      features: [
        "Up to 25 team members",
        "Advanced message optimization",
        "Unlimited A/B testing",
        "Priority support",
        "Advanced analytics",
        "Multi-platform CRM integration",
        "Custom reporting",
        "Team collaboration tools"
      ],
      ctaText: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=pricing&utm_campaign=partner_network",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations requiring custom solutions and dedicated support",
      features: [
        "Unlimited team members",
        "Custom messaging strategies",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "24/7 phone support",
        "Training & onboarding"
      ],
      ctaText: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry?utm_source=customerintellect.com&utm_medium=pricing&utm_campaign=partner_network",
      popular: false
    }
  ];

  const faqItems = [
    {
      question: "What's included in the free trial?",
      answer: "The 30-day free trial includes full access to all features in the Professional plan, including advanced message optimization, unlimited A/B testing, and priority support."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
    },
    {
      question: "What CRM platforms do you integrate with?",
      answer: "We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. Custom integrations are available for Enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription cost."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className={`space-y-8 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Choose the Perfect <span className="text-orange-400">Plan</span> for Your Team
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Get started with our 30-day free trial. No setup fees, no hidden costs. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=pricing_hero&utm_campaign=partner_network">
                  Start Free Trial
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=pricing_hero&utm_campaign=partner_network">
                  Book Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative card-hover ${plan.popular ? 'border-orange-500 shadow-xl scale-105' : ''} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="py-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.ctaLink}>
                      {plan.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Calculate Your <span className="text-gradient">ROI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how much you could save and earn with optimized messaging strategies
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Messaging Strategy ROI Calculator</CardTitle>
                <CardDescription>
                  Based on average results from our client base
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">+40%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">-25%</div>
                    <div className="text-sm text-muted-foreground">Sales Cycle Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">+65%</div>
                    <div className="text-sm text-muted-foreground">Lead Quality Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">15x</div>
                    <div className="text-sm text-muted-foreground">Average ROI in 6 months</div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator/recommendations?utm_source=customerintellect.com&utm_medium=pricing&utm_campaign=partner_network">
                    Get Custom ROI Analysis
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry?utm_source=customerintellect.com&utm_medium=pricing&utm_campaign=partner_network">
                Contact Our Sales Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer Martinez",
                  role: "Sales Director",
                  company: "TechForward Inc.",
                  content: "The ROI was immediate. Within 2 months, our conversion rates increased by 35%.",
                  rating: 5
                },
                {
                  name: "David Kim",
                  role: "VP of Marketing",
                  company: "GrowthTech",
                  content: "Best investment we've made. The messaging optimization tools are game-changing.",
                  rating: 5
                },
                {
                  name: "Lisa Thompson",
                  role: "CEO",
                  company: "ScaleUp Solutions",
                  content: "Professional team, incredible results. Highly recommend for any B2B company.",
                  rating: 5
                }
              ].map((review, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <p className="italic mb-4">"{review.content}"</p>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}, {review.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
            Join hundreds of companies already transforming their messaging strategy. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                Start 30-Day Free Trial
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=pricing_cta&utm_campaign=partner_network">
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;