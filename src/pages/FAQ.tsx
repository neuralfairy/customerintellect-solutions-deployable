import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "What is messaging strategy and why is it important?",
      answer: "Messaging strategy is the systematic approach to crafting and delivering communications that resonate with your target audience. It's crucial for B2B success because it directly impacts conversion rates, sales cycle length, and customer acquisition costs."
    },
    {
      question: "How quickly can I see results from messaging optimization?",
      answer: "Most clients see measurable improvements within 30-60 days. Our average client experiences a 40% increase in conversion rates within the first quarter of implementation."
    },
    {
      question: "Do you work with specific industries?",
      answer: "We specialize in B2B companies across all industries, with particular expertise in SaaS, professional services, manufacturing, and healthcare. Our strategies are customized to your specific market and audience."
    },
    {
      question: "What's included in your messaging strategy service?",
      answer: "Our comprehensive service includes audience analysis, message framework development, A/B testing, performance analytics, CRM integration, and ongoing optimization based on results."
    },
    {
      question: "How do you measure messaging strategy success?",
      answer: "We track key metrics including conversion rates, lead quality scores, sales cycle length, customer acquisition cost, and ROI. All metrics are available in real-time through our analytics dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your <span className="text-orange-400">Questions</span> Answered
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Get answers to common questions about messaging strategy optimization and our services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;