import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

const ManagementData = () => {
  const dataPoints = [
    "Name", "IMO", "MMSI", "Registered Owner", "Manager", "ISM Manager",
    "P&I Club", "Classification Society"
  ];

  const benefits = [
    {
      icon: Database,
      title: "Accurate Records",
      description: "Accurate, verified management and ownership records for commercial vessels worldwide."
    },
    {
      icon: TrendingUp,
      title: "Up-to-date Information",
      description: "Frequent data updates to keep your systems and records up to date."
    },
    {
      icon: CheckCircle,
      title: "360° View",
      description: "Combine with our other data modules for a full 360° view of any vessel's operational, technical, and ownership profile."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
            Management Data
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Detailed and up-to-date information on vessel ownership and management structures
          </p>
        </div>

        {/* Available Data Points Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Available Data Points
          </h2>
          <div className="bg-card border-2 border-primary rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dataPoints.map((point, index) => (
                <div key={index} className="p-3 bg-accent/30 rounded-lg border border-border/50 hover:bg-accent/50 transition-all duration-300">
                  <p className="text-sm font-medium text-foreground text-center">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Why choose our Management Data API?
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
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto italic">
            Empower your chartering, compliance, risk management, and operational workflows with reliable vessel management data.
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
            Link to correct section in API Reference
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Access detailed management data documentation and implementation guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementData;