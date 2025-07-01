import React, { useContext, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 11 || values.phone.length < 11) {
    errors.phone = "Must be 11 digits";
  }

  return errors;
};

const Contact = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all the fields");
      return;
    }
    // if (phone.length < 10 || phone.length > 10) {
    //   alert("Phone number must be 10 digits");
    //   return;
    // }

    emailjs
      .sendForm("service_pco3thq", "template_h78rwtp", form.current, {
        publicKey: "F1HTwoHP_ZGxroSbJ",
      })
      .then(
        () => {
          setSuccess(true);
          setName("");
          setEmail("");
          // setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsError(true);
        }
      );
  };
  const closeModal = () => {
    setSuccess(!success);
  };
  const closeErrorModal = () => {
    setIsError(!isError);
  };
  return (
    <div
      className={` ${
        theme == "dark" ? "bg-black" : ""
      } flex justify-center items-center min-h-screen p-4`}
      id="contactus"
    >
      <div className="  rounded-lg overflow-hidden lg:w-2/3 w-full flex flex-col lg:flex-row">
        <div className={`bg-[#222222] ${theme == "dark" ? "text-white" : " text-[#565656]"} p-10 flex-1 flex flex-col justify-center rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl w-full lg:w-[485px]`}>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-8">
            Rentwiser is Coming—Are <br />
            You  Ready?
          </h2>
          <p className="mb-6 text-[14px] lg:text-base">
            Join the Waitlist and Gain Early Access to the Only App Empowering
            BioPharma Professionals.
          </p>

          <div className="space-y-6">
            {/* Our Office */}
            <div>
              <h4 className="font-semibold mb-2">Our Office</h4>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-xl" />
                <p>Tampa, Florida</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a href="mailto:info@bioyap.com" className="flex items-center">
                <FaEnvelope className="mr-3 text-xl" />
                <p>info@bioyap.com</p>
              </a>
            </div>

            {/* Phone */}
            {/* <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:786 956 1500" className="flex items-center">
                <FaPhoneAlt className="mr-3 text-xl" />
                <p>786 956 1500</p>
              </a>
            </div> */}
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div
          className={` ${
            theme == "dark" ? "bg-[#282828]" : " bg-[#F1F1F1]"
          } p-10 pl-12 flex-1 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl`}
        >
          <h2
            className={`text-xl lg:text-[32px] font-bold mb-6 text-left mt-8 ${
              theme === "dark" ? "text-white" : "text-[#181818]"
            }`}
          >
            Closer Than a Click Away
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-8 mt-10">
            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === "dark" ? "text-white" : "text-[#181818]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="e.g. John"
                className={`mt-1 w-full border-b ${
                  theme === "dark"
                    ? "border-gray-600 text-white"
                    : "border-gray-300 text-[#181818]"
                } bg-transparent focus:outline-none focus:border-gray-500 py-2`}
              />
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === "dark" ? " text-white" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="e.g. John@gmail.com"
                className={`mt-1 w-full border-b ${
                  theme === "dark"
                    ? "border-gray-600 text-white"
                    : "border-gray-300 text-[#181818]"
                } bg-transparent focus:outline-none focus:border-gray-500 py-2`}
              />
            </div>

            {/* <div>
              <label
                className={`block text-sm font-medium ${
                  theme === "dark" ? " text-white" : "text-black"
                }`}
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="e.g. 0491 570 156"
                className={`mt-1 w-full border-b ${
                  theme === "dark"
                    ? "border-gray-600 text-white"
                    : "border-gray-300 text-[#181818]"
                } bg-transparent focus:outline-none focus:border-gray-500 py-2`}
              />
            </div> */}

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === "dark" ? " text-white" : "text-black"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Enter your message here"
                className={`mt-1 w-full border-b ${
                  theme === "dark"
                    ? "border-gray-600 text-white"
                    : "border-gray-300 text-[#181818]"
                } bg-transparent focus:outline-none focus:border-gray-500 py-2 resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-[170px] h-[60px] ${
                theme === "dark"
                  ? "bg-[#1E2EDE] text-white"
                  : "bg-[#1E2EDE] text-white"
              } font-semibold py-3 rounded-full transition duration-200 focus:outline-none`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <SuccessModal open={success} onclick={closeModal} />
      <ErrorModal open={isError} onclick={closeErrorModal} />
    </div>
  );
};

export default Contact;
