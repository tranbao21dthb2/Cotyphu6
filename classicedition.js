function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Nếu một "Tiện ích" được sở hữu, tiền thuê là gấp 4 lần số điểm trên xúc xắc.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Nếu cả hai "Tiện ích" được sở hữu, tiền thuê là gấp 10 lần số điểm trên xúc xắc.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Tiền thuê<span style="float: right;">25.000 VNĐ.</span><br />Nếu sở hữu 2 ga xe lửa<span style="float: right;">50.000 VNĐ.</span><br />Nếu sở hữu 3 ga<span style="float: right;">100.000 VNĐ.</span><br />Nếu sở hữu 4 ga<span style="float: right;">200.000 VNĐ.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " đã trả 100.000 VNĐ vì dừng tại Thuế xa xỉ.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Bạn đã dừng tại Thuế xa xỉ. Trả 100.000 VNĐ.");
}

function citytax() {
	addAlert(player[turn].name + " đã trả 200.000 VNĐ vì dừng tại Thuế thành phố.");
	player[turn].pay(200, 0);

	$("#landed").show().text("Bạn đã dừng tại Thuế thành phố. Trả 200.000 VNĐ.");
}


var square = [];

square[0] = new Square("Khởi hành", "NHẬN 200.000 VNĐ KHI ĐI QUA.", "#FFFFFF");
square[1] = new Square("Phố Huế", "60.000 VNĐ", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Hộp cộng đồng", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[3] = new Square("Đường Bạch Mai", "60.000 VNĐ", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Thuế thu nhập", "Nộp 200.000 VNĐ", "#FFFFFF");
square[5] = new Square("Ga Hà Nội", "200.000 VNĐ", "#FFFFFF", 200, 1);
square[6] = new Square("Đường Tây Sơn", "100.000 VNĐ", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Cơ hội", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[8] = new Square("Phố Đội Cấn", "100.000 VNĐ", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Đường Nguyễn Khánh Toàn", "120.000 VNĐ", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Trại giam", "", "#FFFFFF");
square[11] = new Square("Phố Tràng Tiền", "140.000 VNĐ", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Công ty Điện lực", "150.000 VNĐ", "#FFFFFF", 150, 2);
square[13] = new Square("Phố Hàng Bài", "140.000 VNĐ", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Phố Hàng Đào", "160.000 VNĐ", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Ga Long Biên", "200.000 VNĐ", "#FFFFFF", 200, 1);
square[16] = new Square("Phố Nhà Thờ", "180.000 VNĐ", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Hộp cộng đồng", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[18] = new Square("Phố Hàng Mã", "180.000 VNĐ", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Phố Hàng Ngang", "200.000 VNĐ", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Bãi đỗ xe miễn phí", "", "#FFFFFF");
square[21] = new Square("Phố Đinh Tiên Hoàng", "220.000 VNĐ", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Cơ hội", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[23] = new Square("Phố Lê Thái Tổ", "220.000 VNĐ", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Phố Lê Duẩn", "240.000 VNĐ", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Ga Gia Lâm", "200.000 VNĐ", "#FFFFFF", 200, 1);
square[26] = new Square("Đường Nguyễn Trãi", "260.000 VNĐ", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Đường Cầu Giấy", "260.000 VNĐ", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Công ty Cấp nước", "150.000 VNĐ", "#FFFFFF", 150, 2);
square[29] = new Square("Phố Ngọc Khánh", "280.000 VNĐ", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Vào tù", "Đi ngay vào tù. Không đi qua Khởi hành. Không nhận 200.000 VNĐ.", "#FFFFFF");
square[31] = new Square("Phố Láng Hạ", "300.000 VNĐ", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Phố Kim Mã", "300.000 VNĐ", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Hộp cộng đồng", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[34] = new Square("Phố Giảng Võ", "320.000 VNĐ", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Ga Yên Viên", "200.000 VNĐ", "#FFFFFF", 200, 1);
square[36] = new Square("Cơ hội", "THỰC HIỆN THEO HƯỚNG DẪN TRÊN THẺ", "#FFFFFF");
square[37] = new Square("Phố Phan Đình Phùng", "350.000 VNĐ", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Thuế xa xỉ", "Nộp 100.000 VNĐ", "#FFFFFF");
square[39] = new Square("Hồ Gươm", "400.000 VNĐ", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Thoát khỏi nhà tù miễn phí. Bạn có thể giữ thẻ này cho đến khi cần hoặc bán.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Bạn giành giải nhì trong cuộc thi sắc đẹp. Nhận 10.000 VNĐ.", function() { addamount(10, 'Hộp cộng đồng');});
communityChestCards[2] = new Card("Từ việc bán cổ phiếu, bạn nhận được 50.000 VNĐ.", function() { addamount(50, 'Hộp cộng đồng');});
communityChestCards[3] = new Card("Bảo hiểm nhân thọ đến hạn. Nhận 100.000 VNĐ.", function() { addamount(100, 'Hộp cộng đồng');});
communityChestCards[4] = new Card("Hoàn thuế thu nhập. Nhận 20.000 VNĐ.", function() { addamount(20, 'Hộp cộng đồng');});
communityChestCards[5] = new Card("Quỹ nghỉ lễ đến hạn. Nhận 100.000 VNĐ.", function() { addamount(100, 'Hộp cộng đồng');});
communityChestCards[6] = new Card("Bạn được thừa kế 100.000 VNĐ.", function() { addamount(100, 'Hộp cộng đồng');});
communityChestCards[7] = new Card("Nhận 25.000 VNĐ phí tư vấn.", function() { addamount(25, 'Hộp cộng đồng');});
communityChestCards[8] = new Card("Trả phí bệnh viện 100.000 VNĐ.", function() { subtractamount(100, 'Hộp cộng đồng');});
communityChestCards[9] = new Card("Ngân hàng nhầm lẫn có lợi cho bạn. Nhận 200.000 VNĐ.", function() { addamount(200, 'Hộp cộng đồng');});
communityChestCards[10] = new Card("Trả phí học 50.000 VNĐ.", function() { subtractamount(50, 'Hộp cộng đồng');});
communityChestCards[11] = new Card("Phí bác sĩ. Trả 50.000 VNĐ.", function() { subtractamount(50, 'Hộp cộng đồng');});
communityChestCards[12] = new Card("Hôm nay là sinh nhật bạn. Thu 10.000 VNĐ từ mỗi người chơi.", function() { collectfromeachplayer(10, 'Hộp cộng đồng');});
communityChestCards[13] = new Card("Tiến đến \"Khởi hành\" (Nhận 200.000 VNĐ).", function() { advance(0);});
communityChestCards[14] = new Card("Bạn phải sửa chữa đường phố. 40.000 VNĐ cho mỗi căn nhà, 115.000 VNĐ cho mỗi khách sạn.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Đi vào tù. Đi thẳng vào tù. Không đi qua \"Khởi hành\". Không nhận 200.000 VNĐ.", function() { gotojail();});



chanceCards[0] = new Card("Thoát khỏi nhà tù miễn phí. Bạn có thể giữ thẻ này cho đến khi cần hoặc trao đổi.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Sửa chữa tất cả tài sản của bạn. Trả 25.000 VNĐ cho mỗi căn nhà, 100.000 VNĐ cho mỗi khách sạn.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Phạt tốc độ 15.000 VNĐ.", function() { subtractamount(15, 'Cơ hội');});
chanceCards[3] = new Card("Bạn được bầu làm chủ tịch hội đồng. Trả cho mỗi người chơi 50.000 VNĐ.", function() { payeachplayer(50, 'Cơ hội');});
chanceCards[4] = new Card("Quay lại ba ô.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Tiến đến tiện ích gần nhất. Nếu chưa có người sở hữu, bạn có thể mua từ Ngân hàng. Nếu đã có người sở hữu, tung xúc xắc và trả chủ sở hữu gấp 10 lần số tiền tung được.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Ngân hàng trả cho bạn cổ tức 50.000 VNĐ.", function() { addamount(50, 'Cơ hội');});
chanceCards[7] = new Card("Tiến đến ga xe lửa gần nhất. Nếu chưa có người sở hữu, bạn có thể mua từ Ngân hàng. Nếu đã có người sở hữu, trả chủ sở hữu gấp đôi tiền thuê.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Trả thuế người nghèo 15.000 VNĐ.", function() { subtractamount(15, 'Cơ hội');});
chanceCards[9] = new Card("Đi đến ga xe lửa Hà Nội. Nếu bạn đi qua \"Khởi hành\", nhận 200.000 VNĐ.", function() { advance(5);});
chanceCards[10] = new Card("Tiến đến Phố đi bộ.", function() { advance(39);});
chanceCards[11] = new Card("Tiến đến đường Lý Thái Tổ. Nếu bạn đi qua \"Khởi hành\", nhận 200.000 VNĐ.", function() { advance(24);});
chanceCards[12] = new Card("Khoản vay xây dựng của bạn đã đáo hạn. Nhận 150.000 VNĐ.", function() { addamount(150, 'Cơ hội');});
chanceCards[13] = new Card("Tiến đến ga xe lửa gần nhất. Nếu chưa có người sở hữu, bạn có thể mua từ Ngân hàng. Nếu đã có người sở hữu, trả chủ sở hữu gấp đôi tiền thuê.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Tiến đến Phố Bùi Viện. Nếu bạn đi qua \"Khởi hành\", nhận 200.000 VNĐ.", function() { advance(11);});
chanceCards[15] = new Card("Đi vào tù. Đi thẳng vào tù. Không đi qua \"Khởi hành\". Không nhận 200.000 VNĐ.", function() { gotojail();});
