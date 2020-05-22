import React from 'react';
import './App.css';
import Modal from  './Components/Modal';
import Product from  './Components/Product/Product';



class App extends React.Component {
    constructor(){
       super();
       this.state = {
           goods:[{name:"mercedes",id:1, price: "22700",details:"lerem sadasdasd asdasdasd", img:"https://cdn0.riastatic.com/photos/ir/new/auto/photo/mercedes-benz_gls-350__317269940-620x415x70.jpg"},
               {name:"audi",id:2,price: "66220",details:"bot bot", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpuTUzBy1fm7sPB9cNCMZOV2uojPhwxrrNjlg1iEaC09xigE_&usqp=CAU"},
               {name:"ivan",id:3},
               {name:"oleh",id:4},
               {name:"roman",id:5},
               ],
           topElementId: null,
       }
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

     addTaskToFolder=val=> {

         val.id= +`${Math.floor(Math.random() * 1000)}`;

        const updateGoods = [...this.state.goods,val];

        this.setState({

            goods:updateGoods

        })


    }

    removeProduct=good=>{
        const update = this.state.goods.filter(function(item){
        return item.id !== good.id;
        })
        this.setState({
            goods:update
        })
    }

    pinToTop = id => {
        this.setState((prevState) => ({
            setTopElementId: prevState.setTopElementId === id ? null : id
        }))
    }

    // toTop=good=>{
    //     let currentProduct=good;
    //     const filtered = this.state.goods.filter(function(item){
    //         return item.id !== good.id;
    //     })
    //     filtered.unshift(currentProduct);
    //     this.setState({
    //         goods:filtered
    //     })
    // }

    render() {

        const pinnedItem = this.state.goods.find(good => good.id === this.state.topElementId);
        const goodsList = this.state.goods.filter(good => good.id !== this.state.topElementId);

    return (



        <div className = "App">

           <Modal  addTaskToFolder={this.addTaskToFolder}/>

            <header>
                <input type="text"  id="search" onKeyUp={this.filter}/>
            </header>
       <section className="gallery">
           <Product {...pinnedItem} />

           {goodsList.map((good)=>{
                   return (
                       <Product
                        good={good}
                        removeProduct={this.removeProduct}
                        pinToTop={this.pinToTop}
                       />
                   )
           })
           }
      </section>
      </div>
        
    );
    }
}
export default App;
