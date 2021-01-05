/***
 * đầu vào
 */



/***
 * xử lý
 */

function khuVucUuTien() {
    var khuVuc = document.getElementById("khuVuc").value;
    if (khuVuc === "A") {
        return 2;
    } else if (khuVuc === "B") {
        return 1;
    } else if (khuVuc === "C") {
        return 0.5;
    } else if (khuVuc === "X") {
        return 0;
    }
}

function doiTuongUuTien() {
    var doiTuong = document.getElementById("doiTuong").value;
    if (doiTuong = "1") {
        return 2.5;
    } else if (doiTuong = "2") {
        return 1.5;
    } else if (doiTuong = "3") {
        return 1;
    } else if (doiTuong = "0") {
        return 0;
    }

}

function tinhTongDiem() {
    var dVan = document.getElementById("diemVan").value;
    var dToan = document.getElementById("diemToan").value;
    var dAnh = document.getElementById("diemAnh").value;
    var diemKhuVuc = khuVucUuTien();
    var dDoiTuong = doiTuongUuTien();

    dVan = parseFloat(dVan);
    dToan = parseFloat(dToan);
    dAnh = parseFloat(dAnh);
    diemKhuVuc = parseFloat(diemKhuVuc);
    dDoiTuong = parseFloat(dDoiTuong);

    kq = dVan + dToan + dAnh + diemKhuVuc + dDoiTuong;
    return kq;
}

function diemThi() {
    var tongDiem = tinhTongDiem();
    var diemChuan = document.getElementById("diemChuan").value;
    if (tongDiem < diemChuan) {
        var thongBao = "Kết quả: rớt";
    } else {
        thongBao = "Kết quả: đậu"
    }
    /**
     * đầu ra
     */
    document.getElementById("cardFooter").innerHTML = "<p>" + "tổng điểm: " + tongDiem + "</p>" + "<p>" + thongBao + "</p>";
}