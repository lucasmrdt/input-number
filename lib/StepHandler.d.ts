import * as React from 'react';
export interface StepHandlerProps {
    prefixCls: string;
    upNode?: React.ReactNode;
    downNode?: React.ReactNode;
    upDisabled?: boolean;
    downDisabled?: boolean;
    onStep: (up: boolean) => void;
    enabledForMobile?: boolean;
}
export default function StepHandler({ prefixCls, upNode, downNode, upDisabled, downDisabled, onStep, enabledForMobile, }: StepHandlerProps): React.JSX.Element;
