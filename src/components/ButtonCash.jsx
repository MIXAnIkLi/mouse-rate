import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";
import propTypes from 'prop-types';
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default function ButtonCash({onClick}) {
  const { styles } = useStyle();

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <Button onClick={onClick} type="primary" size="large">
          День выплат
        </Button>
      </Space>
    </ConfigProvider>
  );
}

ButtonCash.propTypes = {
  onClick: propTypes.any.isRequired,

};
