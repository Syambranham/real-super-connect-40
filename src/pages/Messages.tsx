import { useState } from "react";
import { ExternalLink, Calendar, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Messages = () => {
  // Your church's YouTube video data
  const [messages] = useState([
    {
      id: 1,
      title: "దావీదు వలే జయించుడి || Message in Zoom Conference || Dated : 24 July 2025",
      date: "2024-01-28",
      youtubeUrl: "https://youtu.be/z0OUp22uG5E?si=d82r2722Eyy1m82P", // Replace with your video ID
      thumbnail: "https://i.ytimg.com/an_webp/z0OUp22uG5E/mqdefault_6s.webp?du=3000&sqp=CJOFrsQG&rs=AOn4CLDzph-HFcENWXQalIzjaVytWlii9A", // Replace with your video ID
      description: "Join us as we explore the transformative power of faith in our daily lives."
    },
    {
      id: 2,
      title: "దేవునికి ఆహారం సిద్ధం చేసిన మానవుడు || సాధారణమైన వర్తమానములు మా యొద్ద లేవు PART - 2 || 13 July 2025",
      date: "2024-01-21",
      youtubeUrl: "https://youtu.be/W6-rAySRUas?si=oKWGu_o9oQvRsmdw", // Replace with your video ID
      thumbnail: "https://i.ytimg.com/an_webp/W6-rAySRUas/mqdefault_6s.webp?du=3000&sqp=CMKyrsQG&rs=AOn4CLCjADSVef5KSn7P5alYtXJNmiFUwQ", // Replace with your video ID
      description: "Understanding what it truly means to love our neighbors as ourselves."
    },
    {
      id: 3,
      title: "సాధారణమైన వర్తమానములు మా యొద్ద లేవు || Sunday Prayer meeting || Dated : 06 July 2025",
      date: "2024-01-14",
      youtubeUrl: "https://youtu.be/lIQ9TbOGukc?si=QxfgXwXAtw4HI-cY", // Replace with your video ID
      thumbnail: "https://i.ytimg.com/an_webp/lIQ9TbOGukc/mqdefault_6s.webp?du=3000&sqp=CMaarsQG&rs=AOn4CLDdsdSzhoIqshA1uNGmANF5UAKGjQ", // Replace with your video ID
      description: "Discovering how God's grace sustains us through every season of life."
    }
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-light">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-divine-blue mb-4">
            Sunday Messages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our latest sermons and be inspired by God's word every Sunday
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((message) => (
            <Card key={message.id} className="group hover:shadow-divine transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
              <div className="relative">
                <img 
                  src={message.thumbnail} 
                  alt={message.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-divine-blue/20 group-hover:bg-divine-blue/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-divine-blue/80 text-sacred-white px-2 py-1 rounded-full text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(message.date)}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className="bg-sacred-white rounded-lg p-3 flex items-center space-x-3 shadow-lg">
                    <img 
                      src={message.thumbnail} 
                      alt="Video preview"
                      className="w-20 h-14 object-cover rounded border-2 border-divine-blue/20"
                      onError={(e) => {
                        console.log('Thumbnail failed to load:', message.thumbnail);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => console.log('Thumbnail loaded:', message.thumbnail)}
                    />
                    <div className="flex flex-col items-center">
                      <Play className="w-8 h-8 text-divine-blue mb-1" />
                      <span className="text-xs text-divine-blue font-medium">Play Video</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-divine-blue group-hover:text-primary-glow transition-colors duration-300">
                  {message.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {message.description}
                </p>
                
                <Button 
                  variant="divine" 
                  className="w-full"
                  onClick={() => window.open(message.youtubeUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-divine text-primary-foreground">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Never Miss a Message
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our YouTube channel to get notified of our latest sermons and stay connected with our church family.
              </p>
              <Button 
                variant="golden" 
                size="lg"
                onClick={() => window.open('https://www.youtube.com/@TheRealSuperchurchTNarsapuram')}
              >
                Subscribe to Our Channel
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;