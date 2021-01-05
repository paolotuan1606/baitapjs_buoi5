function tieuThuDien() {
    /***
    * đầu vào
    */
    var ten = document.getElementById("ten").value;
    var tieuThu = document.getElementById("tieuThu").value;
    tieuThu = parseFloat(tieuThu);
    /**
     * xử lý
     */
    var tongTien = tinhTienDien(tieuThu);
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tongTien = currentFormat.format(tongTien);
    /**
     * đầu ra
     */
    document.getElementById("cardFooter").innerHTML = "<p>" + "Tên khách hàng: " + ten + "</p>" + "Tổng tiền phải trả: " + tongTien + " VNĐ";
}

function tinhTienDien(i) {
    if (0 < i && i <= 50) {
        var tong = i * 500;
    } else if (50 < i & i <= 100) {
        tong = 50 * 500 + (i - 50) * 650;
    } else if (100 < i && i <= 200) {
        tong = 50 * 500 + 50 * 650 + (i - 100) * 850;
    } else if (200 < i && i <= 250) {
        tong = 50 * 500 + 50 * 650 + 100 * 850 + (i - 200) * 1100;
    } else { tong = 50 * 500 + 50 * 650 + 100 * 850 + 50 * 1100 + (i - 250) * 1300 }
    return tong;
}