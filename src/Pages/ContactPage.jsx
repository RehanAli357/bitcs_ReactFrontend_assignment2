import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";
const ContactPage = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((pdata) => ({
      ...pdata,
      [name]: value,
    }));
    setErrors({})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors={};
    if (!contact.name) newErrors.name = "Contact Name is required";
    if (contact.message.length < 20)
      newErrors.message = "Description is required";
    if (!contact.email) newErrors.email = "Valid email is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Submitted");
    }
  };
  return (
    <div className="bg-blue-300 w-[300px] m-auto mt-4 rounded-md">
      <h1 className=" text-center text-2xl">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-[100%] flex justify-center items-center flex-col mt-4 py-2">
        <TextField
          error={!!errors.name}
          id="outlined-error"
          label="Your Name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          helperText={errors.name}
          InputLabelProps={{ shrink: true }}
          sx={{margin:"20px 0"}}
        />
        <TextField
          error={!!errors.email}
          id="outlined-error"
          label="Your Email"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          helperText={errors.email}
          InputLabelProps={{ shrink: true }}
          sx={{margin:"20px 0"}}
        />
        <TextField
          error={!!errors.message}
          id="outlined-multiline-static"
          label="Your message"
          multiline
          rows={10}
          InputLabelProps={{ shrink: true }}
          helperText={errors.message}
          value={contact.message}
          name="message"
          onChange={handleChange}
          sx={{margin:"20px 0"}}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
