import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  const contactItems = [
    {
      title: "07012348746",
      description: "Hotline",
      icon: <Phone size={24} className="text-primary" />,
    },
    {
      title: "07012348746",
      description: "Whatsapp Support",
      icon: <MessageCircle size={24}/>,
    },
    {
      title: "info@crystalbrickscooperative.com",
      description: "Email Address",
      icon: <Mail size={24}  />,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {contactItems.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center justify-between bg-[#F8F8F8] p-6 transition-colors hover:bg-gray-200"
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <div>
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
          {/* Optional rate or action */}
          <div>
            {/* Replace with rate if applicable */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
