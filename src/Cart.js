import React from 'react'
import CartItem from './CartItem';

class  Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[{
            price:99,
            title:'Watch',
            qty:1,
            img:'',
            id:1
            },
            {
            price:999,
            title:'Phone',
            qty:10,
            img:'',
            id:2
            },
            {
            price:999,
            title:'Laptop',
            qty:4,
            img:'',
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
    render(){
        const{products}=this.state;
       return(
        <div className='cart'>
        
            {products.map((product)=>{
                return (
                <CartItem product={product} 
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}

                />
                )
                
                
            })}
            
        </div>

       );

        
    }
}
    

export default Cart;