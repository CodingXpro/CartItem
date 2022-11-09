import React from 'react'
import Cart from  './Cart';
import Navbar from './NavBar'

class  App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[{
        price:99,
        title:'Watch',
        qty:1,
        img:'https://media.istockphoto.com/id/134198374/photo/chronography-watch.jpg?s=612x612&w=is&k=20&c=hMCpx274uEHmI9eIFTIQVsVT1amweOY62lHl2iWtxUo=',
        id:1
        },
        {
        price:999,
        title:'Phone',
        qty:10,
        img:'https://media.istockphoto.com/id/185090884/photo/telephone.jpg?s=612x612&w=is&k=20&c=K6q8lph6WO9Ep5jMBPkXEBHd2Sgky4nJXoiXK5x3ob8=',
        id:2
        },
        {
        price:999,
        title:'Laptop',
        qty:4,
        img:'https://media.istockphoto.com/id/1182241805/photo/modern-laptop-with-empty-screen-on-white-background-mockup-design-copy-space-text.jpg?s=612x612&w=is&k=20&c=_NSKve8aK6x4DTQIywTFwc5JCWlrCjG7UzEpVi2QUWI=',
        id:3
        }
        ]
    }
    
}
handleIncreaseQuantity=(product)=>{
    console.log('Hey pls the inc the qty of' ,product);
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products
    })

}
handleDecreaseQuantity=(product)=>{
   
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return ;
    }
    products[index].qty -=1;
    this.setState({
        products
    })
}
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>
        item.id!==id
    );
    this.setState({
        products:items
    })
}
  getCartCount=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }

  getCartTotal=()=>{
    const{products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price;
    })
    return cartTotal;
  }
  render(){
    const{products}=this.state;
  return (
    <div className="App">
       <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      
      />
      <div style={{padding:10,fontSize:20}}>
        TOTAL:{this.getCartTotal()}
      </div>
     
    </div>

  );
}
}

export default App;
