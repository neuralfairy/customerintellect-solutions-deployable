import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MessageSquare, TrendingUp, Target, Users, BarChart3, Settings, Zap, Shield } from "lucide-react";
import featuresImage from "@/assets/features-illustration.jpg";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreFeatures = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Message Optimization",
      description: "AI-powered message crafting that resonates with your target audience and drives conversions.",
      features: ["A/B testing capabilities", "Message performance analytics", "Audience-specific customization", "Real-time optimization"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Conversion Analytics",
      description: "Comprehensive tracking and analysis of message performance with actionable insights.",
      features: ["Real-time conversion tracking", "ROI measurement", "Performance benchmarking", "Custom reporting dashboards"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "A/B Testing Suite",
      description: "Advanced testing framework to optimize every aspect of your messaging strategy.",
      features: ["Multi-variant testing", "Statistical significance tracking", "Automated winner selection", "Test result documentation"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Audience Segmentation",
      description: "Deliver personalized messages to different customer segments for maximum impact.",
      features: ["Dynamic segmentation", "Behavioral targeting", "Custom audience creation", "Segment performance analysis"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Performance Dashboard",
      description: "Comprehensive overview of your messaging strategy performance and key metrics.",
      features: ["Executive-level reporting", "KPI tracking", "Trend analysis", "Custom metric creation"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing sales and marketing tools.",
      features: ["Salesforce integration", "HubSpot connectivity", "API access", "Custom integrations available"]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "AI-Powered Recommendations",
      description: "Get intelligent suggestions for improving your messaging based on industry best practices and performance data."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR compliance and SOC 2 certification for peace of mind."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Team Collaboration",
      description: "Built-in collaboration tools for teams to work together on messaging strategies and campaigns."
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
                  Platform Features
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Powerful <span className="text-orange-400">Messaging Tools</span> for B2B Success
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Discover our comprehensive suite of messaging strategy tools designed to help B2B sales teams and agencies achieve measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=customerintellect.com&utm_medium=features&utm_campaign=partner_network">
                    View Interactive Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                  <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=features&utm_campaign=partner_network">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right animation-delay-400' : 'opacity-0'}`}>
              <img 
                src={featuresImage} 
                alt="Messaging Strategy Features" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Core <span className="text-gradient">Platform Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to optimize your messaging strategy and drive measurable B2B sales results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-hover ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Advanced <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Take your messaging strategy to the next level with our advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-hover text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Seamless <span className="text-gradient">Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified messaging strategy experience.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold">Salesforce</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">HubSpot</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Pipedrive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Slack</div>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" asChild>
                <a href="https://salescentri.com/solutions/psa-suite/integrations?utm_source=customerintellect.com&utm_medium=features&utm_campaign=partner_network">
                  View All Integrations
                  <ArrowRight className="ml-2 h-5 w-5" />
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
            Ready to Experience These Features?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            See how our messaging strategy platform can transform your B2B sales results. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <a href="https://salescentri.com/get-started/book-demo?utm_source=customerintellect.com&utm_medium=features_cta&utm_campaign=partner_network">
                Book Live Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <a href="https://salescentri.com/get-started/free-trial?utm_source=customerintellect.com&utm_medium=features_cta&utm_campaign=partner_network">
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

export default Features;