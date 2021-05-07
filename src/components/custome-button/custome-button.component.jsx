import './custome-button.styles.scss'
const CustomButton = ({children,isGoogleSignIn,...otherProps}) => {
    return ( 
      <button className={`${isGoogleSignIn ? 'google-button' : ''} custom-button `} {...otherProps}>
        {children}
      </button>
     );
}
 
export default CustomButton;