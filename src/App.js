import React from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';
import Product from './Components/Product/Product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goods: [
        {
          name: 'mercedes',
          id: 1,
          price: '22700',
          details: 'mercedes ml450 amg',
          img:
            'https://cdn0.riastatic.com/photos/ir/new/auto/photo/mercedes-benz_gls-350__317269940-620x415x70.jpg',
        },
        {
          name: 'audi',
          id: 2,
          price: '66220',
          details: 'audi Q7 rs 2013',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEpuTUzBy1fm7sPB9cNCMZOV2uojPhwxrrNjlg1iEaC09xigE_&usqp=CAU',
        },
        {
          name: 'ASUS Laptop',
          id: 55,
          price: '312',
          details: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD',
          img: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
        },
        {
          name: 'Nike Air Max 270',
          id: 5,
          price: '55',
          details: 'Nike Air Max 270 mans,from USA',
          img:
            'https://beshop.com.ua/upload/resize/510408/krossovki_nike_air_max_720_city_black.jpeg',
        },
      ],
      topElementId: null,
    };
  }

  filter = (e) => {
    let input = e.target;
    let filter = input.value.toLowerCase();
    let filterItems = document.querySelectorAll('.card');

    filterItems.forEach((item) => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  };

  addTaskToFolder = (val) => {
    val.id = +`${Math.floor(Math.random() * 1000)}`;

    const updateGoods = [...this.state.goods, val];

    this.setState({
      goods: updateGoods,
    });
  };

  removeProduct = (good) => {
    const update = this.state.goods.filter(function (item) {
      return item.id !== good.id;
    });
    this.setState({
      goods: update,
    });
  };

  pinToTop = (id) => {
    this.setState((prevState) => ({
      topElementId: prevState.topElementId === id ? null : id,
    }));
  };

  render() {
    const pinnedItem = this.state.goods.find((good) => good.id === this.state.topElementId);
    const goodsList = this.state.goods.filter((good) => good.id !== this.state.topElementId);

    return (
      <div className="App">
        <Modal addTaskToFolder={this.addTaskToFolder} />

        <header>
          <input type="text" id="search" onKeyUp={this.filter} placeholder="Search..." />
        </header>

        <section className="gallery">
          {pinnedItem && (
            <Product
              good={pinnedItem}
              removeProduct={this.removeProduct}
              pinToTop={this.pinToTop}
            />
          )}

          {goodsList.map((good) => {
            return (
              <Product
                key={good.id}
                good={good}
                removeProduct={this.removeProduct}
                pinToTop={this.pinToTop}
              />
            );
          })}
        </section>
      </div>
    );
  }
}
export default App;
