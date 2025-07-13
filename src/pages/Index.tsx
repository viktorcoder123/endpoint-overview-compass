import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const dataPoints = [
    "Name", "IMO", "MMSI", "Country", "Ship Type", "Type Specific", "Flag", "Year of Build",
    "Length Overall", "Length BP", "Beam", "Draught", "Depth", "Builder", "Place of Build",
    "Hull", "Material", "Engine Builder", "Gross Tonnage", "Net Tonnage", "Deadweight",
    "TEU", "Crude Oil", "Gas", "Grain", "Bale", "Ballast Water", "Fresh Water"
  ];

  const benefits = [
    {
      icon: Database,
      title: "Accurate Classification",
      description: "Get key vessel details like dimensions, build year, and type for accurate classification and tracking."
    },
    {
      icon: Shield,
      title: "Port Compatibility",
      description: "Ensure vessel compatibility with port restrictions and cargo needs for smoother operations."
    },
    {
      icon: CheckCircle,
      title: "Risk Assessment",
      description: "Assess vessel suitability and compliance to reduce operational and regulatory risks."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Vessel Particulars
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Real-time access to comprehensive vessel particular data
          </p>
        </div>

        {/* Available Data Points Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Available Data Points
          </h2>
          <div className="bg-card border border-border rounded-lg p-6">
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
            Why choose our Vessel Particulars API?
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
            Enable smarter, compliant, and more efficient maritime operations with accurate, real-time access to comprehensive vessel particulars.
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
            Access detailed vessel particulars documentation and implementation guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
