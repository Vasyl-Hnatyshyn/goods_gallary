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
            modalStyle:"none",
            newTask:""
        })
    }

    newProduct=(e)=>{
         let a =this.state.newTask;
         a[e.target.id]= e.target.value;

        this.setState({
            newTask:a
        })


        console.log(this.state.newTask)



    }

    render () {
        const {addTaskToFolder}=this.props
        return(
            <div>
                <button id="modal-add-product"  onClick={this.showModal} >+</button>


                <div id="modal-back-ground" style={{display:this.state.modalStyle}}>

                    <div className="modal-content"  >

                        <span  id="close" onClick={ this.closeModal}>&times; </span>

                        <input type="text"  data-name ="name" id="name" placeholder="product titel"  onChange={this.newProduct}/>
                        <input type="text" id="img" placeholder="link to the picture"    onChange={this.newProduct}  />
                        <input type="text" id="details" placeholder="product description"  onChange={this.newProduct}  />
                        <input type="text" id="price" placeholder="product price "  onChange={this.newProduct}  />

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
