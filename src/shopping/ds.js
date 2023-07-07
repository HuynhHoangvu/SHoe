import React, { Component } from 'react'
import SanPham from './sp'
export default class DanhSach extends Component {
  renderListProduct = () =>{
    const {listProduct,addProduct} = this.props;
    return listProduct.map((product)=>{
        return <SanPham key={product.id} addProduct={addProduct}  product={product} />
    })
  }
    render() {
    return (
        <div className="container">
        <div className="row">
          
          {this.renderListProduct()}
        </div>
      </div>
    )
  }
}
