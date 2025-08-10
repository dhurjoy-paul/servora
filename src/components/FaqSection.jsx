import faq from '../assets/faq.png';

const FaqSection = () => {
  const faqItems = [
    {
      question: "How do I book a service on this platform?",
      answer: "To book a service, log in to your account, browse available services, and click on 'View Details'. From there, click the 'Book Now' button and fill in your details. Once submitted, your booking will be added with a pending status."
    },
    {
      question: "Can I offer my own services here?",
      answer: "Yes! Once you're logged in, you can go to the 'Dashboard' > 'Add Service' to list your own services. You'll need to provide details like service name, price, area, and description."
    },
    {
      question: "How do I manage the status of services others have booked from me?",
      answer: "Go to the 'Service-To-Do' section in your Dashboard. You'll find a list of services others have booked from you. Use the dropdown menu to change their status from 'pending' to 'working' or 'completed'."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#f5f7ff] to-[#e4ecff] dark:from-[#0a0f2c] dark:to-[#152139] text-text w-full overflow-x-hidden">
      <div className="py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">

          {/* Left side - FAQ text */}
          <div className="w-full lg:w-[60%] shrink-0">
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4 min-h-[300px]">
              {faqItems.map((item, index) => (
                <div key={index} className="collapse collapse-arrow bg-white dark:bg-black/50">
                  <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                  <div className="collapse-title text-xl font-medium">
                    {item.question}
                  </div>
                  <div className="collapse-content text-text/80 dark:text-text/60">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:flex w-full lg:w-[40%] justify-center items-center">
            <img src={faq} alt="FAQ"
              className="rounded-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default FaqSection;