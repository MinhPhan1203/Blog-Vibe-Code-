# MinhPhan — Personal website

Website cá nhân được thiết kế lại từ `../Blog-main`, giữ nguyên nội dung giới thiệu, bài blog và liên kết mạng xã hội. Bản gốc không bị sửa.

## Xem website

Mở `index.html` trực tiếp bằng trình duyệt, hoặc chạy trong thư mục này:

```bash
python3 -m http.server 5173
```

Truy cập http://localhost:5173.

## Tính năng

- Catppuccin Latte / Mocha; tự nhận giao diện hệ thống lần đầu và lưu lựa chọn.
- Bố cục responsive, menu điện thoại, trạng thái focus bàn phím.
- Animation nhẹ và hỗ trợ `prefers-reduced-motion`.
- Trang chủ, danh sách blog, bài “How I learned to code”.
- HTML/CSS/JavaScript thuần, không cần cài dependency hoặc build.

Sửa nội dung tại `index.html`, `blog/index.html`, `blog/blog1/index.html`; màu và bố cục tại `style.css`. JetBrains Mono Nerd Font được lưu trong `assets/fonts` và tải trực tiếp, không cần cài font trên máy người xem. Các bài #2–#6 giữ trạng thái chưa xuất bản. Nút donate của bản gốc trỏ về trang chủ và không chứa thông tin nhận ủng hộ, nên chưa tạo chức năng thanh toán.

## Chỉnh sửa mã nguồn

Các file dùng thụt lề 2 dấu cách và có chú thích tiếng Việt chia từng khu vực.

- `index.html`: trang chủ; tìm `interest-group` để sửa các mục chạy ngang. Cập nhật cả hai nhóm giống nhau để vòng lặp liền mạch.
- `style.css`: bảng màu, bố cục, responsive và animation được chia theo mục. Tìm `scroll-interests 28s` để đổi tốc độ; số giây lớn hơn nghĩa là chạy chậm hơn.
- `main.js`: chuyển màu, menu điện thoại, hiệu ứng cuộn và nút dừng/chạy dải sở thích.
- `blog/index.html`: danh sách bài viết.
- `blog/blog1/index.html`: nội dung bài viết đầu tiên.
- `.prettierrc.json`: quy tắc định dạng mã; dùng Prettier trong trình soạn thảo để giữ định dạng nhất quán.

Dải sở thích tạm dừng khi rê chuột hoặc focus bàn phím và có nút dừng/chạy. Nếu hệ thống bật giảm chuyển động, các mục hiển thị tĩnh.

## Font, ảnh và icon

- Font: JetBrains Mono Nerd Font Regular / Bold; giấy phép trong `assets/fonts/LICENSE.txt`.
- Ảnh: các GIF và favicon được tải từ đúng URL trong `Blog-main`, lưu tại `assets/images`.
- Icon: Font Awesome giống bản gốc (Facebook, GitHub, Instagram, Discord, menu, quay lại, copyright), lưu tại `assets/fontawesome`; giấy phép đi kèm.
- Cỡ chữ, kích thước cố định và khoảng cách các phần đã tăng 5px so với giao diện trước; breakpoint và đường viền giữ nguyên. Bố cục tự xuống hàng ở màn hình nhỏ.

Phần Things I enjoy sử dụng lại ba icon trang trí `⌘`, `◎`, `>_`. Bài blog #1 chỉ hiển thị GIF góc bàn máy tính ở đầu bài; GIF cuối bài đã bỏ khỏi giao diện.
# Blog-Vibe-Code-
