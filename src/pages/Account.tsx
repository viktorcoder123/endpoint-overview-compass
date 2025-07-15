import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, CreditCard, Key, Search, Play } from "lucide-react";

const Account = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const endpoints = [
    { value: "vessel-location", label: "Vessel Location" },
    { value: "engine-data", label: "Engine Data" },
    { value: "management-data", label: "Management Data" },
    { value: "inspection-data", label: "Inspection Data" },
    { value: "port-calls-by-vessel", label: "Port Calls by Vessel" },
    { value: "port-calls-by-port", label: "Port Calls by Port" },
    { value: "weather", label: "Weather" },
    { value: "port-report", label: "Port Report" },
    { value: "vessels-by-area", label: "Vessels by Area" }
  ];

  const handleApiTest = async () => {
    if (!selectedEndpoint || !searchValue) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        status: "success",
        endpoint: selectedEndpoint,
        query: searchValue,
        data: {
          name: "Example Vessel",
          imo: searchValue,
          mmsi: "123456789",
          position: { lat: 59.3293, lng: 18.0686 },
          lastUpdate: new Date().toISOString()
        }
      };
      setApiResponse(JSON.stringify(mockResponse, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Account Dashboard</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Credits */}
          <div className="space-y-6">
            {/* Profile Section */}
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <User className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Viktor Alexander Svensson</h3>
                    <p className="text-muted-foreground">No company</p>
                  </div>
                  <Button variant="outline" size="sm">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            {/* Credits Section */}
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <CreditCard className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">12225</div>
                    <p className="text-sm text-muted-foreground">Credits</p>
                  </div>
                  <Button className="w-full">BUY CREDITS</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tariff Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your tariff</p>
                  <div className="text-xl font-semibold text-primary">FREE PLAN</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - API Keys & Testing */}
          <div className="lg:col-span-2 space-y-6">
            {/* API Keys Section */}
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <Key className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">My Keys</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex gap-2 mt-2">
                      <Input 
                        id="api-key"
                        value="1d7408d57613f00f627ab170e0d01d18"
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button variant="outline">UPDATE KEY</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Testing Section */}
            <Card>
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <Search className="h-5 w-5 text-primary mr-2" />
                <CardTitle className="text-lg">API Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div>
                      <Label htmlFor="search">IMO/MMSI</Label>
                      <Input
                        id="search"
                        placeholder="Enter IMO or MMSI..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleApiTest}
                    disabled={!selectedEndpoint || !searchValue || isLoading}
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

            {/* History Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">History of Previous Requests</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;