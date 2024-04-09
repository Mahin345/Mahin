import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
        <Typography variant='h4'>ADD BLOG</Typography>
        <br /><br /><br /><br />
        <TextField id="outlined-basic" label="BLOG NAME" variant="outlined"/>
        <br /><br />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <br /><br /><br /><br />
        <TextField id="outlined-basic" label="Author" variant="outlined" />
        <br /><br /><br />
        <Button variant="contained">Submit</Button>



    </div>
  )
}

export default Addblog