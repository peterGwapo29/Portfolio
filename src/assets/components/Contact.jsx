
function Contact() {
  
  function handleSubmitMessage(e) {
    e.preventDefault();
    alert("This feature is not implemented yet, sorry for the inconvenience.");
  }

  return (
    <section
          id="contact"
          className="text-white py-20 px-4" style={{ background: "linear-gradient(to bottom, #1f2937, #111827)" }}
        >
          <div className="flex justify-center content-center items-center flex-col">
            <br />
            <h1 className="text-3xl font-bold text-center mb-12 text-[#fca311]">
              GET IN TOUCH
            </h1>
            <br />
            <br />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-w-6xl mx-auto px-4">
              <div className="contact1 flex flex-col gap-5 w-full lg:w-1/2">
                <h2 className="text-xl font-semibold">Let's connect</h2>
                <p>
                  Have a project in mind or just want to say hello? Feel free to
                  drop a message.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 shrink">
                    <i className="fa-solid fa-envelope text-[#fca311] text-xl"></i>
                    <span>peterolanolan@gmail.com</span>
                  </div>
                  <div className="flex gap-3 shrink">
                    <i className="fa-brands fa-facebook text-[#fca311] text-xl"></i>
                    <span>facebook.com/petergwapo.292004</span>
                  </div>
                  <div className="flex gap-3 shrink">
                    <i className="fa-brands fa-github text-[#fca311] text-xl"></i>
                    <span>github.com/peterGwapo29</span>
                  </div>
                </div>
              </div>

              <form className="bg-gray-900 rounded-lg shadow-lg w-full max-w-xl px-6 py-8">
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="input-field w-full p-3 bg-white/5 text-white rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#fca311] placeholder:text-gray-400 resize-none"
                  />

                  <button
                    type="submit"
                    className="btn-submit cursor-pointer bg-[#fca311] text-black py-3 rounded-md hover:bg-[#e39110] transition duration-200"
                    onClick={handleSubmitMessage}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  );
}

export default Contact;
