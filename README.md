Đầu tiên tạo kho online sau đó clone về máy bằng lệnh 20

1.// git init

2.// git status

3.// git add

4.// git commit -m ""
_________________________________

5.// git log -> show lịch sử

6.// git show "mã băm commit" -> show thay đổi của lần commit 

7.// git diff -> show những thay đổi chưa được commit
__________________________________________________

8*.// git checkout -- tênFile -> quay lại quá khứ (chưa dùng lệnh add)- vẫn ở trạng thái ĐỎ - CHƯA COMMIT

9*.// git reset HEAD tênFile  -> chuyển trạng thái để dùng checkouts (đã dùng add) - chuyển trạng thái từ XANH thành ĐỎ   - CHƯA COMMIT -> dùng lệnh checkout ở trên

__________________________________________________________

10.// git checkout -b nhánh -> tạo nhánh mới

11.// git checkout nhánh   -> chuyển sang nhánh được checkout 

12.// git merge nhánh

A <-- B // merge B vào A.
git checkout A -> chuyển sang nhánh A.
git merge B -->merge B vào A.

13.// git branch -D nhánh -> hủy nhánh

____________________________________________________________________

14.// git reset --soft "mã băm commit" --> quay lại lần commit trên ( về trạng thái xanh) mất commit trên đường đi nhưng code sẽ không thay đổi (muốn thay đổi code dùng lệnh 8, 9)

15.// git reset --mixed "mã băm commit" --> quay lại lần commit trên ( về trạng thái đỏ ) mất commit trên đường đi nhưng code sẽ không thay đổi (muốn thay đổi code dùng lệnh 8, 9)

16.// git reset --hard "mã băm commit" --> quay lại lần commit trên, xóa tất cả commit trên đường đi ( ít dùng do tất cả code của các commit sẽ bị xóa theo các commit )

__________________________________________

17.// git revert "mã băm commit" --> (ít dùng) tạo ra 1 commit mới đảo ngược lại commit ở trên. những thay đổi trong code của lần commit trong quá khứ sẽ biến mất trong commit vừa tạo ra 

18.// .gitinore --> là nơi chứa các file, thư mục ta không muốn chúng xuất hiện để commit

19.// git config --global credential.helper wincred  -->không phải đăng nhập nhiều lần
__________________________________________

20.// git clone tênRepo -->copy nguyên bản project về máy

21.// git pull origin master
 -> gộp những thay đổi mới kéo về từ máy chủ từ xa với nhánh hiện tại trên máy local.

22.// git push origin branch/master -> merge vào branch/master