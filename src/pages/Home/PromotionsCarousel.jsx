import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { notification } from "antd"; // Import notification từ Ant Design
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';
import banner4 from '../../assets/banner/banner4.png';

const PromotionsCarousel = () => {
  // Mock data cho khuyến mãi
  const promotions = [
    { id: 1, title: "Ưu đãi 1", description: "Giảm 20% phí chuyển tiền", image: banner1 },
    { id: 2, title: "Ưu đãi 2", description: "Nhận 5% tiền hoàn lại", image: banner2 },
    { id: 3, title: "Ưu đãi 3", description: "Tặng voucher 50k cho khách hàng mới", image: banner3 },
    { id: 4, title: "Ưu đãi 4", description: "Giảm 10% phí thường niên", image: banner4 },
  ];

  // Nhóm các khuyến mãi thành cặp
  const groupedPromotions = [];
  for (let i = 0; i < promotions.length; i += 2) {
    groupedPromotions.push(promotions.slice(i, i + 2));
  }

  // Hàm để hiển thị thông báo
  const handlePromoClick = (promo) => {
    notification.warning({
      message: promo.title,
      description: 'Chức năng đang triển khai',
      placement: "topRight", // Vị trí thông báo
    });
  };

  return (
    <div className="w-full p-2">
      <Swiper spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
        {groupedPromotions.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              {group.map((promo) => (
                <div
                  key={promo.id}
                  className="w-1/2 p-3 transition-transform duration-300 hover:scale-105"
                  onClick={() => handlePromoClick(promo)} // Gọi hàm handlePromoClick khi nhấn
                >
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full object-cover rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromotionsCarousel;