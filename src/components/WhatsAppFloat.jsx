import { SiWhatsapp } from 'react-icons/si';
const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/919198690007"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] text-green border border-2 bg-white rounded-full
                 shadow-lg transition-transform
                 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloating;
