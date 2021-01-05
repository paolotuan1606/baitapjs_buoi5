/**
 * đầu vào
 */


var phiXuLy = 0;
var phiDichVu = 0;
var thueKenh = 0;



/**
 * xử lý
 */

function nhaDan() {
    phiXuLy = 4.5;
    phiDichVu = 20.5;
    thueKenh = 7.5;
    dichVu = document.getElementById("ketNoi").value;
    kenh = document.getElementById("kenh").value;

    var tongTien = phiXuLy + (phiDichVu * dichVu) + (thueKenh * kenh);
    return tongTien;
}

function doanhNghiep() {
    phiXuLy = 15;
    phiDichVu = 75;
    thueKenh = 50;
    dichVu = document.getElementById("ketNoi").value;
    kenh = document.getElementById("kenh").value;

    if (dichVu > 0 && dichVu <= 10) {
        var tongTien = phiXuLy + (phiDichVu * dichVu) + (thueKenh * kenh);
    } else {
        tongTien = phiXuLy + (phiDichVu * dichVu) + (phiDichVu - 10) * 5 + (thueKenh * kenh);
    }
    return tongTien;
}

function tinhTien(event) {
    event.preventDefault();

    var maKhachHang = document.getElementById("maKhachHang").value;
    var soTK = document.getElementById("soTK").value;
    var khachHang = document.getElementById("khachHang").value;
    var dichVu = document.getElementById("ketNoi").value;
    var kenh = document.getElementById("kenh").value;

    dichVu = parseFloat(dichVu);
    kenh = parseFloat(kenh);
    phiXuLy = parseFloat(phiXuLy);
    phiDichVu = parseFloat(phiDichVu);
    thueKenh = parseFloat(thueKenh);

    var phiNhaDan = nhaDan();
    var phiDoanhNghiep = doanhNghiep();
    if (khachHang === "1") {
        var kq = phiNhaDan;
    } else {
        kq = phiDoanhNghiep;
    }
    /**
     * đầu ra
     */
    document.getElementById("cardFooter").innerHTML =
        "<p>" + "Mã khách hàng: " + maKhachHang +
        "</p>" + "<p>" + " Số tài khoản: " + soTK +
        "</p>" + "<p>" + " Số lượng kết nối cáp: " + dichVu +
        "</p>" + "<p>" + " Số lượng thuê kênh cao cấp: " + kenh +
        "</p>" + "<p>" + " Tổng cộng: " + kq + "$" +
        "</p>";
}
