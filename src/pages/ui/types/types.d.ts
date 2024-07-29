export type PartCSSStyle = {
    [key in keyof CSSStyleDeclaration]?: string | number;
};
export type CSSStyleKey = keyof CSSStyleDeclaration;
export type CanModifyCSSStyleKey = Exclude<CSSStyleKey, 'length' | 'parentRule'>;
export type StyleCfg = ((p1: any, p2: any) => PartCSSStyle) | PartCSSStyle;
export interface MEvent {
    name: string;
    to: number | string;
    method: string;
}
export interface MEventInMap {
    from: number | string;
    to: number | string;
    method: string;
}
export type MEventMapType = Record<string, MEventInMap[]>;
export type MEventQueueMapType = Record<string | number, MEventInMap[]>;
export interface MEventBus {
    $on: (...args: any) => void;
    $off: (...args: any) => void;
    $once: (...args: any) => void;
    $emit: (...args: any) => void;
}
