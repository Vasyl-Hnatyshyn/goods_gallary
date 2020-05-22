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
                id:""
            }
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
                name:"",
                img:"",
                price:"",
                details:"",
                id:""
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

    }

    render () {
        const {addTaskToFolder}=this.props
        return(
            <div>
                <button id="modal-add-product"  onClick={this.showModal} >Add product</button>


                <div id="modal-back-ground" style={{display:this.state.modalStyle}}>

                    <div className="modal-content"  >

                        <span  id="close" onClick={ this.closeModal}>X</span>

                        <input type="text"  data-name ="name" id="name" placeholder="product titel"  value={this.state.newTask.name} onChange={this.newProduct}/>
                        <input type="text" id="img" placeholder="link to the picture"   value={this.state.newTask.img}  onChange={this.newProduct}  />
                        <input type="text" id="details" placeholder="product description"  value={this.state.newTask.details} onChange={this.newProduct}  />
                        <input type="text" id="price" placeholder="product price " value={this.state.newTask.price}  onChange={this.newProduct}  />

                        {this.state.newTask ?
                            <a href="#" onClick={()=>{
                                addTaskToFolder(this.state.newTask);
                                this.closeModal();
                            }} id ="modalBtn"> add </a>:
                            <p id="errorMessage"> Your task is empty... </p>}


                    </div>

                </div>

            </div>

        )}
}

export default Modal;
