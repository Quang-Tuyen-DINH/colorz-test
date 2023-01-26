import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { BuyPopupStyled } from '../components/styles/BuyPopup.styled';

export default function BuyPopup() {
  const [open, setOpen] = React.useState('');

  return (
    <BuyPopupStyled>
      <button className="vision-r-desktop__buy-popup__button" onClick={() => setOpen('center')}>Buy it now</button>
      <Modal open={!!open} onClose={() => setOpen('')}>
        <ModalDialog className="vision-r-desktop__buy-popup__modal" layout="center" variant="outlined">
          <ModalClose />
          <h2 className="vision-r-desktop__buy-popup__modal__title">Vous y avez (vraiment?) cru ?</h2>
          <span className="vision-r-desktop__buy-popup__modal__text">
            En tout cas, on espère que ça vous a fait sourire, parce qu’on en a bien besoin en ce moment. Et sinon, vous avez sûrement des produits plus intéressants à vendre.
          </span>
          <br/>
          <span>
            Ça tombe bien, nos équipes sont plus fortes en communication digitale qu’en innovations en carton.
          </span>
        </ModalDialog>
      </Modal>
    </BuyPopupStyled>
  );
}
