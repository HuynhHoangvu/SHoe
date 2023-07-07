import React, { Component } from 'react'
import DanhSach from './ds';
import Modal from './modal';
import data from './data.json'
export default class Shoe extends Component {
    constructor(props){
        super(props);
        this.state= {
            listProduct:data,
            listCart:[]
        }
    }
    findIndex = (id) => this.state.listCart.findIndex((product)=>product.id === id)
    handleAddProduct = (product) =>{
        const index = this.findIndex(product.id);
        //tao mang listCart moi tu this.state.listCart
        let listCart = [...this.state.listCart];
        if(index !== -1){
        //tim thay => Cap nhat SL
        listCart[index].quantity += 1;
        }else{
        //add to list Cart
            const productAddCart = {
              id:product.id,
              name:product.name,
              image:product.image,
              quantity:1,
              price:product.price
            }
        //tạo mảng listCart mới từ this.state.listCart
            listCart.push(productAddCart); 
            
            
        }//Cập nhật lại state
        this.setState({
              listCart
            }, ()=>{
              console.log( this.state.listCart)
            } )
          }
          handleUpdateQuantity =(id,isPlus)=>{
            let listCartClone = [...this.state.listCart];
            const index = this.findIndex(id)
            if(index !== -1){
            if(isPlus){
              //tang SL
              listCartClone[index
              ].quantity += 1
            }
            else{
              if(listCartClone[index
              ].quantity > 1){listCartClone[index
              ].quantity -= 1}
              //giam SL
              
            }
            this.setState({
              listCart: listCartClone
            })
          }
          }
          handleDeleteProduct = (id)=>{
            let listCartClone = [...this.state.listCart];
            const index = this.findIndex(id);
            if(index !== -1){
              listCartClone.splice(index, 1);
              this.setState({
                listCart: listCartClone
              })
            }
          }
    totalQuantity = ()=>{
       return this.state.listCart.reduce((total,product)=>total += product.quantity
        ,0)
    }
    render() {
        const {listCart} = this.state
        return (
          <div>
            <h3 className="title ">Shoes Shop</h3>
            <div className="container">
              <button
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng ({this.totalQuantity()})
              </button>
            </div>
            <DanhSach listProduct={this.state.listProduct}addProduct={this.handleAddProduct}/>
            <Modal  listCart={listCart} updateProduct={this.handleUpdateQuantity} deleteProduct={this.handleDeleteProduct} />
          </div>
        );
      }
}
