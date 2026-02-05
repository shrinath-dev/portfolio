import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ui/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shrinath200802@gmail.com",
      link: "mailto:shrinath200802@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 96431 90350",
      link: "tel:+919643190350",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New Delhi, India",
      link: null,
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities and ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance work and full-time
                opportunities. Whether you have a question or just want to say
                hi, I'll do my best to get back to you!
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div className="flex items-start gap-4" key={i}>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <div className="text-muted-foreground hover:text-primary transition">
                        {info.link !== null ? (
                          <Link href={info.link}>
                            <p>{info.value}</p>
                          </Link>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* contact-form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
