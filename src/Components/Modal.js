import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props){
        super(props);

        this.state={
            modalStyle:"none",
            newTask:""
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

    newTask=(e)=>{

        this.setState({

            newTask:e.target.value
        })


    }

    addTaskToFolder=()=>{

        this.props.add(this.state.newTask)
        this.closeModal();

    }


    render () {

        return(
            <div>
                <button id="modal-add-product"  onClick={this.showModal} >+</button>


                <div id="modalB_graund" style={{display:this.state.modalStyle}}>

                    <div className="modal-content"  >

                        <span  id="close" onClick={ this.closeModal}>&times; </span>

                        <textarea id="txt"  placeholder="Add your task..." onChange={this.newTask} value={this.state.newTask}></textarea>


                        {this.state.newTask ?
                            <a href="#" onClick={this.addTaskToFolder} id ="modalBtn"> add </a>:
                            <p id="errorMessage"> Your task is empty... </p>}


                    </div>

                </div>

            </div>

        )}
}

export default Modal;
