
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  GraduationCap, 
  Search, 
  ArrowRight, 
  Book, 
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDegreePrograms } from "@/data/mockData";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const featuredDegrees = mockDegreePrograms.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/30 py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4">
                Smart Course Planning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Chart Your Academic Path with AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                PathwayAI helps you navigate your academic journey by recommending personalized courses aligned with your career goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate("/explore")}>
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.scrollTo({top: document.getElementById('features')?.offsetTop, behavior: 'smooth'})}>
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl p-8 relative">
                  <div className="grid grid-cols-2 gap-4">
                    {featuredDegrees.map((degree, index) => (
                      <Card key={degree.id} className={`shadow-lg ${index === 2 ? "col-span-2" : ""}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            {degree.name}
                          </CardTitle>
                          <CardDescription>{degree.credits} credits</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-4">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How PathwayAI Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform takes the guesswork out of course selection, helping you make informed decisions aligned with your career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Choose Your Degree</CardTitle>
                <CardDescription>Select from a wide range of undergraduate and graduate degree programs.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Whether you're pursuing Computer Science, Data Science, Information Systems, or other programs, we've got your academic path covered.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Define Career Goals</CardTitle>
                <CardDescription>Tell us your desired profession and career aspirations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your career goals and identifies the most relevant skills and knowledge areas needed for success in your chosen field.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                  <Book className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Get Course Recommendations</CardTitle>
                <CardDescription>Receive personalized course suggestions based on your inputs.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our algorithm considers course availability, historical enrollment patterns, and your academic progress to provide tailored recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigate("/explore")}>
              Start Planning Your Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Academic Pathway?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have used PathwayAI to navigate their academic journey and align their coursework with their career aspirations.
            </p>
            <Button size="lg" onClick={() => navigate("/explore")}>
              Explore Courses Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="h-5 w-5 text-primary mr-2" />
              <span className="font-semibold">PathwayAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PathwayAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
