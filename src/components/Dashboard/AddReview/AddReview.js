import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';

import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
const AddReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        setSuccess(false);
        fetch(`http://localhost:5000/addReview`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setSuccess(true);
                }
            })
    };
    return (
        <Box>
            <Typography color="goldenrod" variant="h3">Please review your items here</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: "100%", padding: 20, margin: 10 }} {...register("name")} placeholder="Service Name" /> <br />
                        <input style={{ width: "100%", padding: 20, margin: 10 }}  {...register("img")} placeholder="Please enter your image url" /> <br />
                        <input style={{ width: "100%", padding: 20, margin: 10 }}  {...register("ratting")} placeholder="Please enter your rating here" /> <br />
                        <TextField style={{ width: "100%", padding: 5, margin: 5 }} {...register("description")} placeholder="Enter your description here.." /> <br />
                        {errors.exampleRequired && <span>This field is required</span>} <br />
                        <Button type="submit" variant="contained">Submit Review</Button>
                    </form>
                    {success && <Alert severity="success">Review added Successfully!</Alert>}
                </Box>
            </Box>
        </Box>
    );
};

export default AddReview;