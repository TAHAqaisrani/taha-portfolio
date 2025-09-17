import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error, try again later.");
    }
  };

  return (
    <>
    

      <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 px-4 sm:px-6 md:px-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-4 sm:mb-6">
            Contact Me
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg w-full p-3 mb-4 sm:mb-5 text-sm sm:text-base transition duration-200"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg w-full p-3 mb-4 sm:mb-5 text-sm sm:text-base transition duration-200"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg w-full p-3 mb-4 sm:mb-5 text-sm sm:text-base transition duration-200"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white w-full py-3 sm:py-3.5 rounded-lg shadow-md transition-transform duration-200 text-sm sm:text-base"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">
              {status}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
