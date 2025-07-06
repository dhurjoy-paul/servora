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
    <section className="bg-gradient-to-br from-[#f5f7ff] to-[#e4ecff] dark:from-[#0a0f2c] dark:to-[#152139] text-text">
      <div className="py-16 max-w-7xl mx-auto">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

          <div className="w-full lg:w-2/3 shrink-0">
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-4 min-h-[300px]">
              {faqItems.map((item, index) => (
                <div key={index} className="collapse collapse-arrow font- bg-white dark:bg-black/50">
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

          <div className="flex lg:block justify-center items-center">
            <img src={`${faq}`}
              className="rounded-lg max-w-full h-auto lg:max-w-sm hidden lg:mt-0 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;