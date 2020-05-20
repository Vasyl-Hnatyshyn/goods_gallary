import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(){
       super();
       this.state = {
           goods:[{name:"petro",id:1},
               {name:"mykola",id:2},
               {name:"ivan",id:3},
               {name:"oleh",id:4},
               {name:"roman",id:5},
               ],
       }
    }




    componentDidUpdate(prevProps, prevState) {



    }


    filter=(e)=> {

        let input = e.target;
        let filter = input.value.toLowerCase();
        let filterItems = document.querySelectorAll('.card');

        filterItems.forEach(item => {

            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })
    }

    // addTaskToFolder=val=> {
    //
    //     let a ={text: val , author:this.state.author, id: +`${Math.floor(Math.random() * 1000)}` };
    //
    //     const updateFolder = [...this.state.taskFolder,a];
    //
    //     this.setState({
    //
    //         taskFolder:updateFolder
    //
    //     })
    //
    //     localStorage.setItem('task', JSON.stringify(updateFolder));
    //
    // }
    //
    removeProduct=good=>{
        const update = this.state.goods.filter(function(item){
        return item.id !== good.id;
        })
        this.setState({
            goods:update
        })
    }



    render() {

    return ( 




        <div className = "App">     
           <button id="modal-add-product">+</button>
            <header>
                <input type="text"  id="search" onKeyUp={this.filter}/>
            </header>
       <section className="gallery">
           {this.state.goods.map((good)=>{
                   return (
                       <div className="card"  key={good.id}>
                           {good.name}

                         <button className="remove-product" onClick={()=>{this.removeProduct(good)} }>Х</button>
                       </div>
                   )
           })
           }
      </section>
      </div>
        
    );
    }
}
export default App;
