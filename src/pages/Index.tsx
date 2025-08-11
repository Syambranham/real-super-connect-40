import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ContentBlocks from "@/components/ContentBlocks";
import churchInterior from "@/assets/church-interior.jpg";
import churchCommunity from "@/assets/church-community.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Carousel />
      </section>

      {/* Content Blocks */}
      <ContentBlocks />

      {/* Church Images Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-divine-blue mb-4">
              Our Church Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the warmth and fellowship of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <Card className="overflow-hidden hover:shadow-divine transition-all duration-300">
                <div className="relative">
                  <img src={churchInterior} alt="Church Interior" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-divine-blue/20 group-hover:bg-divine-blue/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-divine-blue mb-2">Our church</h3>
                  <p className="text-muted-foreground">
                    A peaceful place for worship, prayer, and spiritual growth where God's presence is felt.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="overflow-hidden hover:shadow-divine transition-all duration-300">
                <div className="relative">
                  <img src={churchCommunity} alt="Church Community" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-divine-blue/20 group-hover:bg-divine-blue/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-divine-blue mb-2">
                    Fellowship & Community
                  </h3>
                  <p className="text-muted-foreground">
                    Building lasting relationships and growing together in faith through fellowship and shared experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-divine-blue mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to welcome you to our church family
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-sacred-white shadow-divine">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-divine-blue mb-6">
                    Church Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-golden-light mt-1" />
                      <div>
                        <p className="font-medium text-divine-blue">Location</p>
                        <p className="text-muted-foreground">
                          T.Narsapuram, Andhra Pradesh, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-golden-light mt-1" />
                      <div>
                        <p className="font-medium text-divine-blue">Service Times</p>
                        <p className="text-muted-foreground">
                          Sunday: 10:00 AM - 12:00 PM<br />
                          Wednesday: 7:00 PM - 8:30 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-golden-light mt-1" />
                      <div>
                        <p className="font-medium text-divine-blue">Phone</p>
                        <p className="text-muted-foreground">+91 9393831167</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-golden-light mt-1" />
                      <div>
                        <p className="font-medium text-divine-blue">Email</p>
                        <p className="text-muted-foreground">therealsuperchurch@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-divine-blue mb-4">
                    Join Us This Sunday
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Experience worship, fellowship, and God's love in our welcoming community. All are welcome!
                  </p>
                  <Button variant="divine" size="lg">
                    Plan Your Visit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>;
};
export default Index;