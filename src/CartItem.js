import React from 'react'

const CartItem=(props)=>{
    
    // // testing(){
    // //     const promise=new Promise((resolve,reject)=>{
    // //         setTimeout(()=>{
    // //             resolve('done')
    // //         },5000)
    // //     })
    // //     promise.then(()=>{
    // //         this.setState({qty:this.state.qty+10});
    // //         console.log('state',this.state);
    // //     })
    // // }
    // decreaseQuantity=()=>{
    //     const {qty} =this.state
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((currentState)=>{
    //         return{
    //             qty:currentState.qty -1
    //         }

    //     });
    // }
    // increaseQuantity=()=>{
    //     // this.state.qty +=1;
    //     // console.log('this.state',this.state);
    //     //setstate form 1
    //     // this.setState({
    //     //     qty:this.state.qty + 1
    //     // });
       

    //     // Setstate form 2

    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty+1
    //         }
    //     }

    //     );
    
    
        const{price,title,qty}=props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} src={product.img}/>

                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>

                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828919.png' 
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                        onClick={()=>onDeleteProduct(product.id)}
                        />


                    </div>
                </div>
            </div>
        )
    }

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}
export default CartItem;