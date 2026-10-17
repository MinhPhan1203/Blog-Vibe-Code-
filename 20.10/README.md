# Tháng mười · Thiệp 20/10

Trang tạo thiệp Ngày Phụ nữ Việt Nam, viết bằng HTML, CSS và JavaScript thuần. Không cần cài thư viện, không cần build và có thể mở `index.html` trực tiếp trên trình duyệt.

Nền trang dùng màu hồng `#FFCED8`. Cỡ chữ giao diện và chữ trên thiệp đã tăng 5px so với thiết kế đầu tiên.

## Ba bước sử dụng

1. Nhập tên và chọn ảnh từ thiết bị. Ảnh xem trước vuông 157 × 157px, bo góc 25px; có hai thanh điều chỉnh trục X/Y, thanh phóng to 100–300% và nút căn giữa. Ảnh trên thiệp xuất ra dùng cùng vị trí cắt với ảnh xem trước.
2. Chọn từ **10 đến 20 bông** trong 16 loại hoa. Có thể chọn nhiều bông cùng loại, bớt từng bông hoặc chọn lại từ đầu.
3. Xác nhận để tạo thiệp. Một trong 14 lời chúc được chọn ngẫu nhiên. Ảnh trên thiệp PNG có kích thước 400 × 400px, bo góc 30px. Lời chúc cỡ 40px, tên người nhận tối đa 64px và tiêu đề 88px. Có nút đổi lời chúc, quay lại chỉnh bó hoa và tải ảnh PNG 1200 × 1800 px.

Thiệp có thêm chiều cao để chữ và ảnh lớn vẫn thoáng. Vị trí bó hoa tự điều chỉnh theo số dòng lời chúc; tên dài tự thu nhỏ để vừa khung.

Sáu chấm tròn bên dưới thiệp cho phép chọn màu nền: `#FFDDDD`, `#ED96D7`, `#F5EFE1`, `#FFF5F5`, `#F7D6D0`, `#E2B4BD`. Mặc định là `#F5EFE1`. Màu được giữ khi đổi lời chúc hoặc quay lại sửa bó hoa, và được xuất trực tiếp vào ảnh PNG.

Ảnh được đọc bằng URL tạm trong bộ nhớ trình duyệt, không gửi đến máy chủ, không lưu vào localStorage. Tải lại trang sẽ bắt đầu lại.

## Cấu trúc mã

- `index.html`: ba màn hình của quy trình tạo thiệp.
- `style.css`: màu sắc, bố cục, responsive và chế độ giảm chuyển động.
- `main.js`: danh sách 16 hoa, 14 lời chúc nguyên bản, hình vẽ Canvas, cắt ảnh và tải PNG.

Lily được thể hiện bằng hoa hồng nhạt 6 cánh; hoa ly là phiên bản cánh kép. Đây là hai lựa chọn minh họa thuộc cùng nhóm lily, giữ đúng các tên hoa được yêu cầu. Ngoài bảy lựa chọn ban đầu có tulip, cúc họa mi và cẩm chướng.

Năm lựa chọn bổ sung: hoa sen, hoa lan, oải hương, mẫu đơn và lưu ly.

Lựa chọn thứ 16 là hoa anh đào hồng, minh họa năm cánh có khía và nhụy vàng.

Tất cả hoa đều được vẽ bằng Canvas trong mã nguồn, không dùng ảnh hoa bên ngoài. Thiệp xem trước và ảnh tải về dùng cùng một Canvas nên luôn khớp nhau.

Giấy gói bó hoa có đáy nhọn, với hai mặt giấy gấp về cùng một chóp và nơ hồng ở giữa.

## Xem bằng localhost

Chạy từ thư mục `Blog codex`:

```bash
python3 -m http.server 5173
```

Truy cập `http://localhost:5173/20.10/`.

Không tự thêm liên kết từ blog cá nhân hoặc xuất bản website. Có thể đăng nguyên ba file trên bất kỳ dịch vụ hosting tĩnh nào.
