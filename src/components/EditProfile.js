import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';







function EditProfile(props){
// const {user, setUser} = useContext(UserContext)
    const {btnEdit} = props


    return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={btnEdit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          defaultValue=""
        />
        </div>
        
        <div>
        <TextField
          required
          id="outlined-required"
          label="Country"
          name="country"
          defaultValue="1976 Poland"
        />
        </div>
       
        <div>
        <TextField
          required
          id="outlined-required"
          label="Age"
          name="age"
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


export default EditProfile