import React, { Component } from 'react'

export default class Modal extends Component {
    renderListCart  = () =>{
      const {listCart,updateProduct,deleteProduct} = this.props;
      console.log(this.props)
    return listCart.map((product) =>{
        return (
          <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <img src={product.image} width={50} alt="" />
                      </td>
                      <td>
                        <button onClick={()=>{
                          updateProduct(product.maSP,false)
                        }}>-</button>{product.quantity}<button onClick={()=>{
                          updateProduct(product.id,true)
                        }}>+</button>
                      </td>
                      <td>{product.price}$</td>
                      <td>{product.price * product.quantity}$</td>
                      <td>
                        <button className="btn btn-danger" onClick={()=> deleteProduct(product.id)}>Delete</button>
                      </td>
                    </tr>
        )
      })
    }
  
    render() {
      return (
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "1000px" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                     {this.renderListCart()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  