declare const _default: ({
    text: string;
    name: string;
    disabled: boolean;
    extra: string;
    type?: undefined;
    defaultValue?: undefined;
    options?: undefined;
    onChange?: undefined;
} | {
    text: string;
    name: string;
    type: string;
    disabled?: undefined;
    extra?: undefined;
    defaultValue?: undefined;
    options?: undefined;
    onChange?: undefined;
} | {
    name: string;
    text: string;
    type: string;
    defaultValue: string;
    options: {
        value: string;
        text: string;
    }[];
    onChange: (formState: any, v: string, { model }: any) => string | undefined;
    disabled?: undefined;
    extra?: undefined;
})[];
export default _default;
