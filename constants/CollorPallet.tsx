export const  COLORS={
    darkGray:'#95a5a6',
    orange:'#e67e22',
    light: 'FFF'


} as const;

export type ColorTypes = keyof typeof COLORS;