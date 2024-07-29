declare const _default: ({
    name: string;
    text: string;
    value: string;
    dataSourceFieldType: string[];
    checkStrictly: boolean;
    type: string;
    onChange: (vm: any, v: string[] | undefined, { model }: any) => void;
    title?: undefined;
    items?: undefined;
} | {
    name: string;
    type: string;
    text?: undefined;
    value?: undefined;
    dataSourceFieldType?: undefined;
    checkStrictly?: undefined;
    onChange?: undefined;
    title?: undefined;
    items?: undefined;
} | {
    type: string;
    title: string;
    name: string;
    items: ({
        type: string;
        name: string;
        titlePrefix: string;
        parentFields: (formState: any, { formValue }: any) => any;
        defaultValue: never[];
        text?: undefined;
        options?: undefined;
        legend?: undefined;
        items?: undefined;
    } | {
        name: string;
        text: string;
        type: string;
        defaultValue: string;
        options: ({
            value: string;
            text: string;
            disabled?: undefined;
        } | {
            value: string;
            text: string;
            disabled: boolean;
        })[];
        titlePrefix?: undefined;
        parentFields?: undefined;
        legend?: undefined;
        items?: undefined;
    } | {
        type: string;
        legend: string;
        name: string;
        items: ({
            name: string;
            text: string;
            type?: undefined;
            options?: undefined;
            defaultValue?: undefined;
        } | {
            text: string;
            name: string;
            type: string;
            options: {
                text: string;
                value: string;
            }[];
            defaultValue?: undefined;
        } | {
            name: string;
            text: string;
            type: string;
            options?: undefined;
            defaultValue?: undefined;
        } | {
            name: string;
            text: string;
            type: string;
            defaultValue: string;
            options: {
                text: string;
                value: string;
            }[];
        } | {
            name: string;
            text: string;
            defaultValue: string;
            type?: undefined;
            options?: undefined;
        })[];
        titlePrefix?: undefined;
        parentFields?: undefined;
        defaultValue?: undefined;
        text?: undefined;
        options?: undefined;
    })[];
    text?: undefined;
    value?: undefined;
    dataSourceFieldType?: undefined;
    checkStrictly?: undefined;
    onChange?: undefined;
})[];
export default _default;
