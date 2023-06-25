import { useState } from "react";
import Button from "../Button";
import { StyledModal } from "./styles";

const Modal = ({message, titleButton, href, isOpen, externalAction}) => {
  const [open, setOpen] = useState(isOpen)

  return(
    <StyledModal className={open ? 'active' : ''}>
      <div class="modal-content">
      <span class="close" onClick={(e) => {
        setOpen(false)
        if(externalAction) externalAction(false)
      }}>&times;</span>
      <div class="mensagemmodal">
        <p>{message}</p>
        <Button link={href} title={titleButton} />
      </div>
    </div>
    </StyledModal>
  )
}

export default Modal