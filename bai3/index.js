function tinhTien() {
  var soTienUSD = document.getElementById("so-tien-usd").value * 1;
  const tienUSDgoc = 23500;
  var doiTien = soTienUSD * tienUSDgoc;
  var tienDoiDuoc = new Intl.NumberFormat("vn-VN").format(doiTien);
  document.getElementById(
    "result"
  ).innerHTML = `<p>Số tiền quy đổi được là ${tienDoiDuoc}</p>`;
}
