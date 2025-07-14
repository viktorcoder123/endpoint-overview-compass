import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, Users, FileText } from "lucide-react";

const PortReport = () => {
  const dataPoints = [
    "Name", "IMO", "MMSI", "Reach out to use for sample report data"
  ];

  const benefits = [
    {
      icon: FileText,
      title: "Port Access Information",
      description: "Identify port access limitations, draught restrictions, and berth capacities before arrival to reduce operational delays."
    },
    {
      icon: Shield,
      title: "Operational Support",
      description: "Support chartering, voyage optimization, and risk management decisions with consistent, structured port infrastructure data."
    },
    {
      icon: CheckCircle,
      title: "Time & Effort Savings",
      description: "Extract report of numerous ports in order to save you time and effort"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
            Port Report
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get information about any port globally. Reach out to us by email or in Contact Us for more information
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
            Why choose our Port Report API?
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
            Plan safer, faster, and more efficient voyages with access to reliable port infrastructure data.
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
            Link to contact us section
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Contact us for port report information and implementation guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortReport;