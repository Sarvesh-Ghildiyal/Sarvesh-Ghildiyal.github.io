
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Twitter, Discord } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "vivekrajuv18@gmail.com",
      link: "mailto:vivekrajuv18@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-975411134",
      link: "tel:+91975411134"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bengaluru, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      link: "https://twitter.com"
    },
    {
      icon: <Discord className="h-5 w-5" />,
      label: "Discord",
      link: "https://discord.com"
    }
  ];

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container-section">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="section-subheading">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="font-medium text-gray-900 hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-gray-900">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="section-subheading">Connect With Me</h3>
              <p className="text-gray-700 mb-6">
                Follow me on social media or reach out directly. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
