import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props){
        super(props);

        this.state={
            modalStyle:"none",
            newTask: {
                name:"",
                img:"",
                price:"",
                details:"",
                id:"1"
            },
            inputField: true,
        };

    }


    showModal=()=>{
        this.setState({

            modalStyle:"block",

        })
    }

    closeModal=()=> {
        this.setState({
            newTask: {
                name:" ",
                img:" ",
                price:" ",
                details:" ",
                id:" "
            },
            modalStyle:"none",
        })
    }

    newProduct=(e)=>{
         let a =this.state.newTask;
         a[e.target.id]= e.target.value;

        this.setState({
            newTask:a
        })

      this.inputAreEmpty();

    }


    inputAreEmpty=()=>{
        let text = this.state.newTask;
        let fieldText=[];
        for(let key in text){
            fieldText.push(text[key])
            }
        this.setState({
            inputField:fieldText.includes("")
        })


        }




    render () {
        const {addTaskToFolder}=this.props
        return(
            <div>
                <button id="modal-add-product"  onClick={this.showModal} >Add product</button>


                <div id="modal-back-ground" style={{display:this.state.modalStyle}}>




                    <div className="modal-content"  >

                        <button  id="close-modal-window" onClick={ this.closeModal}>X</button>

                        <label htmlFor="name" >Product title</label>
                        <input type="text" id="name" placeholder="title..."  value={this.state.newTask.name} onChange={this.newProduct}/>

                        <label htmlFor="img" >Image link</label>
                        <input type="text" id="img" placeholder="link to the picture..."   value={this.state.newTask.img}  onChange={this.newProduct}  />

                        <label htmlFor="details" >Product descriptions</label>
                        <input type="text" id="details" placeholder="descriptions..."  value={this.state.newTask.details} onChange={this.newProduct}  />

                        <label htmlFor="price" >Product price</label>
                        <input type="text" id="price" placeholder="price... " value={this.state.newTask.price}  onChange={this.newProduct}  />

                        {this.state.inputField === false ?
                            <button onClick={()=>{
                                addTaskToFolder(this.state.newTask);
                                this.closeModal();
                            }} id ="add-product-to-gallery"> add </button>:
                            <p id="errorMessage"> Some field is empty ...  </p>}

                    </div>

                </div>

            </div>

        )}
}

export default Modal;
