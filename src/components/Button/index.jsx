import { ButtonStyled } from "./styles";


const Button = ({link, target = '', title, event, deactive = false, className}) => {
  return(
    <ButtonStyled href={link} target={target} className={!deactive ? 'btn ' + className : 'btn deactive'} onClick={event}>
      {title}
    </ButtonStyled>
  )
}

export default Button