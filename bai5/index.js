function tinhTong() {
  var nhapSo = document.getElementById("nhap-so").value * 1;
  var hangDonVi = nhapSo % 10;
  var hangChuc = Math.floor(nhapSo/10);
  var tong = hangDonVi + hangChuc;
  document.getElementById("result").innerHTML=`<p>Tổng là: ${tong}</p>`
}
