import className from 'classnames';
import { twMerge } from 'tailwind-merge';



const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) => {

    console.log(rest);
    

    const classes = twMerge( 
        className('flex items-center m-1 px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white' : primary,
        'border-gray-500 bg-gray-500 text-white' : secondary,
        'border-green-500 bg-green-500 text-white' : success,
        'border-yellow-500 bg-yellow-500 text-white' : warning,
        'border-red-500 bg-red-500 text-white' : danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
        })
    );



    const variationCheck = [primary,secondary,success,warning,danger].filter(Boolean);
    if(variationCheck.length>1){
        console.error('123: Only one button variation can be selected');
    }


  return <button className={classes} onClick={rest.onClick}>{children} </button>;
};



export default Button;
