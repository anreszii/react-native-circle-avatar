export declare type Size = {
    width: number;
    height: number;
    rotation?: number;
};
export declare type Range = {
    max: number;
    min: number;
};
declare enum Orientation {
    landscape = 0,
    portrait = 1,
    even = 2
}
declare enum Fit {
    width = 0,
    height = 1
}
export declare const log: (obj: any) => void;
export declare const assert: (failsTest: boolean, message: string) => Error | void;
export declare const round: (num: number, precision: number) => number;
export declare const isInRange: (value: number, max: number, min: number) => boolean;
export declare const getAlpha: (opacity: number) => string;
export declare const getRatio: (imageSize: Size) => number;
export declare const getValue: (animated: any) => any;
export declare const getOrientation: (size: Size) => Orientation;
export declare const getAspectRatio: (size: Size) => number;
export declare const computeImageSize: (uri: string) => Promise<Size>;
export declare const computeScale: (current: number, last: number, max: number, min: number) => number;
export declare const computeContain: (imageSize: Size, cropArea: Size) => number;
export declare const computeCover: (scale: number, imageSize: Size, size: Size, cropArea: Size) => number;
export declare const translateRangeX: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => {
    max: number;
    min: number;
};
export declare const translateRangeY: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => {
    max: number;
    min: number;
};
export declare const computeTranslation: (current: number, last: number, max: number, min: number) => number;
export declare const computeScaledWidth: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => number;
export declare const computeScaledHeight: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => number;
export declare const computeScaledMultiplier: (imageSize: Size, width: number) => number;
export declare const computeTranslate: (imageSize: Size, x: number, y: number) => {
    x: number;
    y: number;
};
export declare const computeOffset: (scaled: Size, imageSize: Size, translate: {
    x: number;
    y: number;
}, maxTranslateX: number, maxTranslateY: number, multiplier: number) => {
    x: number;
    y: number;
};
export declare const computeSize: (size: Size, multiplier: number) => Size;
declare const _default: {
    log: (obj: any) => void;
    Fit: typeof Fit;
    Orientation: typeof Orientation;
    assert: (failsTest: boolean, message: string) => void | Error;
    getValue: (animated: any) => any;
    getAlpha: (opacity: number) => string;
    getRatio: (imageSize: Size) => number;
    getOrientation: (size: Size) => Orientation;
    isInRange: (value: number, max: number, min: number) => boolean;
    computeScale: (current: number, last: number, max: number, min: number) => number;
    computeCover: (scale: number, imageSize: Size, size: Size, cropArea: Size) => number;
    computeImageSize: (uri: string) => Promise<Size>;
    translateRangeX: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => {
        max: number;
        min: number;
    };
    translateRangeY: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => {
        max: number;
        min: number;
    };
    computeTranslate: (imageSize: Size, x: number, y: number) => {
        x: number;
        y: number;
    };
    computeScaledWidth: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => number;
    computeScaledHeight: (scale: number, imageSize: Size, cropArea: Size, minZoom: number) => number;
    computeScaledMultiplier: (imageSize: Size, width: number) => number;
};
export default _default;
