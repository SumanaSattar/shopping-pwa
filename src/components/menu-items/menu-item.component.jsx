import './menu-item.styles.scss'
const MenuItem = ({title , image , size}) => {
    return (
        
                <div className={`${size} menu-item`}>
                    <div className='backGround' style={{backgroundImage:`url(${image})`}}/>
                    <div className='content'>
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>shop now</span>
                    </div>
                </div>
         
      );
}
 
export default MenuItem;