import React from 'react';
import { Popover, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

// Component Popover cho Lãi suất
const InterestRatePopover = () => {
  // Nội dung của Popover
  const interestRateDetails = (
    <div>
      <p>Lãi suất cơ bản: 5%</p>
      <p>Thêm 0.5% cho mỗi năm vay sau 5 năm.</p>
      <p>Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.</p>
    </div>
  );

  return (
    <Popover content={interestRateDetails} title="Chi tiết lãi suất">
      <Button
        icon={<InfoCircleOutlined />}
        size='small'
        type="link"
        style={{ padding: 0 }}
      />
    </Popover>
  );
};

export default InterestRatePopover;
