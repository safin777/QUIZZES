import cn from "../../utils/cn";
import React from "react";
const InputField = ({
    children,
    className,
    htmlfor,
    error,
    label,
    labelClass,
    message,
    ...rest
}) => {
    const getChildren = (children) => {
        const child = React.Children.only(children);
        if (child?.props?.id) {
            return child?.props?.id;
        }
    }
    const id = htmlfor || getChildren(children);
    return (
        <div className={cn(`mb-4 ${className}`)}>
            {label && (
                <label htmlFor={id} className={cn(`block mb-2`, labelClass)}>
                    {label}
                </label>
            )}
            {children}
            {error && (
                <p role="alert" className="text-sm text-red-500">
                    {error?.message}
                </p>
            )}

        </div>
    )
}

export default InputField
