import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { User, CreditCard, Key, Search, Play } from "lucide-react";

const Account = () => {
  const [selectedSection, setSelectedSection] = useState("history");
  const [selectedEndpoint, setSelectedEndpoint] = useState("");
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");
  const [param3, setParam3] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [portCallType, setPortCallType] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const endpoints = [
    { value: "vessel-particulars", label: "Vessel Particulars" },
    { value: "vessel-location", label: "Vessel Location" },
    { value: "engine-data", label: "Engine Data" },
    { value: "management-data", label: "Management Data" },
    { value: "inspection-data", label: "MOU / Inspection" },
    { value: "port-particulars", label: "Port Particulars" },
    { value: "port-calls-by-vessel", label: "Port Calls by Vessel" },
    { value: "port-calls-by-port", label: "Port Calls by Port" },
    { value: "weather", label: "Weather" },
    { value: "vessels-by-area", label: "Vessels by Area" }
  ];

  const getParameterConfig = () => {
    switch(selectedEndpoint) {
      case "vessel-particulars":
      case "vessel-location":
      case "engine-data":
      case "management-data":
      case "inspection-data":
        return {
          param1: { label: "IMO or MMSI", placeholder: "Enter IMO or MMSI..." },
          showParam2: false,
          showParam3: false
        };
      case "port-particulars":
        return {
          param1: { label: "Port Info", placeholder: "Reach out to us for more info on how to obtain" },
          showParam2: false,
          showParam3: false,
          disabled: true
        };
      case "port-calls-by-vessel":
        return {
          param1: { label: "IMO or MMSI", placeholder: "Enter IMO or MMSI..." },
          showParam2: true,
          param2Label: "Date Range (Optional)",
          showParam3: false
        };
      case "port-calls-by-port":
        return {
          param1: { label: "UN/LOCODE or Port Name", placeholder: "Enter UN/LOCODE or fuzzy name..." },
          showParam2: true,
          param2Label: "Date Range (Optional)",
          showParam3: true,
          param3Label: "Call Type (Optional)"
        };
      case "weather":
        return {
          param1: { label: "Location", placeholder: "Enter location..." },
          showParam2: false,
          showParam3: false
        };
      case "vessels-by-area":
        return {
          param1: { label: "Coordinates", placeholder: "Enter latitude, longitude..." },
          showParam2: true,
          param2Label: "Radius",
          param2Placeholder: "Enter radius in km...",
          showParam3: false
        };
      default:
        return {
          param1: { label: "Parameter 1", placeholder: "Select an endpoint first..." },
          showParam2: false,
          showParam3: false,
          disabled: true
        };
    }
  };

  const handleApiTest = async () => {
    if (!selectedEndpoint || !param1) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        status: "success",
        endpoint: selectedEndpoint,
        parameters: {
          param1: param1,
          param2: param2 || undefined,
          param3: param3 || undefined,
          fromDate: fromDate || undefined,
          toDate: toDate || undefined,
          portCallType: portCallType || undefined
        },
        data: {
          name: "Example Vessel",
          imo: param1,
          mmsi: "123456789",
          position: { lat: 59.3293, lng: 18.0686 },
          lastUpdate: new Date().toISOString()
        }
      };
      setApiResponse(JSON.stringify(mockResponse, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const config = getParameterConfig();

  const menuItems = [
    { id: "history", label: "History of previous requests", icon: Search },
    { id: "keys", label: "My keys", icon: Key },
    { id: "testing", label: "API Testing", icon: Play }
  ];

  const renderContent = () => {
    switch(selectedSection) {
      case "history":
        return (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">History of previous requests</h2>
            <div className="space-y-2">
              <div className="p-3 bg-accent/20 rounded border text-sm font-mono">
                GET /vessel-location?imo=9123456
              </div>
              <div className="p-3 bg-accent/20 rounded border text-sm font-mono">
                GET /engine-data?mmsi=123456789
              </div>
              <div className="p-3 bg-accent/20 rounded border text-sm font-mono">
                GET /management-data?imo=9876543
              </div>
            </div>
          </div>
        );
      case "keys":
        return (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">My keys</h2>
            <div className="flex gap-2">
              <Input 
                value="1d7408d57613f00f627ab170e0d01d18"
                readOnly
                className="font-mono text-sm bg-accent/20"
              />
              <Button className="bg-primary text-white hover:bg-primary/90">UPDATE KEY</Button>
            </div>
          </div>
        );
      case "testing":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center space-y-0 pb-4">
              <Search className="h-5 w-5 text-primary mr-2" />
              <CardTitle className="text-lg">API Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Endpoint Selection */}
                <div>
                  <Label htmlFor="endpoint">Select Endpoint</Label>
                  <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose an endpoint..." />
                    </SelectTrigger>
                    <SelectContent>
                      {endpoints.map((endpoint) => (
                        <SelectItem key={endpoint.value} value={endpoint.value}>
                          {endpoint.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Dynamic Parameters */}
                {selectedEndpoint && (
                  <div className="space-y-4">
                    {/* Parameter 1 */}
                    <div>
                      <Label htmlFor="param1">{config.param1.label}</Label>
                      <Input
                        id="param1"
                        placeholder={config.param1.placeholder}
                        value={param1}
                        onChange={(e) => setParam1(e.target.value)}
                        disabled={config.disabled}
                        className="mt-2"
                      />
                    </div>

                    {/* Parameter 2 (for port calls by vessel, port calls by port, vessels by area) */}
                    {config.showParam2 && (
                      <div className="space-y-2">
                        {selectedEndpoint === "port-calls-by-vessel" || selectedEndpoint === "port-calls-by-port" ? (
                          <>
                            <Label>{config.param2Label}</Label>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <Label htmlFor="from-date" className="text-sm">From Date</Label>
                                <Input
                                  id="from-date"
                                  type="date"
                                  value={fromDate}
                                  onChange={(e) => setFromDate(e.target.value)}
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="to-date" className="text-sm">To Date</Label>
                                <Input
                                  id="to-date"
                                  type="date"
                                  value={toDate}
                                  onChange={(e) => setToDate(e.target.value)}
                                  className="mt-1"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <Label htmlFor="param2">{config.param2Label}</Label>
                            <Input
                              id="param2"
                              placeholder={config.param2Placeholder || "Enter value..."}
                              value={param2}
                              onChange={(e) => setParam2(e.target.value)}
                              className="mt-2"
                            />
                          </>
                        )}
                      </div>
                    )}

                    {/* Parameter 3 (for port calls by port) */}
                    {config.showParam3 && selectedEndpoint === "port-calls-by-port" && (
                      <div>
                        <Label htmlFor="port-call-type">{config.param3Label}</Label>
                        <Select value={portCallType} onValueChange={setPortCallType}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select call type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="arrivals">Arrivals</SelectItem>
                            <SelectItem value="departures">Departures</SelectItem>
                            <SelectItem value="in-port">In Port</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}
                
                <Button 
                  onClick={handleApiTest}
                  disabled={!selectedEndpoint || !param1 || isLoading || config.disabled}
                  className="w-full"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {isLoading ? "Testing..." : "Test API"}
                </Button>

                {apiResponse && (
                  <div className="mt-4">
                    <Label>API Response</Label>
                    <div className="mt-2 p-4 bg-accent/30 rounded-lg border">
                      <pre className="text-sm overflow-auto max-h-64 text-foreground">
                        {apiResponse}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Menu */}
          <div className="w-60 space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={selectedSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start text-left ${
                  selectedSection === item.id 
                    ? "bg-primary text-white" 
                    : "hover:bg-accent"
                }`}
                onClick={() => setSelectedSection(item.id)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Middle Content */}
          <div className="flex-1">
            {renderContent()}
          </div>

          {/* Right Sidebar - Profile & Account Info */}
          <div className="w-80 space-y-12">
            {/* Profile Section */}
            <div className="border-l-4 border-primary pl-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-primary">Viktor Alexander Svensson</h2>
                  <p className="text-muted-foreground">No company</p>
                </div>
              </div>
            </div>

            {/* Credits Section */}
            <div className="border-l-4 border-primary pl-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div className="text-3xl font-bold text-primary">12225</div>
                  <span className="text-muted-foreground">Credits</span>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  BUY CREDITS
                </Button>
              </div>
            </div>

            {/* Tariff Section */}
            <div className="border-l-4 border-primary pl-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Your tariff</p>
                <div className="text-xl font-bold text-primary">FREE PLAN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;