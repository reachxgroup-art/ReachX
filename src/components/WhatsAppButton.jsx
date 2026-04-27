import React from 'react';

const WhatsAppButton = ({ phoneNumber = "919123855424", message = "Hello ReachX!" }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[90] top-[85px] right-8 md:top-auto md:bottom-6 md:right-6 group"
      aria-label="Contact us on WhatsApp"
    >
      <button className="flex items-center justify-center text-black/50 border border-white/40 rounded-full bg-green-500/15 backdrop-blur-xl transition-all duration-300 cursor-pointer hover:bg-green-500/25 w-11 h-11 md:w-14 md:h-14 hover:scale-105">
        <i className="ri-whatsapp-line text-2xl md:text-3xl"></i>
      </button>
    </a>
  );
};

export default WhatsAppButton;
