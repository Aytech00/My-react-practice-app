import Form from "./Form";

const NewForm = (props)=>{

    const dataHandler = (newData)=>{
        const data = {
            ...newData,
            id: Math.random().toString()
        }

       props.savedDataHandler(data)

    }
    
    return(

        <Form onSavedData={dataHandler}></Form>
 
    )
}


export default NewForm;