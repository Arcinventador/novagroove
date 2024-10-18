"use client";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; // Importing TextField separately
import {useState} from "react"
import toast from 'react-hot-toast';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      const handleInputChange = (e ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const requestBody = {
          name: formData.name,
          clientemail: formData.email,
          phone: formData.phone,
          message: formData.message,
          toemail: "nfo@novagroovegood.com", 
          subject: "Contact Form Submission from Nova Groove Good",
        };
    
        try {
          const res = await fetch('https://proxy-nodejs-one.vercel.app/api/api/websitecontact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
    
          if (res.ok) {
            setOpenModal(false);
            setFormData({ name: '', email: '', phone: '', message: '' }); 
            toast.success('Form submitted successfully!')
          } else {
            toast.error('Form submission failed');
          }
        } catch (error) {
          toast.error('Form submission failed');
        }
      };
      const closeModal = () => {
        setOpenModal(false);
        setFormData({ name: '', email: '', phone: '', message: '' }); 
      };
    const { btnText, } = props


    return (
        <div>
            <Button onClick={() => setOpenModal(true)}>{btnText}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={closeModal} 
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <h2 className='text-center'>Appointment Now</h2>
                        <form  onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                            />
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline  // This enables multiline input
                                rows={4}   // Adjust this to make the field larger (e.g., 4 rows)
                                name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                variant="contained pri-btn"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                Submit
                            </Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}