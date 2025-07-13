import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const dataPoints = [
    {
      icon: Users,
      title: "User Demographics",
      description: "Age, location, interests, and behavioral patterns"
    },
    {
      icon: TrendingUp,
      title: "Engagement Metrics",
      description: "Click-through rates, session duration, and conversion data"
    },
    {
      icon: CheckCircle,
      title: "Real-time Activity",
      description: "Live user actions, preferences, and interaction events"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant access to user insights with sub-100ms response times and real-time data processing."
    },
    {
      icon: Database,
      title: "Rich Data Points",
      description: "Access comprehensive user profiles with 50+ data attributes including demographics and behavior."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and GDPR compliance ensure your data stays secure and compliant."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            User Analytics API
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Unlock powerful insights about your users with our comprehensive analytics endpoint. 
            Get real-time data, demographics, and behavioral patterns in a single API call.
          </p>
        </div>

        {/* Data Points Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {dataPoints.map((point, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-elegant transition-all duration-300">
                <point.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <benefit.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Case Section */}
        <div className="text-center mb-12 p-8 bg-accent/50 rounded-lg border border-border">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            <strong>Perfect for:</strong> E-commerce platforms, SaaS applications, and marketing teams 
            who need comprehensive user insights to drive personalization, improve conversion rates, 
            and deliver exceptional user experiences.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.open('#', '_blank')}
          >
            Explore API Reference
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            View detailed documentation, code examples, and authentication details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
