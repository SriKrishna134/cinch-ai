import { useState } from "react";
import { supabaseUrl, supabaseAnonKey, googleSheetUrl } from "../../constants";
import { createClient } from "@supabase/supabase-js";
import "./ContactPage.css";
import contactImage from "../../assets/contact.png"

const supabase = createClient(supabaseUrl, supabaseAnonKey);
// const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   realtime: { params: { eventsPerSecond: 100000} },
// });

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form:", formData);

    try {
      // Insert into Supabase
      console.log("Inserting into Supabase...");
      const { error } = await supabase.from("appointments").insert([formData], { returning: "minimal" });
      

      if (error) {
        console.error("Supabase Insert Error:", error);
        alert("Error storing data in Supabase.");
        return;
      }
      console.log("Data inserted successfully!");
      

      // // Fetch the latest inserted entry
      // console.log("Fetching latest entry from Supabase...");
      // const { data: latestData, error: fetchError } = await supabase
      //   .from("appointments")
      //   .select("*")
      //   .order("created_at", { ascending: false })
      //   .limit(1);
      //   console.log("Latest Data from Supabase:", latestData);


      // if (fetchError) {
      //   console.error("Error fetching latest data:", fetchError);
      //   alert("Error fetching data from Supabase.");
      //   return;
      // }
      
      // if (latestData && latestData.length > 0) {
      //   const insertedData = latestData[0];

      //   // Send the inserted data to Google Sheets
      //   console.log("Sending to Google Sheets:", insertedData);
      //   console.log("Inserted Data Before Sending to Google Sheets:", JSON.stringify(insertedData, null, 2));

      //   console.log("Sending to Google Sheets:", insertedData);
      //   const response = await fetch(googleSheetUrl, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": "*", // ✅ Allow CORS
      //     },
      //     body: JSON.stringify(insertedData),
      //   });
        
        

      //   const result = await response.json();
      //   console.log("Google Sheets Response:", result);

        if (1) {
          alert("Appointment booked successfully!");
          setFormData({ name: "", email: "", message: "", date: "" });
        } else {
          alert("Failed to save data to Google Sheets.");
        }
      }
     finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <div className="image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
      </div>
      <div className="form-container" id="contactpage">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-subheading">Schedule a call with us.</p>
        <form onSubmit={handleSubmit} className="contact-form"  >
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            className="input-field" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            className="input-field" 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            required 
            value={formData.message} 
            onChange={handleChange} 
            className="input-field textarea-field"
          ></textarea>
          <input 
            type="date" 
            name="date" 
            required 
            value={formData.date} 
            onChange={handleChange} 
            className="input-field date-field" 
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
  
  
};

export default ContactPage;
