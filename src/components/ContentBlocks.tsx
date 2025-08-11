import { MessageSquare, Video, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import bibleLight from "@/assets/bible-light.jpg";

const ContentBlocks = () => {
  const blocks = [
    {
      title: "Messages",
      icon: MessageSquare,
      description: "Listen to inspiring sermons and teachings",
      link: "/messages",
      color: "bg-gradient-divine"
    },
    {
      title: "Videos",
      icon: Video,
      description: "Watch our latest worship services and events",
      link: "/videos",
      color: "bg-gradient-golden"
    },
    {
      title: "Memories",
      icon: Heart,
      description: "Cherished moments from our church family",
      link: "/memories",
      color: "bg-gradient-light"
    },
    {
      title: "Cover Pages",
      icon: BookOpen,
      description: "Explore our bulletins and newsletters",
      link: "/covers",
      color: "bg-gradient-divine"
    }
  ];

  return (
    <div className="py-16 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-divine-blue mb-4">
            Explore Our Ministry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the many ways we serve God and our community together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, index) => (
            <Link key={block.title} to={block.link}>
              <Card className="group hover:shadow-divine transition-all duration-300 transform hover:scale-[1.02] h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className={`${block.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:shadow-golden transition-all duration-300`}>
                      <block.icon className="w-8 h-8 text-sacred-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-divine-blue mb-2">
                      {block.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {block.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Scripture Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-divine">
            <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${bibleLight})` }}
              />
              <div className="p-8 bg-sacred-white flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-divine-blue mb-4">
                    Weekly Scripture
                  </h3>
                  <blockquote className="text-lg text-muted-foreground italic mb-4">
                    "For where two or three gather in my name, there am I with them."
                  </blockquote>
                  <p className="text-divine-blue font-semibold">Matthew 18:20</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentBlocks;