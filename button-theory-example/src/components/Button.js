import PropTypes from 'prop-types';


const Button = ({
  children, //here children prop works as child input
  primary,
  secondary,
  outline,
  rounded,
  success,
  warning,
  danger,
}) => {

   const handleClick = ()=> console.log(`Clikced ${primary}`);
  return <button onClick={handleClick}> {children} </button>;
};

Button.propTypes = {
  checkVariationValue : ({primary, secondary, success, warning, danger})=>{
    const count = 
    Number(!!primary)+
    Number(!!secondary)+
    Number(!!success)+
    Number(!!warning)+
    Number(!!danger);

    if(count >1){
      return new Error('Only one of primary, secondary, success, warning, danger can be true');
    }
  },
    children : PropTypes.node.isRequired,
    primary : PropTypes.bool,
    secondary : PropTypes.bool,
    outline : PropTypes.bool,
    rounded : PropTypes.bool,
    success : PropTypes.bool,
    warning : PropTypes.bool,
    danger : PropTypes.bool
};


export default Button;
