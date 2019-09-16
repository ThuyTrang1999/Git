function DanhSachNguoiDung() {
  /* Lây danh sách nguời dùng */
  this.layDanhSachNguoiDung = function() {
    return $.ajax({
      url: "http://5d78df46a8c27100149866ab.mockapi.io/api/NguoiDung",
      type: "GET"
    });
  };

  /* Thêm người dùng */
  this.themNguoiDung = function(nguoiDung) {
    return $.ajax({
      url: "http://5d78df46a8c27100149866ab.mockapi.io/api/NguoiDung",
      type: "POST",
      data: nguoiDung
    });
  };
}

/* Xoa nguoi dung */
DanhSachNguoiDung.prototype.xoaNguoiDung = function(id) {
  return $.ajax({
    url: `http://5d78df46a8c27100149866ab.mockapi.io/api/NguoiDung/${id}`,
    type: "DELETE"
  });
};

/* lấy thông tin người dùng */
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id) {
  return $.ajax({
    url: `http://5d78df46a8c27100149866ab.mockapi.io/api/NguoiDung/${id}`,
    type: "GET"
  });
};
//Cap Nhat Nguoi Dung

DanhSachNguoiDung.prototype.capNhatNguoiDung = function(id, nguoiDung){
  return $.ajax({
    url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
    type: "PUT",
    data: nguoiDung
  })
}