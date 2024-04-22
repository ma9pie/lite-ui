export const getProperties = ({
  defaultProp,
  optionalProp,
  obj,
}: {
  defaultProp: string;
  optionalProp?: string;
  obj: any;
}) => {
  if (optionalProp && obj.hasOwnProperty(optionalProp)) {
    return obj[optionalProp];
  } else {
    return obj[defaultProp];
  }
};
