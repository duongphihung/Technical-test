import Image from "next/image";
import Information from "./components/infomation/Information";
import Rating from "./components/rating/Rating";

export default function Home() {
  return (
    <div>
      <div>
        <div>Slice ảnh xem hàng hóa</div>
        <div>Gồm tên hàng hóa các button thêm vào giỏ hàng</div>
      </div>
      {/* thông tin chi tiết hàng hóa */}
      <div>
        {/* Làm tab UI di chuyển qua lại giữa 2 component */}
        <Information />
        <Rating />
      </div>
    </div>
  );
}
