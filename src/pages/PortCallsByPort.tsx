import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Shield, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

const PortCallsByPort = () => {
  const dataPoints = [
    "Port Name", "UN/LOCODE", "ETA by AIS", "IMO", "MMSI", "Vessel Name", 
    "Dist./Time to go", "Expected/Arrival/departure/In Port", "Arrival Information", 
    "Departure Information", "Time in port", "Last Port", "Arrival (LT)", 
    "Last port", "Departure (LT)", "Current Destination", "Last Report (In Port)", 
    "Built", "Gross Tonnage", "Deadweight", "Size (m)"
  ];

  const benefits = [
    {
      icon: Database,
      title: "Port Activity Analysis",
      description: "Analyze arrival, departure, in-port and expected arrivals for a specific port"
    },
    {
      icon: TrendingUp,
      title: "Port Efficiency Monitoring",
      description: "Monitor vessel idle times and port congestion trends with near real-time relevance."
    },
    {
      icon: CheckCircle,
      title: "Performance Analytics",
      description: "Analyze port efficiency, vessel turnaround performance over the recent month, and type of vessel activity"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
            Port Calls (Historical & Expected) by Port
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Access detailed port activity data from the past 30 days, such as Arrivals, Departures, In-Port and Expected Arrivals
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
            Why choose our Port Calls by Port API?
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
            Analyze detailed vessel activity across every port call — from arrival to departure to in-port and expected arrivals— with actionable insights covering the last 30 days.
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
            Access detailed port calls by port documentation and implementation guide
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortCallsByPort;