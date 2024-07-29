const getColorOption = (obj?: { min?: number; max?: number }) => {
  const currentMin = obj?.min || 0;
  const currentMax = obj?.max || 19;
  return Array.from({ length: currentMax - currentMin + 1 }, (_, i) => ({
    value: i + currentMin,
    text: i + currentMin,
  }));
};

export default [
  {
    text: '显示的图标',
    name: 'icon',
    type: 'data-source-input',
  },
  {
    text: '头像图片路径',
    name: 'image',
    type: 'data-source-input',
  },
  {
    text: '头像图片路径',
    name: 'size',
    type: 'type',
    defaultValue: 'mini',
    options: [
      { value: 'mini', text: 'mini' },
      { value: 'small', text: 'small' },
    ],
  },
  {
    text: '显示的文字',
    name: 'text',
    type: 'data-source-input',
  },
  {
    text: '头像旁边的标题部分',
    name: 'title',
    type: 'data-source-input',
  },
  {
    text: '头像旁边的简介部分',
    name: 'description',
    type: 'data-source-input',
  },
  {
    text: '默认头像地址',
    name: 'defaultUrl',
    type: 'data-source-input',
  },
  {
    text: '形状',
    name: 'shape',
    type: 'select',
    defaultValue: 'round',
    options: [
      { value: 'round', text: '圆形' },
      { value: 'square', text: '方形' },
    ],
    // onChange: () => {},
  },
  {
    text: '背景色',
    name: 'bgColor',
    // 颜色控件
    type: 'data-source-input',
  },
  {
    text: '文字颜色',
    name: 'color',
    // 颜色控件
    type: 'data-source-input',
  },
  {
    text: '文字大小',
    name: 'fontSize',
    type: 'data-source-input',
  },
  {
    text: '裁剪模式',
    name: 'mode',
    type: 'select',
    defaultValue: 'scaleToFill',
    options: [
      { value: 'scaleToFill', text: 'scaleToFill' },
      { value: 'widthFix', text: 'widthFix' },
    ],
    // onChange: () => {},
  },
  {
    text: '显示小程序头像',
    name: 'mpAvatar',
    type: 'switch',
  },
  {
    text: '是否使用随机背景色',
    name: 'randomBgColor',
    type: 'switch',
  },
  {
    text: '默认的背景色数组（0-19）',
    name: 'colorIndex',
    type: 'select',
    defaultValue: '0',
    options: getColorOption(),
    // onChange: () => {},
  },
  {
    text: '组件标识符',
    name: 'name',
    type: 'data-source-input',
  },
  {
    text: '显示边缘',
    name: 'showBorder',
    type: 'switch',
  },
  {
    text: '最小图标大小',
    name: 'miniSize',
    type: 'data-source-input',
  },
];
