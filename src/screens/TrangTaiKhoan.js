import React from 'react'
import NavigationBar from '../components/NavigationBar';
const TrangTaiKhoan = () =>{
	return(
		 <div>
     <NavigationBar/>
        <title>Edit Profile</title>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <main className="container">
          <section className="row">
            <div className="offset-2 col-8 mt-4 ">
              <form action method="post">
                <div className="card">
                  <div className="card-header">
                    <h3><b>Thông tin tài khoản</b></h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="hoten"><b>Họ và tên</b></label>
                          <input type="text" className="form-control" name="hoten" id="hoten" aria-describedby="helpId" placeholder="Họ và tên" />
                        </div>
                        
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="SDT"><b>Số điện thoại</b></label>
                          <input type="text" className="form-control" name="SDT" id="SDT" aria-describedby="helpId" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email"><b>Email</b></label>
                          <input type="text" className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    <button style={{backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px'}} className="btn btn-success">
                      Cập nhật
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="row">
            <div className="offset-2 col-8 mt-4 ">
              <form action method="post">
                <div className="card">
                  <div className="card-header">
                    <h3><b>Địa chỉ giao hàng</b></h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="tinhtp" />
                          <input type="text" className="form-control" name="tinhtp" id="tinhtp" aria-describedby="helpId" placeholder="Tỉnh/Thành phố" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phuongxa" />
                          <input type="text" className="form-control" name="phuongxa" id="phuongxa" aria-describedby="helpId" placeholder="Phường/Xã" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="quanhuyen" />
                          <input type="text" className="form-control" name="quanhuyen" id="quanhuyen" aria-describedby="helpId" placeholder="Quận/Huyện" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sonha" />
                          <input type="text" className="form-control" name="sonha" id="sonha" aria-describedby="helpId" placeholder="Số nhà" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    <button style={{backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px'}} className="btn btn-success">
                      Cập nhật
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="row">
            <div className="offset-2 col-8 mt-4 ">
              <form action method="post">
                <div className="card">
                  <div className="card-header">
                    <h3><b>Thay đổi mật khẩu</b></h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="password"><b>Nhập mật khẩu hiện tại</b></label>
                          <input type="password" className="form-control" name="password" id="password" placeholder="Nhập mật khẩu hiện tại" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="newpassword"><b>Mật khẩu mới</b></label>
                          <input type="password" className="form-control" name="newpassword" id="newpassword" placeholder="Nhập mật khẩu mới" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="re-newpassword"><b>Nhập lại mật khẩu mới</b></label>
                          <input type="password" className="form-control" name="re-newpassword" id="re-newpassword" placeholder="Nhập lại mật khẩu mới" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    <button style={{backgroundColor: 'rgb(0, 153, 255)', padding: '5px 20px', borderRadius: '20px', MozBorderRadius: '20px', WebkitBorderRadius: '20px'}} className="btn btn-success">
                      Cập nhật
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
		)
}
export default TrangTaiKhoan;