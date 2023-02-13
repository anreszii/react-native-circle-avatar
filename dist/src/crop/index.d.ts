/// <reference types="react" />
import { Size } from '../utils';
export declare type CropProps = {
    source: {
        uri: string;
    };
    cropShape?: 'rect' | 'circle';
    cropArea?: Size;
    borderWidth?: number;
    backgroundColor?: string;
    opacity?: number;
    width?: number;
    height?: number;
    maxZoom?: number;
    resizeMode?: 'contain' | 'cover';
    onCrop: (cropCallback: (quality?: number) => Promise<{
        uri: string;
        width: number;
        height: number;
    }>) => void;
};
declare const Crop: (props: CropProps) => JSX.Element;
export default Crop;
