function tinhChuViDienTich() {
  var chieuDai = document.getElementById("nhap-chieu-dai").value * 1;
  var chieuRong = document.getElementById("nhap-chieu-rong").value * 1;
  var chuViHCN = (chieuDai + chieuRong) * 2;
  var dienTichHCN = chieuDai * chieuRong;
  document.getElementById(
    "result"
  ).innerHTML = `<p>Chu vi là:${chuViHCN}; Diện tích là ${dienTichHCN}</p>`;
}
