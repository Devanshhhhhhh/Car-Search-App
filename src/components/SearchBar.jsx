import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Logo from './Logo'

  const SearchBar = ({ inputValue, setInputValue, onSearch }) => {

    const handleSubmit  = async (e) => {
      e.preventDefault();
      onSearch(inputValue);
    }

  return (
    <>
      <Logo />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          gap: 2,
          m: 2,
          maxWidth: 400,
          borderRadius: '16px',
          mx: 'auto'
        }}>

        <TextField
          fullWidth
          label="Enter car Model (e.g., Chiron)"
          variant='outlined'
          value={inputValue}
          size='small'
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            boxShadow: '0 8px 24px #675f48ff',
            input: {
               color: '#ffffff', // text color inside the box
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2e8c9'
            },
            '&:hover fieldset': {
              borderColor: '#b4a67eff', // hover border
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f2e8c9', // Set your desired default color
            },
            '& .MuiInputLabel-root': {
              color: '#88867bff', // optional: label color
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#b4a67eff', // ✅ outline color on focus
            },
          }}
        />

        <Button 
          type='submit'
          variant="contained"
          size='small'
          sx={{
            boxShadow: '0 8px 24px #675f48ff',
            backgroundColor: '#958c70ff',   // custom background
            color: 'white',               // text color
            '&:hover': {
              backgroundColor: '#aba287ff', // hover color
            }
          }}
        >
          Search
        </Button>
      </Box>
    </>
  )
}
export default SearchBar