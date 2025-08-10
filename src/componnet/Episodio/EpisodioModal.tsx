import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CardChar from '../Card';
import { character, episode } from '@/redux/types';
import { useGetCharacterByIdQuery } from '@/redux/services/userAPI';

const EpisodioModal = ({ episodios }: { episodios: episode }) => {
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
  maxHeight: '80vh',
  overflowY: 'auto',
  borderRadius: '8px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  backgroundColor: '#f0f0f0',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '16px',

};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const charactersData: character[] = [];
  episodios.characters.forEach((c) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useGetCharacterByIdQuery({ id: parseInt(c.slice(42)) });
    if (data) {
      charactersData.push(data);
    }
  });
  return (
    <div>
      <Button onClick={handleOpen}>{episodios.name}</Button>
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
            {charactersData.map((cha, index) => (
              //console.log(cha, 'Character data'),
              <CardChar key={index} character={cha} />
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default EpisodioModal;