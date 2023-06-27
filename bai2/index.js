function tinhTrungbinh() {
  var soThuNhat = document.getElementById("soThuNhat").value * 1;
  var soThuHai = document.getElementById("soThuHai").value * 1;
  var soThuBa = document.getElementById("soThuBa").value * 1;
  var soThuTu = document.getElementById("soThuTu").value * 1;
  var soThuNam = document.getElementById("soThuNam").value * 1;
  var ketQua = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  document.getElementById("result").innerHTML = `<p>Trung bình của 5 số là:${ketQua}</p>`;
}
