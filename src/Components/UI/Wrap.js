import './Wrap.css'


const Wrap = (props)=>{

    const classes = 'Wrap ' + props.className

    return <div className={classes}> {props.children}</div>
   
    
}


export default Wrap;