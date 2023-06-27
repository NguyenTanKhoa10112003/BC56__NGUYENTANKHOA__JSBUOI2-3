function tinhLuong() {
  var luong1Ngay = document.getElementById("tinhLuong").value * 1;
  var soNgaylLam = document.getElementById("so-ngay-lam").value * 1;
  var ketQua = luong1Ngay * soNgaylLam;
  document.getElementById("result").innerHTML = `<p>Tổng tiền lương là:${ketQua}</p>`;
}
