import { useState } from "react";
import { toast } from "react-toastify";

const NewsletterSection = () => {
  const notifySuccess = (msg) => toast.success(<ToastSuccess msg={msg} />);
  const ToastSuccess = ({ msg }) => (
    <span className='text-lg text-green-600 font-semibold font-ibm leading-6'>{msg}</span>
  );
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    notifySuccess(`Thank you for subscription`)
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="bg-background py-16 lg:py-20 px-4 shadow-lg">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay in the <span className="text-brand font-funnel-display">Loop</span>
        </h2>
        <p className="mt-3 text-text/80 dark:text-text-muted text-lg">
          Get the latest service deals, expert tips, and exclusive offers straight to your inbox.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-text dark:text-white bg-input dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-brand text-white rounded-xl font-semibold hover:bg-brand/90 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-sm text-text/60 dark:text-text-muted text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </section>
  );
};

export default NewsletterSection;
