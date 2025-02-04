import React from "react";

const Field = ({ label, children, htmlFor, error,classNameFor }) => {
  const id = htmlFor || getChildId(children);
  return (
    <>
      {label && (
        <label htmlFor={id} className={classNameFor}>
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div className="text-red-600" role="alert">
          {error.message}
        </div>
      )}
    </>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child?.props) {
    return child.props.id;
  }
};

export default Field;
