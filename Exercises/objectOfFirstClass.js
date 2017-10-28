const objectOfFirstClass = (times, f, value) => {
  if (times === 0) {
    return value;
  }
  const newValue = f(value);
  return apply(times - 1, f, newValue);
};
