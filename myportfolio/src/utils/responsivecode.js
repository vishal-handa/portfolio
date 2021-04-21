export const size = {
  smallPhone: 736,
  tablet: 980,
  desktop: 1280,
};

export const device = {
  smallPhone: `(max-width: ${size.smallPhone}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
};

export const onPhone = () => `
    @media ${device.smallPhone}
  `;
export const onTablet = () => `
    @media ${device.tablet}
  `;
export const onDesktop = () => `
    @media ${device.desktop}
  `;
