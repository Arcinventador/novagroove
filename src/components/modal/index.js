"use client";
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; // Importing TextField separately

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
    const { btnText, } = props

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>{btnText}</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <h2 className='text-center'>Appointment Now</h2>
                        <form>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline  // This enables multiline input
                                rows={4}   // Adjust this to make the field larger (e.g., 4 rows)
                            />
                            <Button
                                type="submit"
                                variant="contained"
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