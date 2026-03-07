---
sidebar_position: 1
---
# Introduction to Advanced Root Hiding

*I'll write this section in Vietnamese since it's more natural for me to express myself in my native language, and I hope it won't be a problem for you.*  🇻🇳

*@teppyboy pls translate this to English for me* :sob:

## Cần chuẩn bị gì trước khi bắt đầu?
- Thiết bị của bạn có thể root bằng KernelSU hoặc các bản fork của nó. (tôi không sử dụng Magisk nên cũng không biết...)
- Bạn đã có kiến thức cơ bản về root và cách hoạt động của nó.
- Luôn sao lưu mọi dữ liệu quan trọng trước khi thực hiện bất kỳ thay đổi nào trên thiết bị của bạn (dù chỉ đơn giản là update một module nào đó).
- Bạn nên chuẩn bị sẵn một tâm hồn đẹp nữa :P (ý tôi là, hôm nay nó hoạt động nhưng không có gì đảm bảo ngày mai nó vẫn hoạt động đâu)

## Vài lưu ý nhỏ
- Đa phần các giải pháp ẩn root đều là dự án mã nguồn mở, và thường những bản fork của những dự án lớn trong đó lại ẩn root tốt hơn cả bản gốc (thường được đặt tên thêm hậu tố -Next). Nếu có nhiều lựa chọn, bạn nên ưu tiên những bản fork đang được commit thuờng xuyên hơn, có cộng đồng hoạt động tích cực hơn, ...
- Một số app root checker có thể kiểm tra root và đưa kết quả cụ thể cho bạn để bạn đỡ phải đoán mò, như [Native Detector](https://github.com/reveny/Android-Native-Root-Detector), ...
- Theo hiểu biết đến hiện tai của mình, cứ để LSPosed hook vào app nào là app đấy check ra root ngay, nên là với những app như vậy thì không có cách nào hay hơn ngoài việc đừng để một module LSPosed nào hook vào nó cả, còn nếu bạn vẫn muốn thì tự tìm cách đi.

## Setup hiện tại của tôi, bạn có thể tham khảo nếu muốn
:::info
Hiện tại tôi đang root trên Google Pixel 6, phiên bản Android 16 (latest release) và kernel android14-6.1. Tôi không dùng custom rom, nên cũng không biết ẩn tuy nhiên vì tôi dùng làm máy chính nên tôi không muốn làm mọi thứ phức tạp hơn cần thiết đâu, tôi sẽ chỉ tập trung vào việc ẩn root thôi, còn những thứ khác thì... có lẽ là không 😛
:::
- [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next) v3.0.0 (và có thể mới hơn)
- [SuSFS](https://gitlab.com/simonpunk/susfs4ksu) v2.0.0
- AnyKernel3: [WildKernels GKI](https://github.com/WildKernels/GKI_KernelSU_SUSFS) (patch sẵn 2 cái trên luôn, quá tiện)
- Metamodule: [Hybrid Mount](https://github.com/KernelSU-Modules-Repo/hybrid_mount)
- Zygisk: [Zygisk Next](https://github.com/Dr-TSNG/ZygiskNext)
- Play Integrity: [Integrity Box](https://github.com/MeowDump/Integrity-Box) và [TEESimulator](https://github.com/JingMatrix/TEESimulator)

<a><img src="/img/Screenshot_20260307-223813.png" width="400"/></a>
<a><img src="/img/Screenshot_20260308-020427.png" width="400"/></a>

***Cảm ơn bạn đã chịu khó đọc đến đây, giờ hãy qua chương khác đi nhé, tôi không thích nói nhiều cho lắm đâu*** 😛
