import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




function AddForm(props) {

    // const {user, setUser} = useContext(UserContext)
    const {btnSubmit} = props
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={btnSubmit}
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Title"
              name="title"
              defaultValue=""
            />
            </div>
            
            <div>
            <TextField
              required
              id="outlined-required"
              label="Price"
              name="price"
              defaultValue=""
            />
            </div>
           
            <div>
            <TextField
              required
              id="outlined-required"
              label="Categories"
              name="categories"
              defaultValue=""
            />
            </div>

            <div>
            <TextField
              required
              id="outlined-required"
              label="Description"
              name="desc"
              defaultValue=""
            />
            </div>
            
            <Stack direction="row" spacing={2}>
               <Button type="submit" variant="outlined">Submit</Button>
               

               </Stack>
               <input type="file"  name="myImage"  accept="image/png, image/jpg"  />
               </Box>
    )

}
export default AddForm