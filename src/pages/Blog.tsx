import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Messaging Strategies That Convert B2B Prospects",
      excerpt: "Discover proven messaging techniques that top-performing sales teams use to boost conversion rates.",
      date: "March 15, 2024",
      category: "Strategy"
    },
    {
      title: "The Psychology Behind High-Converting Sales Messages",
      excerpt: "Understanding buyer psychology can transform your messaging effectiveness and drive better results.",
      date: "March 10, 2024",
      category: "Psychology"
    },
    {
      title: "How to A/B Test Your Messaging for Maximum Impact",
      excerpt: "A comprehensive guide to testing and optimizing your sales messages for better performance.",
      date: "March 5, 2024",
      category: "Testing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              Thought Leadership
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Messaging Strategy <span className="text-orange-400">Insights</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Expert insights, strategies, and tips for optimizing your B2B messaging and driving better sales results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <Badge variant="secondary">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=customerintellect.com&utm_medium=blog&utm_campaign=partner_network">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
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

export default Blog;